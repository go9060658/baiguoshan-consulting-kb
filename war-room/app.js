const projects = [
  {
    id: "baiguoshan",
    name: "百果山探索樂園",
    tagline: "Q2 重點：維繫品質，不再額外放大客量",
    status: "進行中",
    updatedAt: "2026-03-20 14:32:58 +08:00",
    dataCutoff: "2026-03-20 14:32:58 +08:00",
    version: "v0.1",
    summary:
      "百果山目前已進入第二季營運管理階段。重點不在追更高人流，而在於把購票理解、排隊體驗、安全秩序與連假後的正面口碑接住。",
    heroStats: [
      { label: "三月平日", value: "400 / 日", note: "目前平日量體不大，但利於建立舒適體驗。" },
      { label: "三月假日", value: "5,000 / 兩日", note: "單日約 2,500 人，已接近理想經營區間。" },
      { label: "理想水位", value: "3,000 / 日", note: "業主認為此時均銷與體驗表現最穩定。" },
      { label: "五月規劃", value: "夜間時段", note: "五、六、日延長營運為目前討論中的方向。" }
    ],
    currentFocus: [
      "把票價規則與玩法差異做成家長一看就懂的內容。",
      "用友善提醒處理安全與秩序問題，降低現場衝突。",
      "承接三月底媒體曝光，轉成 4 月到 6 月的連續節奏。"
    ],
    thisWeek: [
      "整理兒童節與清明連假的行前必看內容。",
      "優先製作購票規則圖解與安全玩耍短影音腳本。",
      "盤點五月夜間營運的公告需求與預熱素材。"
    ],
    alerts: [
      "假日人流若超過 3,000 / 日，排隊與抱怨會快速上升。",
      "天氣仍是來客波動的重要因素，內容與營運需保留彈性。",
      "Google 評論與社群後台數據仍待業主持續補件。"
    ],
    tabs: [
      { id: "overview", label: "專案總覽" },
      { id: "owner", label: "業主資訊" },
      { id: "meetings", label: "會議紀錄" },
      { id: "social", label: "最新社群規劃" },
      { id: "topics", label: "可設計議題" },
      { id: "requests", label: "後續需補資料" },
      { id: "updates", label: "更新日誌" }
    ],
    views: {
      overview: {
        title: "專案總覽",
        intro:
          "這一頁是小編與顧問端快速對齊的入口，重點看目前專案狀態、第二季主軸與這週要先做什麼。",
        sections: [
          {
            type: "grid-3",
            items: [
              {
                label: "一句話定位",
                title: "中部恐龍主題親子樂園",
                body: "百果山目前最明確的市場印象，仍然是恐龍主題、家庭半日遊與 12 項遊樂設施。"
              },
              {
                label: "本季管理主題",
                title: "維繫品質優先",
                body: "Q2 的任務不是衝更高流量，而是在自然流量足夠的前提下，讓現場體驗不要崩壞。"
              },
              {
                label: "本期顧問判斷",
                title: "先解釋，再放大",
                body: "第二季應先把票價規則、玩法與安全內容說清楚，再讓自然流量穩定轉成正向口碑。"
              }
            ]
          },
          {
            type: "grid-2",
            items: [
              {
                label: "本期最重要三件事",
                title: "本期優先動作",
                list: [
                  "行前必看內容要先完成。",
                  "兒童節與清明連假的人流預期要先說清楚。",
                  "五月夜間營運的內容敘事要提早暖身。"
                ]
              },
              {
                label: "不建議的方向",
                title: "本期避免事項",
                list: [
                  "不要再用強刺激的廣告文案硬推流量。",
                  "不要把貼文全部做成單純促銷訊息。",
                  "不要等現場出問題後才被動解釋規則。"
                ]
              }
            ]
          }
        ]
      },
      owner: {
        title: "業主資訊",
        intro:
          "這一頁整理的是小編需要知道的業主最新經營重點、已確認數據與溝通邏輯，避免內容方向和業主期待相反。",
        sections: [
          {
            type: "grid-2",
            items: [
              {
                label: "已確認數據",
                title: "目前真實營運基線",
                list: [
                  "三月平日平均每日約 400 人。",
                  "三月假日兩天合計約 5,000 人。",
                  "二月全月約 8 萬人，但只作參考。",
                  "春節初一到初六約 3 萬多。"
                ]
              },
              {
                label: "經營判斷",
                title: "業主目前的核心觀點",
                list: [
                  "單日約 3,000 人是最理想的人流水位。",
                  "超過 3,000 人後，體驗與抱怨容易惡化。",
                  "第二季希望維繫品質，不希望再把客量往上推。",
                  "三月底電視台採訪會帶來自然流量。"
                ]
              }
            ]
          },
          {
            type: "grid-2",
            items: [
              {
                label: "業主想做",
                title: "已確認規劃方向",
                list: [
                  "用內容把購票規則與玩法講清楚。",
                  "用友善提醒處理安全與秩序問題。",
                  "規劃五月五、六、日夜間時段。",
                  "延續媒體熱度，做二次剪輯與互動內容。"
                ]
              },
              {
                label: "業主不想做",
                title: "現階段避免方向",
                list: [
                  "不想再額外加強廣告投放。",
                  "不希望因行銷過度放大導致現場失控。",
                  "對評論中的部分抱怨內容傾向不逐則回覆。"
                ]
              }
            ]
          },
          {
            type: "grid-2",
            items: [
              {
                label: "溝通語氣",
                title: "小編要注意的表達方式",
                list: [
                  "以友善提醒為主，不要用過度強硬的命令句。",
                  "誠實說明假日人潮與平日舒適度差異。",
                  "先教家長怎麼玩，再談活動與熱度。"
                ]
              },
              {
                label: "現場痛點",
                title: "內容要優先處理的問題",
                list: [
                  "票價與方案容易混淆。",
                  "倒著溜滑梯與抱著孩子溜滑梯等危險行為。",
                  "排隊久、票價高、沒衛生紙等抱怨。"
                ]
              }
            ]
          }
        ]
      },
      meetings: {
        title: "會議紀錄",
        intro: "這一頁只放對小編有用的會議摘要，不用每次重新翻完整文件。",
        timeline: [
          {
            date: "2026-03-20",
            badge: "最新",
            title: "Q2 維繫品質方向正式確認",
            summary: "本次會議補進真實人流數據，並確認第二季不主打加強廣告，而是優先處理玩法說明、安全提醒與夜間營運規劃。",
            bullets: [
              "三月平日約 400 / 日，假日兩天約 5,000。",
              "理想人流約 3,000 / 日，超過後體驗與均銷未必更好。",
              "五月夜間時段預計主打避暑、夜景與延長營業。",
              "貼文需承擔購票規則、安全教育與人流預期管理。"
            ]
          },
          {
            date: "2026-03-16",
            badge: "啟動",
            title: "Q2 顧問流程與資料補件機制建立",
            summary: "先用已確認資訊完成第一版 Q2 顧問報告，並在會議中向業主說明後續需要持續提供數據。",
            bullets: [
              "建立會議報告、月報、季報與業主版頁面的流程。",
              "確認後續會依數據更新分析報告。",
              "固定追蹤 KPI、洞察與策略調整。"
            ]
          }
        ]
      },
      social: {
        title: "最新社群規劃",
        intro: "這一頁是目前小編執行的主依據。所有貼文方向都應以這裡為主，而不是只憑單次訊息或臨時口頭交代。",
        sections: [
          {
            type: "grid-4",
            items: [
              { label: "貼文比例", title: "教育類 30%", body: "票價與玩法懶人包、彩虹滑道安全說明、行前必看內容。" },
              { label: "貼文比例", title: "資訊類 30%", body: "假日人流預報、平日入園建議、夜間營業時間公告。" },
              { label: "貼文比例", title: "感性 / 熱度類 30%", body: "媒體片段二剪、夜景氛圍、遊客正面照片與互動貼文。" },
              { label: "貼文比例", title: "機動應變 10%", body: "雨天提醒、尖峰通知、臨時服務異動與現場更新。" }
            ]
          },
          {
            type: "timeline",
            items: [
              { date: "3 月下旬", title: "媒體熱度承接", summary: "預告三家電視台採訪與節目露出，開始鋪陳 4 月行前必看內容。" },
              { date: "4 月", title: "兒童節與清明連假", summary: "主軸是把玩法、規則與假日預期講清楚，不只做節慶熱鬧感。" },
              { date: "5 月", title: "夜間營運預熱與啟動", summary: "以避暑、夜景、延長營業為主軸，帶出百果山夜間新情境。" },
              { date: "6 月", title: "端午與暑假前預熱", summary: "整理第二季最佳遊玩節奏與家庭回饋，轉成暑假前的決策素材。" }
            ]
          }
        ]
      },
      topics: {
        title: "可設計議題",
        intro: "這裡是給小編直接拿去發想的題型庫。每張卡都要標狀態，避免把還沒確認的東西直接做出去。",
        topics: [
          {
            status: "ready",
            type: "教育類",
            format: "圖文 / 懶人包",
            title: "一張圖看懂購票規則",
            purpose: "降低現場詢問與票價誤解。",
            notes: ["整理一般票、團體票與特約方案差異。", "標註行前必看。", "適合做置頂貼文或精選動態。"]
          },
          {
            status: "ready",
            type: "安全教育",
            format: "短影音 / Reels",
            title: "安全玩耍 1-2-3",
            purpose: "處理彩虹滑道錯誤使用與排隊秩序問題。",
            notes: ["示範正確姿勢。", "避免用責備語氣。", "可搭配現場畫面與文字提醒。"]
          },
          {
            status: "ready",
            type: "資訊類",
            format: "圖文 / 限動",
            title: "假日人流提醒與平日建議",
            purpose: "提前管理期待，降低連假抱怨。",
            notes: ["誠實說明假日較擁擠。", "鼓勵想玩得舒服的家庭選平日。", "可搭配時段建議。"]
          },
          {
            status: "ready",
            type: "熱度類",
            format: "短片 / 圖文",
            title: "看到節目來玩的請舉手",
            purpose: "承接媒體曝光並收集互動留言。",
            notes: ["搭配採訪片段二次剪輯。", "鼓勵家長留言與貼照片。", "可延續到 4 月與 5 月。"]
          },
          {
            status: "waiting",
            type: "夜間營運",
            format: "短片 / 形象圖文",
            title: "白天太曬？五月改約晚上見",
            purpose: "為夜間營運建立避暑與夜景想像。",
            notes: ["需等園區最終確認夜間時段。", "可先拍 LED 燈條與夜景素材。", "語氣以邀請感為主。"]
          },
          {
            status: "idea",
            type: "互動題型",
            format: "限動 / 貼文",
            title: "今天你家小朋友最愛哪一項設施",
            purpose: "回收正面回饋並補社群素材。",
            notes: ["適合連假後做口碑延續。", "可搭配家長照片回覆精選。", "之後可作為熱門設施判斷輔助。"]
          }
        ]
      },
      requests: {
        title: "後續需補資料",
        intro: "這一頁是你和小編都要隨時盯的，因為很多內容能不能做深、報告能不能做準，都取決於這些資料有沒有持續補進來。",
        requests: [
          {
            status: "pending",
            title: "每日 / 每月入園人次",
            detail: "需持續提供每日數據，並拆平日 / 假日與特殊檔期。",
            next: "先建立固定表格，至少每週更新一次。"
          },
          {
            status: "pending",
            title: "門票與設施收入",
            detail: "目前只有人流口述基線，仍缺正式收入拆分與平均客單價。",
            next: "請業主補每月門票收入、設施收入與客單價。"
          },
          {
            status: "pending",
            title: "Facebook / Instagram 後台",
            detail: "社群內容策略已建立，但仍缺後台數據驗證哪些內容真的有效。",
            next: "補近三個月粉絲、觸及、互動與高表現貼文。"
          },
          {
            status: "pending",
            title: "Google 評論與常見回饋",
            detail: "目前只有外部觀察與部分口述抱怨類型，仍需固定更新評論變化。",
            next: "整理近期新增評論與常見問題。"
          },
          {
            status: "pending",
            title: "熱門設施排隊與服務問題",
            detail: "目前只知道整體壓力與假日抱怨，還缺更細的現場資料。",
            next: "補熱門設施排隊時間與現場常見衝突問題。"
          },
          {
            status: "waiting",
            title: "夜間營運實際成效",
            detail: "需等五月正式啟動後再補，現在先保留欄位。",
            next: "啟動後追蹤來客、時段分布與社群反應。"
          }
        ]
      },
      updates: {
        title: "更新日誌",
        intro: "每次你或顧問端更新策略，都要回到這裡留下版本差異，讓小編不用猜哪一版才是最新。",
        logs: [
          {
            date: "2026-03-20",
            title: "整合業主會後數據與第二季新方向",
            items: [
              "補入三月平日 / 假日真實人流。",
              "確認第二季以維繫品質為主，不主打額外投廣告。",
              "加入五月夜間營運規劃與內容方向。",
              "建立 Q2 社群內容規劃與可設計議題庫。"
            ]
          },
          {
            date: "2026-03-16",
            title: "建立 Q2 顧問流程第一版",
            items: [
              "建立業主版 Q2 報告頁。",
              "建立會議報告模板、月報模板與顧問 workflow。",
              "確認後續所有報告需先檢查本機時間。"
            ]
          }
        ]
      }
    }
  },
  {
    id: "placeholder-next",
    name: "下一個專案",
    status: "即將新增",
    disabled: true,
    summary: "保留位置，後續新專案可直接套用同一套戰情室結構。",
    updatedAt: "-",
    dataCutoff: "-",
    version: "-"
  }
];

const projectSwitcher = document.querySelector("#project-switcher");
const tabbar = document.querySelector("#tabbar");
const viewContainer = document.querySelector("#view-container");
const metaUpdatedAt = document.querySelector("#meta-updated-at");
const metaCutoff = document.querySelector("#meta-cutoff");
const metaVersion = document.querySelector("#meta-version");
const projectName = document.querySelector("#project-name");
const projectTagline = document.querySelector("#project-tagline");
const projectStatusBadge = document.querySelector("#project-status-badge");
const projectSummary = document.querySelector("#project-summary");
const heroSide = document.querySelector("#hero-side");
const currentFocusList = document.querySelector("#current-focus-list");
const thisWeekList = document.querySelector("#this-week-list");
const alertsList = document.querySelector("#alerts-list");

let activeProjectId = "baiguoshan";
let activeTabId = "overview";

function renderProjectButtons() {
  projectSwitcher.innerHTML = projects.map((project) => {
    const classes = ["project-button", project.id === activeProjectId ? "active" : "", project.disabled ? "disabled" : ""]
      .filter(Boolean).join(" ");

    return `
      <button class="${classes}" data-project-id="${project.id}" ${project.disabled ? "disabled" : ""}>
        <strong>${project.name}</strong>
        <span>${project.status}</span>
        <small>${project.summary}</small>
      </button>
    `;
  }).join("");

  document.querySelectorAll(".project-button:not(.disabled)").forEach((button) => {
    button.addEventListener("click", () => {
      activeProjectId = button.dataset.projectId;
      activeTabId = "overview";
      render();
    });
  });
}

function renderProjectMeta(project) {
  metaUpdatedAt.textContent = project.updatedAt;
  metaCutoff.textContent = project.dataCutoff;
  metaVersion.textContent = project.version;
  projectName.textContent = project.name;
  projectTagline.textContent = project.tagline;
  projectStatusBadge.textContent = project.status;
  projectSummary.textContent = project.summary;

  heroSide.innerHTML = (project.heroStats || []).map((item) => `
    <article class="hero-side-card">
      <span>${item.label}</span>
      <strong>${item.value}</strong>
      <p>${item.note}</p>
    </article>
  `).join("");

  currentFocusList.innerHTML = (project.currentFocus || []).map((item) => `<li>${item}</li>`).join("");
  thisWeekList.innerHTML = (project.thisWeek || []).map((item) => `<li>${item}</li>`).join("");
  alertsList.innerHTML = (project.alerts || []).map((item) => `<li>${item}</li>`).join("");
}

function renderTabs(project) {
  tabbar.innerHTML = project.tabs.map((tab) => `
    <button class="tab-button ${tab.id === activeTabId ? "active" : ""}" data-tab-id="${tab.id}">
      ${tab.label}
    </button>
  `).join("");

  document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", () => {
      activeTabId = button.dataset.tabId;
      renderTabs(project);
      renderActiveView(project);
    });
  });
}

function renderSectionBlock(section) {
  if (section.type === "timeline") {
    return `
      <div class="timeline">
        ${section.items.map((item) => `
          <article class="timeline-item">
            <div class="timeline-date">${item.date}</div>
            <div>
              <h3>${item.title}</h3>
              <p>${item.summary}</p>
            </div>
          </article>
        `).join("")}
      </div>
    `;
  }

  return `
    <div class="${section.type}">
      ${section.items.map((item) => `
        <article class="soft-card">
          ${item.label ? `<span class="card-label">${item.label}</span>` : ""}
          <h3>${item.title}</h3>
          ${item.body ? `<p>${item.body}</p>` : ""}
          ${item.list ? `<ul>${item.list.map((listItem) => `<li>${listItem}</li>`).join("")}</ul>` : ""}
        </article>
      `).join("")}
    </div>
  `;
}

function renderTopicsView(view) {
  return `
    <div class="topic-grid">
      ${view.topics.map((topic) => `
        <article class="topic-card">
          <div class="tag-row">
            <span class="tag ${topic.status}">${topic.status === "ready" ? "可直接做" : topic.status === "waiting" ? "待確認" : "顧問構想"}</span>
            <span class="tag">${topic.type}</span>
            <span class="tag">${topic.format}</span>
          </div>
          <h3>${topic.title}</h3>
          <p>${topic.purpose}</p>
          <ul>${topic.notes.map((note) => `<li>${note}</li>`).join("")}</ul>
        </article>
      `).join("")}
    </div>
  `;
}

function renderRequestsView(view) {
  return `
    <div class="request-grid">
      ${view.requests.map((request) => `
        <article class="request-card">
          <div class="tag-row">
            <span class="tag ${request.status === "pending" ? "waiting" : "idea"}">${request.status === "pending" ? "待補件" : "待啟動"}</span>
          </div>
          <h3>${request.title}</h3>
          <p>${request.detail}</p>
          <ul><li>${request.next}</li></ul>
        </article>
      `).join("")}
    </div>
  `;
}

function renderUpdatesView(view) {
  return `
    <div class="timeline">
      ${view.logs.map((log) => `
        <article class="timeline-item">
          <div class="timeline-date">${log.date}</div>
          <div class="update-card">
            <h3>${log.title}</h3>
            <ul>${log.items.map((item) => `<li>${item}</li>`).join("")}</ul>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function renderMeetingsView(view) {
  return `
    <div class="timeline">
      ${view.timeline.map((item) => `
        <article class="timeline-item">
          <div class="timeline-date">${item.date}</div>
          <div>
            ${item.badge ? `<span class="micro-badge">${item.badge}</span>` : ""}
            <h3>${item.title}</h3>
            <p>${item.summary}</p>
            <ul>${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function renderActiveView(project) {
  const view = project.views[activeTabId];
  if (!view) {
    viewContainer.innerHTML = `<div class="empty-card">這個分頁目前尚未建立內容。</div>`;
    return;
  }

  let content = "";

  if (view.sections) {
    content = view.sections.map(renderSectionBlock).join("");
  } else if (activeTabId === "topics") {
    content = renderTopicsView(view);
  } else if (activeTabId === "requests") {
    content = renderRequestsView(view);
  } else if (activeTabId === "updates") {
    content = renderUpdatesView(view);
  } else if (activeTabId === "meetings") {
    content = renderMeetingsView(view);
  }

  viewContainer.innerHTML = `
    <article class="view-card">
      <div class="view-header">
        <div>
          <p class="section-kicker">View</p>
          <h2>${view.title}</h2>
        </div>
        <p>${view.intro || ""}</p>
      </div>
      ${content}
    </article>
  `;
}

function render() {
  const project = projects.find((item) => item.id === activeProjectId) || projects[0];
  renderProjectButtons();
  renderProjectMeta(project);
  renderTabs(project);
  renderActiveView(project);
}

render();
