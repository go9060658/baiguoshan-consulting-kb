# GitHub Pages 發布流程

> 狀態標籤：已確認

## 文件目的

這份文件用來固定百果山探索樂園業主版頁面的發布方式。後續只要更新 `client-report/index.html`，就依這份 SOP 發布到 GitHub Pages。

## 目前發布架構

- 原始專案工作分支：`main`
- GitHub Pages 發布分支：`gh-pages`
- 公開網址：[https://go9060658.github.io/baiguoshan-consulting-kb/](https://go9060658.github.io/baiguoshan-consulting-kb/)

## 發布原則

1. 內部知識庫與報告內容維持在 `main`
2. 對外只發布 `client-report/index.html`
3. 每次發布都要保留 `main` 分支不受影響

## 發布前檢查

每次發布前，先確認：

1. `client-report/index.html` 已更新完成
2. 本機時間正確
3. `main` 分支內容已 commit
4. GitHub 帳號為 `go9060658`

## 建議發布方式

直接執行專案內建腳本：

```powershell
powershell -ExecutionPolicy Bypass -File scripts/publish-client-report.ps1
```

## 腳本會做的事

1. 檢查目前 git 狀態
2. 確認 `client-report/index.html` 存在
3. 建立暫時 worktree
4. 將 `main` 分支中的 `client-report/index.html` 複製到 `gh-pages` 分支首頁 `index.html`
5. 補上 `.nojekyll`
6. 若有變更則 commit 並 push 到 `gh-pages`
7. 清掉暫時 worktree

## 發布後檢查

發布後應確認：

1. `gh-pages` push 成功
2. GitHub Pages 網址可以正常打開
3. 畫面是否為最新版本

## 注意事項

1. 這個流程目前是手動發布，不是自動發布
2. 這樣的好處是對外頁面不會因為內部內容改動而意外上線
3. 等流程穩定後，再考慮改成自動發布

## 當前結論

目前百果山專案最穩的方式是：

- 內部在 `main` 持續更新
- 對外頁面需要時手動發布到 `gh-pages`

這樣能同時保留內部工作彈性與對外頁面穩定性。
