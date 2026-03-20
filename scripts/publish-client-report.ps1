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
    throw "Repo path not found: $RepoPath"
}

$sourceFile = Join-Path $RepoPath "client-report\index.html"
if (-not (Test-Path $sourceFile)) {
    throw "Client report page not found: $sourceFile"
}

$status = git -C $RepoPath status --short
if ($status) {
    throw "Working tree is dirty. Commit changes before publish."
}

$repoName = Split-Path $RepoPath -Leaf
$tempRoot = Join-Path ([System.IO.Path]::GetTempPath()) ($repoName + "-pages")

if (Test-Path $tempRoot) {
    Write-Step "Remove old temp worktree"
    Remove-Item -Recurse -Force $tempRoot
}

Write-Step "Create Pages temp worktree"
git -C $RepoPath worktree add $tempRoot $PagesBranch | Out-Null

try {
    Write-Step "Copy client report to gh-pages"
    Copy-Item $sourceFile (Join-Path $tempRoot "index.html") -Force
    Set-Content -Path (Join-Path $tempRoot ".nojekyll") -Value "" -Encoding UTF8

    Write-Step "Check for changes"
    $pagesStatus = git -C $tempRoot status --short
    if (-not $pagesStatus) {
        Write-Host "No changes to publish." -ForegroundColor Yellow
        return
    }

    Write-Step "Commit gh-pages update"
    git -C $tempRoot add index.html .nojekyll
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss zzz"
    git -C $tempRoot commit -m "Update client report page ($timestamp)" | Out-Null

    Write-Step "Push gh-pages"
    git -C $tempRoot push origin $PagesBranch | Out-Null

    Write-Host "Publish complete:" -ForegroundColor Green
    Write-Host "https://go9060658.github.io/baiguoshan-consulting-kb/" -ForegroundColor Green
}
finally {
    Write-Step "Remove temp worktree"
    git -C $RepoPath worktree remove $tempRoot --force | Out-Null
}
