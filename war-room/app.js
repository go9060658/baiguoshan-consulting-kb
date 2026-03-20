const projectMenuButton = document.querySelector("#project-menu-button");
const projectMenu = document.querySelector("#project-menu");
const projectMenuCurrent = document.querySelector("#project-menu-current");
const sidebarTabs = document.querySelector("#sidebar-tabs");
const viewContainer = document.querySelector("#view-container");
const metaUpdatedAt = document.querySelector("#meta-updated-at");
const metaCutoff = document.querySelector("#meta-cutoff");
const metaVersion = document.querySelector("#meta-version");
const projectName = document.querySelector("#project-name");
const projectTagline = document.querySelector("#project-tagline");
const projectStatusBadge = document.querySelector("#project-status-badge");
const projectSummary = document.querySelector("#project-summary");
const heroActions = document.querySelector("#hero-actions");
const heroSide = document.querySelector("#hero-side");
const currentFocusList = document.querySelector("#current-focus-list");
const thisWeekList = document.querySelector("#this-week-list");
const alertsList = document.querySelector("#alerts-list");

const TAB_HELPERS = {
  overview: "專案全貌與本季重點",
  owner: "業主溝通口徑與核心判斷",
  meetings: "已開會紀錄與待確認事項",
  social: "最新社群規劃與檔期節奏",
  topics: "可交付給設計與小編的題型",
  requests: "後續待補資料與追資料清單",
  updates: "本專案最近更新了什麼"
};

const TOPIC_STATUS_LABEL = {
  ready: "可執行",
  waiting: "待資料",
  idea: "構想中"
};

const REQUEST_STATUS_LABEL = {
  pending: "待追資料",
  waiting: "待確認"
};

let projects = [];
let activeProjectId = "";
let activeTabId = "";
let isProjectMenuOpen = false;

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#39;");
}

async function loadProjects() {
  const manifestResponse = await fetch("./data/projects/index.json");
  if (!manifestResponse.ok) {
    throw new Error("無法讀取專案索引。");
  }

  const manifest = await manifestResponse.json();
  const loadedProjects = await Promise.all(
    manifest.projects.map(async (item) => {
      const response = await fetch(`./data/projects/${item.file}`);
      if (!response.ok) {
        throw new Error(`無法讀取專案資料：${item.file}`);
      }
      return response.json();
    })
  );

  return loadedProjects;
}

function getActiveProject() {
  return projects.find((project) => project.id === activeProjectId) || projects[0] || null;
}

function ensureActiveTab(project) {
  const tabs = project?.tabs || [];
  const exists = tabs.some((tab) => tab.id === activeTabId);
  if (!exists) {
    activeTabId = tabs[0]?.id || "";
  }
}

function setProjectMenuState(nextState) {
  isProjectMenuOpen = nextState;
  projectMenu.hidden = !nextState;
  projectMenuButton.setAttribute("aria-expanded", String(nextState));
}

function normalizeOwnerReportHref(href) {
  if (!href) {
    return "";
  }

  if (href.includes("client-report/index.html")) {
    return "../";
  }

  if (href.endsWith(".md")) {
    return "";
  }

  return href;
}

function findOwnerReportHref(project) {
  const links = project?.links || [];
  const ownerLink = links.find((item) => String(item.href || "").includes("client-report/index.html"));
  return normalizeOwnerReportHref(ownerLink?.href || "");
}

function renderProjectMenu(project) {
  projectMenuCurrent.textContent = project?.name || "-";
  projectMenu.innerHTML = projects.map((item) => {
    const activeClass = item.id === project?.id ? "active" : "";
    const disabledAttr = item.disabled ? "disabled" : "";
    const summary = item.summary || item.tagline || "";

    return `
      <button class="dropdown-item ${activeClass}" type="button" data-project-id="${escapeHtml(item.id)}" ${disabledAttr}>
        <strong>${escapeHtml(item.name)}</strong>
        <span>${escapeHtml(item.status || "未設定狀態")}</span>
        <small>${escapeHtml(summary)}</small>
      </button>
    `;
  }).join("");

  projectMenu.querySelectorAll(".dropdown-item:not([disabled])").forEach((button) => {
    button.addEventListener("click", () => {
      activeProjectId = button.dataset.projectId;
      const nextProject = getActiveProject();
      activeTabId = nextProject?.tabs?.[0]?.id || "";
      setProjectMenuState(false);
      render();
    });
  });
}

function renderProjectMeta(project) {
  metaUpdatedAt.textContent = project.updatedAt || "-";
  metaCutoff.textContent = project.dataCutoff || "-";
  metaVersion.textContent = project.version || "-";
  projectName.textContent = project.name || "-";
  projectTagline.textContent = project.tagline || "-";
  projectStatusBadge.textContent = project.status || "-";
  projectSummary.textContent = project.summary || "-";

  const stats = project.heroStats || [];
  heroSide.innerHTML = stats.length
    ? stats.map((item) => `
        <article class="hero-side-card">
          <span>${escapeHtml(item.label)}</span>
          <strong>${escapeHtml(item.value)}</strong>
          <p>${escapeHtml(item.note)}</p>
        </article>
      `).join("")
    : `
        <article class="hero-side-card">
          <span>尚無戰情資料</span>
          <strong>待補</strong>
          <p>這個專案還沒有輸入摘要數據與說明。</p>
        </article>
      `;

  const ownerHref = findOwnerReportHref(project);
  const actionMarkup = [];

  if (ownerHref) {
    actionMarkup.push(`
      <a class="action-link" href="${escapeHtml(ownerHref)}" target="_blank" rel="noreferrer">
        查看業主頁
      </a>
    `);
  }

  if ((project.tabs || []).some((tab) => tab.id === "meetings")) {
    actionMarkup.push(`
      <button class="action-button" type="button" data-action-tab="meetings">
        看會議紀錄
      </button>
    `);
  }

  if ((project.tabs || []).some((tab) => tab.id === "social")) {
    actionMarkup.push(`
      <button class="action-button" type="button" data-action-tab="social">
        看社群規劃
      </button>
    `);
  }

  if ((project.tabs || []).some((tab) => tab.id === "requests")) {
    actionMarkup.push(`
      <button class="action-button" type="button" data-action-tab="requests">
        看待補資料
      </button>
    `);
  }

  heroActions.innerHTML = actionMarkup.join("") || `<span class="action-placeholder">這個專案尚未設定快捷操作。</span>`;

  heroActions.querySelectorAll("[data-action-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      activeTabId = button.dataset.actionTab;
      renderSidebarTabs(project);
      renderActiveView(project);
      viewContainer.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  currentFocusList.innerHTML = (project.currentFocus || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  thisWeekList.innerHTML = (project.thisWeek || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  alertsList.innerHTML = (project.alerts || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function renderSidebarTabs(project) {
  sidebarTabs.innerHTML = (project.tabs || []).map((tab) => `
    <button class="sidebar-tab ${tab.id === activeTabId ? "active" : ""}" type="button" data-tab-id="${escapeHtml(tab.id)}">
      <span>${escapeHtml(tab.label)}</span>
      <small>${escapeHtml(TAB_HELPERS[tab.id] || "查看此分頁內容")}</small>
    </button>
  `).join("");

  sidebarTabs.querySelectorAll(".sidebar-tab").forEach((button) => {
    button.addEventListener("click", () => {
      activeTabId = button.dataset.tabId;
      renderSidebarTabs(project);
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
            <div class="timeline-date">${escapeHtml(item.date)}</div>
            <div>
              <h3>${escapeHtml(item.title)}</h3>
              <p>${escapeHtml(item.summary)}</p>
            </div>
          </article>
        `).join("")}
      </div>
    `;
  }

  return `
    <div class="${escapeHtml(section.type)}">
      ${(section.items || []).map((item) => `
        <article class="soft-card">
          ${item.label ? `<span class="card-label">${escapeHtml(item.label)}</span>` : ""}
          <h3>${escapeHtml(item.title)}</h3>
          ${item.body ? `<p>${escapeHtml(item.body)}</p>` : ""}
          ${item.list ? `<ul>${item.list.map((listItem) => `<li>${escapeHtml(listItem)}</li>`).join("")}</ul>` : ""}
        </article>
      `).join("")}
    </div>
  `;
}

function renderTopicsView(view) {
  return `
    <div class="topic-grid">
      ${(view.topics || []).map((topic) => `
        <article class="topic-card">
          <div class="tag-row">
            <span class="tag ${escapeHtml(topic.status)}">${escapeHtml(TOPIC_STATUS_LABEL[topic.status] || topic.status)}</span>
            <span class="tag">${escapeHtml(topic.type)}</span>
            <span class="tag">${escapeHtml(topic.format)}</span>
          </div>
          <h3>${escapeHtml(topic.title)}</h3>
          <p>${escapeHtml(topic.purpose)}</p>
          <ul>${(topic.notes || []).map((note) => `<li>${escapeHtml(note)}</li>`).join("")}</ul>
        </article>
      `).join("")}
    </div>
  `;
}

function renderRequestsView(view) {
  return `
    <div class="request-grid">
      ${(view.requests || []).map((request) => `
        <article class="request-card">
          <div class="tag-row">
            <span class="tag ${escapeHtml(request.status)}">${escapeHtml(REQUEST_STATUS_LABEL[request.status] || request.status)}</span>
          </div>
          <h3>${escapeHtml(request.title)}</h3>
          <p>${escapeHtml(request.detail)}</p>
          ${request.next ? `<ul><li>${escapeHtml(request.next)}</li></ul>` : ""}
        </article>
      `).join("")}
    </div>
  `;
}

function renderUpdatesView(view) {
  return `
    <div class="timeline">
      ${(view.logs || []).map((log) => `
        <article class="timeline-item">
          <div class="timeline-date">${escapeHtml(log.date)}</div>
          <div class="update-card">
            <h3>${escapeHtml(log.title)}</h3>
            <ul>${(log.items || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function renderMeetingsView(view) {
  return `
    <div class="timeline">
      ${(view.timeline || []).map((item) => `
        <article class="timeline-item">
          <div class="timeline-date">${escapeHtml(item.date)}</div>
          <div>
            ${item.badge ? `<span class="micro-badge">${escapeHtml(item.badge)}</span>` : ""}
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.summary)}</p>
            <ul>${(item.bullets || []).map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}</ul>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function renderActiveView(project) {
  const view = project.views?.[activeTabId];

  if (!view) {
    viewContainer.innerHTML = `
      <article class="view-card empty-card">
        目前沒有可顯示的分頁內容，請切換其他分頁或補上專案資料。
      </article>
    `;
    return;
  }

  let content = "";

  if (Array.isArray(view.sections)) {
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
    <article class="view-card panel">
      <div class="view-header">
        <div>
          <p class="section-kicker">Current View</p>
          <h2>${escapeHtml(view.title)}</h2>
        </div>
        <p>${escapeHtml(view.intro || "")}</p>
      </div>
      ${content || `<div class="empty-card">這個分頁還沒有內容。</div>`}
    </article>
  `;
}

function render() {
  const project = getActiveProject();
  if (!project) {
    viewContainer.innerHTML = `
      <article class="view-card empty-card">
        目前沒有任何專案資料，請先新增專案 JSON。
      </article>
    `;
    return;
  }

  ensureActiveTab(project);
  renderProjectMenu(project);
  renderProjectMeta(project);
  renderSidebarTabs(project);
  renderActiveView(project);
}

function bindGlobalEvents() {
  projectMenuButton.addEventListener("click", (event) => {
    event.stopPropagation();
    setProjectMenuState(!isProjectMenuOpen);
  });

  document.addEventListener("click", (event) => {
    if (!projectMenu.contains(event.target) && !projectMenuButton.contains(event.target)) {
      setProjectMenuState(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setProjectMenuState(false);
    }
  });
}

async function init() {
  try {
    projects = await loadProjects();
    const firstProject = projects.find((project) => !project.disabled) || projects[0];
    activeProjectId = firstProject?.id || "";
    activeTabId = firstProject?.tabs?.[0]?.id || "";
    bindGlobalEvents();
    render();
  } catch (error) {
    viewContainer.innerHTML = `
      <article class="view-card empty-card">
        戰情室初始化失敗。<br>
        請確認專案 JSON 是否存在且格式正確。<br>
        錯誤訊息：${escapeHtml(error.message)}
      </article>
    `;
  }
}

init();
