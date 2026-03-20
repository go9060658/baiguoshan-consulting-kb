const docs = [
  {
    file: "docs/01_overview.md",
    title: "專案總覽",
    tag: "Overview",
    summary: "整理園區定位、核心摘要、已完成模組與顧問總觀。"
  },
  {
    file: "docs/02_history.md",
    title: "園區歷史與重新開幕",
    tag: "History",
    summary: "從 2016 試營運、2024 暫停，到 2026 年 2.0 重新開園。"
  },
  {
    file: "docs/03_park_profile.md",
    title: "園區基本定位",
    tag: "Profile",
    summary: "整理地址、類型、面積、主題世界觀與市場定位。"
  },
  {
    file: "docs/04_attractions.md",
    title: "主要設施與玩法",
    tag: "Attractions",
    summary: "彙整 12 項主打設施，並移除未確認的延伸體驗項目。"
  },
  {
    file: "docs/05_pricing.md",
    title: "票價與收費模式",
    tag: "Pricing",
    summary: "拆解低門票入園 + 單項付費的優缺點與風險。"
  },
  {
    file: "docs/06_customer_journey.md",
    title: "遊客旅程與動線",
    tag: "Journey",
    summary: "從發現景點到離園，整理標準遊客路徑與空間結構。"
  },
  {
    file: "docs/07_business_model.md",
    title: "營運模型與收入結構",
    tag: "Business",
    summary: "保留門票與設施主軸，將未確認的次要收入降級處理。"
  },
  {
    file: "docs/08_reviews_and_issues.md",
    title: "評論與營運問題",
    tag: "Issues",
    summary: "整理價格與服務痛點，避免把未查核的餐飲敘述寫成定論。"
  },
  {
    file: "docs/09_swot.md",
    title: "SWOT 分析",
    tag: "SWOT",
    summary: "統整優勢、劣勢、機會與威脅，建立策略視角。"
  },
  {
    file: "docs/10_marketing_strategy.md",
    title: "行銷與社群策略",
    tag: "Marketing",
    summary: "聚焦短影音、IP 化、打卡內容與成長槓桿。"
  },
  {
    file: "docs/11_competitors.md",
    title: "競爭景點分析",
    tag: "Competitors",
    summary: "比較中部與周邊親子景點，找出真正競爭對手。"
  },
  {
    file: "docs/12_consultant_conclusion.md",
    title: "顧問最終結論",
    tag: "Conclusion",
    summary: "列出核心問題、優先行動順序與最終戰略判斷。"
  },
  {
    file: "docs/13_verification_notes.md",
    title: "待驗證與已移除項目",
    tag: "Verify",
    summary: "集中列出疑似幻想、缺乏來源或已從正式文件移除的內容。"
  },
  {
    file: "docs/14_consulting_report_framework.md",
    title: "顧問報告框架",
    tag: "Framework",
    summary: "固定追蹤 KPI、洞察與策略調整的顧問報告 Operating System。"
  },
  {
    file: "meeting-reports/templates/meeting-report-template.md",
    title: "會議報告模板",
    tag: "Template",
    summary: "固定會議摘要、KPI、洞察、決策與資料請求欄位。"
  },
  {
    file: "monthly-reports/templates/monthly-report-template.md",
    title: "月報模板",
    tag: "Template",
    summary: "固定時間標記、KPI、口碑、社群、體驗與下月建議欄位。"
  },
  {
    file: "client-report/index.html",
    title: "業主版 Q2 顧問報告",
    tag: "Client",
    summary: "目前對外的 Q2 HTML 報告頁，整合會後數據、季度判斷與後續資料需求。"
  },
  {
    file: "docs/15_operating_workflow.md",
    title: "顧問案作業流程",
    tag: "Workflow",
    summary: "固定後續開會、補資料、更新報告與同步業主頁面的 SOP。"
  },
  {
    file: "docs/16_pages_deployment_sop.md",
    title: "Pages 發布流程",
    tag: "Deploy",
    summary: "固定將業主版頁面發布到 GitHub Pages 的 SOP 與腳本。"
  },
  {
    file: "docs/17_99yi_war_room_plan.md",
    title: "99yi顧問小編 戰情室規劃",
    tag: "War Room",
    summary: "規劃給內部小編與顧問端使用的多專案靜態頁面，包括分頁架構、欄位與更新流程。"
  },
  {
    file: "meeting-reports/2026-03-20-owner-meeting-summary.md",
    title: "2026-03-20 業主會議紀錄",
    tag: "Meeting",
    summary: "整理本次會議中確認的人流數據、Q2 經營重點與夜間規劃方向。"
  },
  {
    file: "content-plans/2026-q2-social-content-plan.md",
    title: "2026 Q2 社群內容規劃",
    tag: "Content",
    summary: "把貼文比例、每月節奏、題型方向與執行原則正式落成專案文件。"
  },
  {
    file: "war-room/index.html",
    title: "99yi顧問小編 戰情室",
    tag: "War Room",
    summary: "給內部小編與顧問端使用的多專案靜態頁面，集中管理會議、策略、議題與補件。"
  }
];

const grid = document.querySelector("#docs-grid");

grid.innerHTML = docs.map((doc) => `
  <article class="doc-card">
    <span class="doc-meta">${doc.tag}</span>
    <h3>${doc.title}</h3>
    <p>${doc.summary}</p>
    <a class="doc-link" href="${doc.file}">開啟文件</a>
  </article>
`).join("");
