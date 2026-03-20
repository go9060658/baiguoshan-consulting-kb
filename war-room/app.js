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

let projects = [];
let activeProjectId = "";
let activeTabId = "overview";

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#39;");
}

async function loadProjects() {
  const manifestResponse = await fetch("./data/projects/index.json");
  if (!manifestResponse.ok) {
    throw new Error("無法讀取專案清單");
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

function renderProjectButtons() {
  projectSwitcher.innerHTML = projects.map((project) => {
    const classes = ["project-button", project.id === activeProjectId ? "active" : "", project.disabled ? "disabled" : ""]
      .filter(Boolean)
      .join(" ");

    return `
      <button class="${classes}" data-project-id="${escapeHtml(project.id)}" ${project.disabled ? "disabled" : ""}>
        <strong>${escapeHtml(project.name)}</strong>
        <span>${escapeHtml(project.status)}</span>
        <small>${escapeHtml(project.summary)}</small>
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
  metaUpdatedAt.textContent = project.updatedAt || "-";
  metaCutoff.textContent = project.dataCutoff || "-";
  metaVersion.textContent = project.version || "-";
  projectName.textContent = project.name || "-";
  projectTagline.textContent = project.tagline || "-";
  projectStatusBadge.textContent = project.status || "-";
  projectSummary.textContent = project.summary || "-";

  heroSide.innerHTML = (project.heroStats || []).map((item) => `
    <article class="hero-side-card">
      <span>${escapeHtml(item.label)}</span>
      <strong>${escapeHtml(item.value)}</strong>
      <p>${escapeHtml(item.note)}</p>
    </article>
  `).join("");

  const links = project.links || [];
  const heroActions = document.querySelector(".hero-actions");
  heroActions.innerHTML = links.length
    ? links.map((item) => `
        <a class="action-link" href="${escapeHtml(item.href)}" target="_blank" rel="noreferrer">${escapeHtml(item.label)}</a>
      `).join("")
    : `<span class="action-link">此專案尚無對應文件連結</span>`;

  currentFocusList.innerHTML = (project.currentFocus || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  thisWeekList.innerHTML = (project.thisWeek || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  alertsList.innerHTML = (project.alerts || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function renderTabs(project) {
  tabbar.innerHTML = (project.tabs || []).map((tab) => `
    <button class="tab-button ${tab.id === activeTabId ? "active" : ""}" data-tab-id="${escapeHtml(tab.id)}">
      ${escapeHtml(tab.label)}
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
      ${section.items.map((item) => `
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
      ${view.topics.map((topic) => `
        <article class="topic-card">
          <div class="tag-row">
            <span class="tag ${escapeHtml(topic.status)}">${topic.status === "ready" ? "可直接做" : topic.status === "waiting" ? "待確認" : "顧問構想"}</span>
            <span class="tag">${escapeHtml(topic.type)}</span>
            <span class="tag">${escapeHtml(topic.format)}</span>
          </div>
          <h3>${escapeHtml(topic.title)}</h3>
          <p>${escapeHtml(topic.purpose)}</p>
          <ul>${topic.notes.map((note) => `<li>${escapeHtml(note)}</li>`).join("")}</ul>
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
          <h3>${escapeHtml(request.title)}</h3>
          <p>${escapeHtml(request.detail)}</p>
          <ul><li>${escapeHtml(request.next)}</li></ul>
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
          <div class="timeline-date">${escapeHtml(log.date)}</div>
          <div class="update-card">
            <h3>${escapeHtml(log.title)}</h3>
            <ul>${log.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
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
          <div class="timeline-date">${escapeHtml(item.date)}</div>
          <div>
            ${item.badge ? `<span class="micro-badge">${escapeHtml(item.badge)}</span>` : ""}
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.summary)}</p>
            <ul>${item.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}</ul>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function renderActiveView(project) {
  const view = project.views?.[activeTabId];
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
          <h2>${escapeHtml(view.title)}</h2>
        </div>
        <p>${escapeHtml(view.intro || "")}</p>
      </div>
      ${content}
    </article>
  `;
}

function render() {
  const project = projects.find((item) => item.id === activeProjectId) || projects[0];
  if (!project) {
    viewContainer.innerHTML = `<div class="empty-card">目前沒有可用專案。</div>`;
    return;
  }

  renderProjectButtons();
  renderProjectMeta(project);
  renderTabs(project);
  renderActiveView(project);
}

async function init() {
  try {
    projects = await loadProjects();
    const firstProject = projects.find((item) => !item.disabled) || projects[0];
    activeProjectId = firstProject?.id || "";
    render();
  } catch (error) {
    viewContainer.innerHTML = `
      <div class="empty-card">
        戰情室資料載入失敗。<br>
        請優先透過部署網址或本機靜態伺服器開啟頁面。<br>
        錯誤訊息：${escapeHtml(error.message)}
      </div>
    `;
  }
}

init();
