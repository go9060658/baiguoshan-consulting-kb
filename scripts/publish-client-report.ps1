param(
    [string]$RepoPath = "d:\VIBECODING\projects\baiguoshan-consulting-kb",
    [string]$SourceBranch = "main",
    [string]$PagesBranch = "gh-pages"
)

$ErrorActionPreference = "Stop"

function Write-Step {
    param([string]$Message)
    Write-Host "==> $Message" -ForegroundColor Cyan
}

if (-not (Test-Path $RepoPath)) {
    throw "找不到專案路徑：$RepoPath"
}

$sourceFile = Join-Path $RepoPath "client-report\index.html"
if (-not (Test-Path $sourceFile)) {
    throw "找不到業主版頁面：$sourceFile"
}

$status = git -C $RepoPath status --short
if ($status) {
    throw "目前有未提交變更，請先 commit 再發布。"
}

$repoName = Split-Path $RepoPath -Leaf
$tempRoot = Join-Path ([System.IO.Path]::GetTempPath()) "$repoName-pages"

if (Test-Path $tempRoot) {
    Write-Step "清除舊的暫存 worktree"
    Remove-Item -Recurse -Force $tempRoot
}

Write-Step "建立 Pages 暫存 worktree"
git -C $RepoPath worktree add $tempRoot $PagesBranch | Out-Null

try {
    Write-Step "覆寫 gh-pages 首頁"
    Copy-Item $sourceFile (Join-Path $tempRoot "index.html") -Force
    Set-Content -Path (Join-Path $tempRoot ".nojekyll") -Value "" -Encoding UTF8

    Write-Step "檢查是否有變更"
    $pagesStatus = git -C $tempRoot status --short
    if (-not $pagesStatus) {
        Write-Host "沒有可發布的變更。" -ForegroundColor Yellow
        return
    }

    Write-Step "提交 gh-pages 更新"
    git -C $tempRoot add index.html .nojekyll
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss zzz"
    git -C $tempRoot commit -m "更新業主版 Q2 顧問報告頁 ($timestamp)" | Out-Null

    Write-Step "推送到 gh-pages"
    git -C $tempRoot push origin $PagesBranch | Out-Null

    Write-Host "發布完成：" -ForegroundColor Green
    Write-Host "https://go9060658.github.io/baiguoshan-consulting-kb/" -ForegroundColor Green
}
finally {
    Write-Step "移除暫存 worktree"
    git -C $RepoPath worktree remove $tempRoot --force | Out-Null
}
