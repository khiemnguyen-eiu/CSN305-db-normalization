/* ==========================================================================
   DATABASE NORMALIZATION INTERACTIVE LAB - APPLICATION LOGIC
   Theme and Layout aligned with sandbox-1 (Inter, JetBrains Mono, Oswald)
   Continuous Schemas through 1NF → 2NF → 3NF → BCNF → 4NF
   Interactive Tables & Resulting SQL Schema (DDL) with Vietnamese SQL Syntax
   ========================================================================== */

(function () {
  'use strict';

  // State Management
  const state = {
    currentCase: 1,
    currentStep: '1nf',
    // Set of normalized table IDs: e.g. "c1_student_profiles_unnorm"
    normalizedTableIds: new Set(),
    // Set of completed step IDs: e.g. "c1_1nf", "c1_bcnf"
    completedSteps: new Set(),
    // Set of collapsed table IDs
    collapsedTables: new Set(),
    // Active workspace tab: 'tables' or 'sql'
    activeTab: 'tables',
    // Current language: 'en' or 'vi'
    lang: localStorage.getItem('db_norm_lang') || 'en',
    // Current theme: 'light' or 'dark'
    theme: localStorage.getItem('db_norm_theme') || 'light',
    // Currently inspected table for lower-right dock
    activeInspectedTable: null,
    // Sidebar collapsed state
    isSidebarCollapsed: false
  };

  const TOTAL_CHECKPOINTS = 14;

  // DOM Elements Cache
  const dom = {
    html: document.documentElement,
    toggleSidebarBtn: document.getElementById('toggle-sidebar-btn'),
    appSidebar: document.getElementById('app-sidebar'),
    siteTitleText: document.getElementById('site-title-text'),
    topicBreadcrumbText: document.getElementById('topic-breadcrumb-text'),

    // Progress Bar
    progressLabel: document.getElementById('progress-label'),
    progressPercentage: document.getElementById('progress-percentage'),
    progressSegmentsTrack: document.getElementById('progress-segments-track'),
    progressBottomText: document.getElementById('progress-bottom-text'),

    // Language & Theme
    langSelect: document.getElementById('lang-select'),
    themeSwitchBtn: document.getElementById('theme-switch-btn'),

    // Sidebar
    sidebarHeading: document.getElementById('sidebar-heading'),
    sidebarResetAll: document.getElementById('sidebar-reset-all'),
    caseCards: document.querySelectorAll('.topic-group'),
    sidebarLegendTitle: document.getElementById('sidebar-legend-title'),
    legendGreenText: document.getElementById('legend-green-text'),
    legendYellowText: document.getElementById('legend-yellow-text'),
    legendBlueText: document.getElementById('legend-blue-text'),
    legendRedText: document.getElementById('legend-red-text'),
    legendGreenBoxText: document.getElementById('legend-green-box-text'),
    legendKeyText: document.getElementById('legend-key-text'),

    // Top Controls
    currentCaseBadge: document.getElementById('current-case-badge'),
    currentStepBadge: document.getElementById('current-step-badge'),
    stageStatusPill: document.getElementById('stage-status-pill'),
    stageStatusText: document.getElementById('stage-status-text'),
    dynamicStageTitle: document.getElementById('dynamic-stage-title'),
    dynamicStageSubtitle: document.getElementById('dynamic-stage-subtitle'),
    btnNormalize: document.getElementById('btn-auto-normalize'),
    btnNormalizeText: document.getElementById('btn-normalize-text'),
    btnResetStep: document.getElementById('btn-reset-step'),
    btnResetText: document.getElementById('btn-reset-text'),
    btnNextStep: document.getElementById('btn-next-step'),
    btnNextText: document.getElementById('btn-next-text'),

    // Tabs
    tabTablesBtn: document.getElementById('tab-tables-btn'),
    tabTablesLabel: document.getElementById('tab-tables-label'),
    tabSqlBtn: document.getElementById('tab-sql-btn'),
    tabSqlLabel: document.getElementById('tab-sql-label'),
    sqlTablesCount: document.getElementById('sql-tables-count'),
    tablesViewPanel: document.getElementById('tables-view-panel'),
    sqlViewPanel: document.getElementById('sql-view-panel'),

    // Tables Stage
    tablesContainer: document.getElementById('tables-container'),

    // SQL Schema DDL Panel
    sqlSchemaNameBadge: document.getElementById('sql-schema-name-badge'),
    sqlSyntaxModeText: document.getElementById('sql-syntax-mode-text'),
    btnCopySql: document.getElementById('btn-copy-sql'),
    copySqlText: document.getElementById('copy-sql-text'),
    sqlCodeDisplay: document.getElementById('sql-code-display'),

    // Lower Dock
    graphPanel: document.getElementById('relationship-graph-panel'),
    graphCanvas: document.getElementById('dependency-graph-canvas'),
    graphLegendCaption: document.getElementById('graph-legend-caption'),
    graphPanelTitle: document.getElementById('graph-panel-title'),
    closeGraphBtn: document.getElementById('close-graph-btn'),

    explPanel: document.getElementById('explanation-card-panel'),
    explBadge: document.getElementById('expl-badge'),
    explTitle: document.getElementById('expl-title'),
    explDesc: document.getElementById('expl-desc'),
    explFdContainer: document.getElementById('expl-fd-container'),
    explFdLabel: document.getElementById('expl-fd-label'),
    explFdCode: document.getElementById('expl-fd-code'),
    explAnomalyContainer: document.getElementById('expl-anomaly-container'),
    explAnomalyLabel: document.getElementById('expl-anomaly-label'),
    explAnomalyText: document.getElementById('expl-anomaly-text')
  };

  /* ---------------- SOUND SYNTHESIS FEEDBACK ---------------- */
  function playChime(type) {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === 'success') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(659.25, ctx.currentTime + 0.1);
        osc.frequency.exponentialRampToValueAtTime(783.99, ctx.currentTime + 0.2);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.38);
        osc.start();
        osc.stop(ctx.currentTime + 0.38);
      } else if (type === 'click') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(420, ctx.currentTime);
        gain.gain.setValueAtTime(0.03, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.07);
        osc.start();
        osc.stop(ctx.currentTime + 0.07);
      }
    } catch (e) {
      // Audio might be muted
    }
  }

  /* ---------------- HELPER: Column Name Translation ---------------- */
  function translateCol(colName) {
    const dict = I18N[state.lang].columns;
    return dict[colName] || colName;
  }

  /* ---------------- THEME INITIALIZATION & TOGGLE ---------------- */
  function initTheme() {
    dom.html.setAttribute('data-theme', state.theme);
  }

  function toggleTheme() {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('db_norm_theme', state.theme);
    initTheme();
    // Re-render graph if active so SVG colors align
    if (state.activeInspectedTable && state.activeInspectedTable.hasGraph) {
      render2NFGraph(state.activeInspectedTable.graphConfig);
    }
  }

  /* ---------------- LANGUAGE TOGGLE ---------------- */
  function setLanguage(lang) {
    state.lang = lang;
    localStorage.setItem('db_norm_lang', lang);
    if (dom.langSelect) {
      dom.langSelect.value = lang;
    }
    updateStaticText();
    renderCurrentStep();
  }

  function updateStaticText() {
    const t = I18N[state.lang];
    dom.siteTitleText.textContent = t.appTitle;
    dom.progressLabel.textContent = t.learningProgress;
    dom.sidebarHeading.textContent = t.demonstrationCases;
    dom.btnNormalizeText.textContent = t.normalizeTablesBtn;
    dom.btnResetText.textContent = t.resetStepBtn;
    dom.btnNextText.textContent = t.nextStepBtn;
    dom.sidebarLegendTitle.textContent = t.legendTitle;
    dom.legendGreenText.textContent = t.legendGreen;
    dom.legendYellowText.textContent = t.legendYellow;
    dom.legendBlueText.textContent = t.legendBlue;
    dom.legendRedText.textContent = t.legendRed;
    dom.legendGreenBoxText.textContent = t.legendGreenBox;
    dom.legendKeyText.textContent = t.legendKey;
    dom.graphLegendCaption.textContent = t.graphLegend;
    dom.graphPanelTitle.textContent = t.graphTitle;
    dom.explFdLabel.textContent = t.fdLabel;
    if (dom.explAnomalyLabel) dom.explAnomalyLabel.textContent = t.anomalyLabel;
    dom.tabTablesLabel.textContent = t.tabTablesLabel;
    dom.tabSqlLabel.textContent = t.tabSqlLabel;
    dom.copySqlText.textContent = t.copySqlBtn;
    dom.sqlSyntaxModeText.textContent = t.sqlSyntaxMode;

    // Update case titles & descriptions in sidebar
    for (let c = 1; c <= 3; c++) {
      const caseData = NORMALIZATION_CASES[`case${c}`];
      const titleElem = document.getElementById(`case${c}-title`);
      const descElem = document.getElementById(`case${c}-desc`);
      if (titleElem) titleElem.textContent = state.lang === 'vi' ? caseData.titleVi : caseData.titleEn;
      if (descElem) descElem.textContent = state.lang === 'vi' ? caseData.descVi : caseData.descEn;

      // Update step labels
      ['1nf', '2nf', '3nf', 'bcnf', '4nf'].forEach((sk, idx) => {
        const stepElem = document.getElementById(`case${c}-step${idx + 1}-label`);
        if (stepElem && caseData.steps[sk]) {
          const stepObj = caseData.steps[sk];
          stepElem.textContent = state.lang === 'vi' 
            ? (stepObj.shortTitleVi || (stepObj.titleVi.split(':')[1] || stepObj.titleVi).trim())
            : (stepObj.shortTitleEn || (stepObj.titleEn.split(':')[1] || stepObj.titleEn).trim());
        }
      });
    }

    updateProgress();
  }

  /* ---------------- PROGRESS CALCULATION (Matching Image 2 & sandbox-1) ---------------- */
  function updateProgress() {
    let completedCount = 0;

    // Case 1: 5 steps
    ['1nf', '2nf', '3nf', 'bcnf', '4nf'].forEach(sk => {
      if (state.completedSteps.has(`c1_${sk}`)) completedCount++;
    });

    // Case 2: 5 steps * 2 tables = 10 tables -> scale to 5 checkpoints
    const c2Tables = [
      'c2_patient_intake', 'c2_staff_contacts',
      'c2_rx_details', 'c2_lab_orders',
      'c2_clinic_branches', 'c2_doctor_departments',
      'c2_doctor_shifts', 'c2_surgery_units',
      'c2_doctor_skills_lang', 'c2_ward_equipment_vendors'
    ];
    let c2NormCount = 0;
    c2Tables.forEach(tId => {
      if (state.normalizedTableIds.has(tId)) c2NormCount++;
    });
    completedCount += Math.round(c2NormCount * 0.5);

    // Case 3: 5 steps
    ['1nf', '2nf', '3nf', 'bcnf', '4nf'].forEach(sk => {
      if (state.completedSteps.has(`c3_${sk}`)) completedCount++;
    });

    completedCount = Math.min(TOTAL_CHECKPOINTS, completedCount);
    const percent = Math.min(100, Math.round((completedCount / TOTAL_CHECKPOINTS) * 100));
    const inProgressCount = completedCount >= TOTAL_CHECKPOINTS ? 0 : 1;

    dom.progressPercentage.textContent = `${percent}%`;

    const t = I18N[state.lang];
    const statsStr = t.progressStats
      .replace('{completed}', completedCount)
      .replace('{total}', TOTAL_CHECKPOINTS)
      .replace('{inProgress}', inProgressCount);
    dom.progressBottomText.textContent = statsStr;

    // Render 14 Segment capsules in progress bar
    const segments = dom.progressSegmentsTrack.children;
    for (let i = 0; i < TOTAL_CHECKPOINTS; i++) {
      if (!segments[i]) continue;
      segments[i].className = 'progress-segment';
      if (i < completedCount) {
        segments[i].classList.add('completed');
      } else if (i === completedCount && inProgressCount > 0) {
        segments[i].classList.add('in-progress');
      }
    }
  }

  /* ---------------- SIDEBAR ACCORDION & STEP SELECTION ---------------- */
  function initSidebar() {
    dom.toggleSidebarBtn.addEventListener('click', () => {
      state.isSidebarCollapsed = !state.isSidebarCollapsed;
      dom.appSidebar.classList.toggle('collapsed', state.isSidebarCollapsed);
    });

    dom.caseCards.forEach(card => {
      const caseNum = parseInt(card.getAttribute('data-case'), 10);
      const headerBtn = card.querySelector('.topic-header-btn');
      const stepItems = card.querySelectorAll('.case-item-btn');

      headerBtn.addEventListener('click', () => {
        playChime('click');
        selectCase(caseNum);
      });

      stepItems.forEach(item => {
        const stepKey = item.getAttribute('data-step');
        item.addEventListener('click', (e) => {
          e.stopPropagation();
          playChime('click');
          selectStep(caseNum, stepKey);
        });
      });
    });

    dom.sidebarResetAll.addEventListener('click', () => {
      playChime('click');
      if (confirm(state.lang === 'vi' ? 'Bạn có muốn đặt lại toàn bộ tiến độ không?' : 'Reset all progress across all schemas?')) {
        state.normalizedTableIds.clear();
        state.completedSteps.clear();
        selectCase(1);
      }
    });
  }

  function selectCase(caseNum) {
    state.currentCase = caseNum;
    state.currentStep = '1nf';

    dom.caseCards.forEach(card => {
      const c = parseInt(card.getAttribute('data-case'), 10);
      const btn = card.querySelector('.topic-header-btn');
      if (c === caseNum) {
        card.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      } else {
        card.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });

    updateSidebarActiveStep();
    renderCurrentStep();
  }

  function selectStep(caseNum, stepKey) {
    state.currentCase = caseNum;
    state.currentStep = stepKey;

    updateSidebarActiveStep();
    renderCurrentStep();
  }

  function updateSidebarActiveStep() {
    dom.caseCards.forEach(card => {
      const c = parseInt(card.getAttribute('data-case'), 10);
      const stepItems = card.querySelectorAll('.case-item-btn');
      stepItems.forEach(item => {
        const sk = item.getAttribute('data-step');
        const statusIcon = item.querySelector('.case-status-icon');
        const isCurrent = (c === state.currentCase && sk === state.currentStep);
        const isCompleted = state.completedSteps.has(`c${c}_${sk}`);

        if (isCurrent) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }

        if (statusIcon) {
          if (isCompleted) {
            statusIcon.className = 'case-status-icon completed';
          } else if (isCurrent) {
            statusIcon.className = 'case-status-icon in-progress';
          } else {
            statusIcon.className = 'case-status-icon';
          }
        }
      });
    });
  }

  /* ---------------- RENDER 2NF RELATIONSHIP GRAPH (Matching Image 1) ---------------- */
  function render2NFGraph(graphConfig) {
    if (!graphConfig) {
      dom.graphPanel.style.display = 'none';
      return;
    }

    dom.graphPanel.style.display = 'block';

    const isVi = state.lang === 'vi';
    const compKeyText = isVi ? graphConfig.compositeKeyVi || graphConfig.compositeKey : graphConfig.compositeKey;
    const compKeyHeader = isVi ? I18N.vi.compositeKey : I18N.en.compositeKey;

    const attrs = graphConfig.attributes;

    const width = 420;
    const height = 180;

    const topBoxW = 190;
    const topBoxH = 46;
    const topBoxX = (width - topBoxW) / 2;
    const topBoxY = 12;

    const botBoxW = 124;
    const botBoxH = 50;
    const botBoxY = 110;
    const botSpacing = 16;
    const totalBotW = (botBoxW * 3) + (botSpacing * 2);
    const startBotX = (width - totalBotW) / 2;

    const topCenter = { x: width / 2, y: topBoxY + topBoxH };
    const topLeft = { x: topBoxX + 45, y: topBoxY + topBoxH };
    const topRight = { x: topBoxX + topBoxW - 45, y: topBoxY + topBoxH };

    const botTargets = [
      { x: startBotX + botBoxW / 2, y: botBoxY },
      { x: startBotX + botBoxW + botSpacing + botBoxW / 2, y: botBoxY },
      { x: startBotX + (botBoxW + botSpacing) * 2 + botBoxW / 2, y: botBoxY }
    ];

    const orangeColor = "#ea580c";
    const greenColor = "#10b981";

    let svgHtml = `
      <svg class="dep-svg-graph" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
        <line x1="${topLeft.x}" y1="${topLeft.y}" x2="${botTargets[0].x}" y2="${botTargets[0].y}" 
              stroke="${attrs[0].type === 'full' ? greenColor : orangeColor}" stroke-width="2.6" stroke-linecap="round" />
        
        <line x1="${topCenter.x}" y1="${topCenter.y}" x2="${botTargets[1].x}" y2="${botTargets[1].y}" 
              stroke="${attrs[1].type === 'full' ? greenColor : orangeColor}" stroke-width="2.6" stroke-linecap="round" />
        
        <line x1="${topRight.x}" y1="${topRight.y}" x2="${botTargets[2].x}" y2="${botTargets[2].y}" 
              stroke="${attrs[2].type === 'full' ? greenColor : orangeColor}" stroke-width="2.6" stroke-linecap="round" />

        <g class="graph-box-top">
          <rect x="${topBoxX}" y="${topBoxY}" width="${topBoxW}" height="${topBoxH}" rx="8" 
                fill="var(--bg-sidebar)" stroke="#64748b" stroke-width="1.8" />
          <text x="${width / 2}" y="${topBoxY + 18}" text-anchor="middle" font-family="var(--font-sans)" 
                font-weight="700" font-size="12" fill="var(--text-primary)">${compKeyHeader}</text>
          <text x="${width / 2}" y="${topBoxY + 34}" text-anchor="middle" font-family="var(--font-mono)" 
                font-size="10.5" fill="var(--text-muted)">${compKeyText}</text>
        </g>
    `;

    attrs.forEach((attr, idx) => {
      const bx = startBotX + idx * (botBoxW + botSpacing);
      const by = botBoxY;
      const isFull = attr.type === 'full';

      const strokeColor = isFull ? "#10b981" : "#f59e0b";
      const fillColor = isFull ? "var(--success-bg)" : "var(--warning-bg)";
      const textColor = isFull ? "var(--success-text)" : "var(--warning-text)";

      const attrName = isVi ? attr.nameVi || attr.name : attr.name;
      const subtext = isVi ? attr.dependsOnVi || attr.dependsOn : attr.dependsOn;

      svgHtml += `
        <g class="graph-box-bot-${idx}">
          <rect x="${bx}" y="${by}" width="${botBoxW}" height="${botBoxH}" rx="6" 
                fill="${fillColor}" stroke="${strokeColor}" stroke-width="1.8" />
          <text x="${bx + botBoxW / 2}" y="${by + 20}" text-anchor="middle" font-family="var(--font-sans)" 
                font-weight="700" font-size="11" fill="${textColor}">${attrName}</text>
          <text x="${bx + botBoxW / 2}" y="${by + 36}" text-anchor="middle" font-family="var(--font-sans)" 
                font-size="9" font-weight="600" fill="${textColor}" opacity="0.9">${subtext}</text>
        </g>
      `;
    });

    svgHtml += `</svg>`;
    dom.graphCanvas.innerHTML = svgHtml;
  }

  /* ---------------- RENDER EXPLANATION DOCK (LOWER RIGHT) ---------------- */
  function updateExplanation(tableObj) {
    state.activeInspectedTable = tableObj;
    const isVi = state.lang === 'vi';
    if (!tableObj) {
      dom.explPanel.className = 'dock-panel right-panel';
      dom.explBadge.className = 'status-indicator-badge warning';
      dom.explBadge.textContent = I18N[state.lang].diagnosticNotice;
      dom.explTitle.textContent = I18N[state.lang].hoverPrompt;
      dom.explDesc.textContent = I18N[state.lang].hoverPromptDesc;
      dom.explFdContainer.style.display = 'none';
      if (dom.explAnomalyContainer) dom.explAnomalyContainer.style.display = 'none';
      return;
    }

    if (tableObj.isLocked) {
      dom.explPanel.className = 'dock-panel right-panel is-locked-panel';
      dom.explBadge.className = 'status-indicator-badge locked';
      dom.explBadge.textContent = isVi 
        ? `TẠM KHÓA (${tableObj.targetStep || 'BƯỚC KẾ'})` 
        : `LOCKED (${tableObj.targetStep || 'UPCOMING'})`;
      dom.explTitle.textContent = isVi 
        ? (tableObj.explTitleVi || I18N.vi.lockedTitle) 
        : (tableObj.explTitleEn || I18N.en.lockedTitle);
      dom.explDesc.textContent = isVi 
        ? (tableObj.explDescVi || I18N.vi.lockedDesc) 
        : (tableObj.explDescEn || I18N.en.lockedDesc);
      
      if (tableObj.fdEn || tableObj.fdVi) {
        dom.explFdContainer.style.display = 'flex';
        dom.explFdCode.textContent = isVi ? tableObj.fdVi : tableObj.fdEn;
      } else {
        dom.explFdContainer.style.display = 'none';
      }
    } else if (tableObj.isOk) {
      dom.explPanel.className = 'dock-panel right-panel is-ok-panel';
      dom.explBadge.className = 'status-indicator-badge success';
      dom.explBadge.textContent = isVi ? 'HOÀN TOÀN ĐẠT CHUẨN' : 'FULLY NORMALIZED';
      dom.explTitle.textContent = isVi ? (tableObj.explTitleVi || I18N.vi.okTitle) : (tableObj.explTitleEn || I18N.en.okTitle);
      dom.explDesc.textContent = isVi ? (tableObj.explDescVi || I18N.vi.okDesc) : (tableObj.explDescEn || I18N.en.okDesc);
      
      if (tableObj.fdEn || tableObj.fdVi) {
        dom.explFdContainer.style.display = 'flex';
        dom.explFdCode.textContent = isVi ? tableObj.fdVi : tableObj.fdEn;
      } else {
        dom.explFdContainer.style.display = 'none';
      }
    } else {
      dom.explPanel.className = 'dock-panel right-panel';
      dom.explBadge.className = 'status-indicator-badge warning';
      dom.explBadge.textContent = isVi ? 'CẦN CHUẨN HÓA' : 'VIOLATION DETECTED';
      dom.explTitle.textContent = isVi ? tableObj.explTitleVi : tableObj.explTitleEn;
      dom.explDesc.textContent = isVi ? tableObj.explDescVi : tableObj.explDescEn;
      
      dom.explFdContainer.style.display = 'flex';
      dom.explFdCode.textContent = isVi ? tableObj.fdVi : tableObj.fdEn;
    }

    // Real-world problem solved (Anomalies prevented)
    if (dom.explAnomalyContainer) {
      const problemText = isVi ? (tableObj.problemVi || '') : (tableObj.problemEn || '');
      if (problemText) {
        dom.explAnomalyContainer.style.display = 'block';
        if (dom.explAnomalyLabel) dom.explAnomalyLabel.textContent = I18N[state.lang].anomalyLabel;
        if (dom.explAnomalyText) dom.explAnomalyText.textContent = problemText;
      } else {
        dom.explAnomalyContainer.style.display = 'none';
      }
    }
  }

  /* ---------------- RENDER SQL SCHEMA DDL (With Vietnamese SQL Syntax Translation) ---------------- */
  function renderSqlDdl(displayTables) {
    const isVi = state.lang === 'vi';
    const caseData = NORMALIZATION_CASES[`case${state.currentCase}`];
    const schemaTitle = isVi ? caseData.titleVi : caseData.titleEn;

    dom.sqlSchemaNameBadge.textContent = schemaTitle;
    dom.sqlTablesCount.textContent = `${displayTables.length} ${isVi ? 'Bảng' : 'Tables'}`;

    let sqlOutput = '';

    if (isVi) {
      sqlOutput += `-- =======================================================\n`;
      sqlOutput += `-- LƯỢC ĐỒ CƠ SỞ DỮ LIỆU: ${schemaTitle.toUpperCase()}\n`;
      sqlOutput += `-- Giai Đoạn Chuẩn Hóa Hiện Tại: ${state.currentStep.toUpperCase()}\n`;
      sqlOutput += `-- Cú Pháp SQL Đã Bản Địa Hóa Tiếng Việt (Vietnamese Translated SQL)\n`;
      sqlOutput += `-- =======================================================\n\n`;

      displayTables.forEach(table => {
        const tableName = table.nameVi || table.name;
        const statusNote = table.isLocked 
          ? `Đang khóa - Chờ bước ${table.targetStep || 'sau'}` 
          : (table.isOk ? 'Đạt chuẩn' : 'Chưa chuẩn hóa');
        sqlOutput += `-- Bảng: ${tableName} (${statusNote})\n`;
        sqlOutput += `<span class="sql-keyword">TẠO BẢNG</span> <span class="sql-table-name">${tableName}</span> (\n`;

        const primaryKeys = [];
        const colDefinitions = [];

        table.columns.forEach(col => {
          const isKey = col.includes('*');
          const cleanColName = col.replace('*', '');
          const colTranslated = translateCol(cleanColName);

          if (isKey) primaryKeys.push(colTranslated);

          let dataType = 'CHUỖI(100)';
          if (cleanColName.includes('ID') || cleanColName.includes('Code')) dataType = 'CHUỖI(20)';
          if (cleanColName.includes('Date')) dataType = 'NGÀY THÁNG';
          if (cleanColName.includes('Amount') || cleanColName.includes('Tax')) dataType = 'SỐ THẬP PHÂN(10,2)';
          if (cleanColName.includes('Grade')) dataType = 'KÝ TỰ(5)';

          colDefinitions.push(`    ${colTranslated} <span class="sql-type">${dataType}</span> <span class="sql-keyword">KHÔNG RỖNG</span>`);
        });

        if (primaryKeys.length > 0) {
          colDefinitions.push(`    <span class="sql-keyword">KHÓA CHÍNH</span> (${primaryKeys.join(', ')})`);
        }

        sqlOutput += colDefinitions.join(',\n') + '\n);\n\n';
      });
    } else {
      sqlOutput += `-- =======================================================\n`;
      sqlOutput += `-- DATABASE SCHEMA: ${schemaTitle.toUpperCase()}\n`;
      sqlOutput += `-- Normalization Stage: ${state.currentStep.toUpperCase()}\n`;
      sqlOutput += `-- Standard SQL DDL Queries\n`;
      sqlOutput += `-- =======================================================\n\n`;

      displayTables.forEach(table => {
        const statusNote = table.isLocked 
          ? `Locked - Scheduled for ${table.targetStep || 'later'}` 
          : (table.isOk ? 'Normalized' : 'Needs Normalization');
        sqlOutput += `-- Table: ${table.name} (${statusNote})\n`;
        sqlOutput += `<span class="sql-keyword">CREATE TABLE</span> <span class="sql-table-name">${table.name}</span> (\n`;

        const primaryKeys = [];
        const colDefinitions = [];

        table.columns.forEach(col => {
          const isKey = col.includes('*');
          const cleanColName = col.replace('*', '');

          if (isKey) primaryKeys.push(cleanColName);

          let dataType = 'VARCHAR(100)';
          if (cleanColName.includes('ID') || cleanColName.includes('Code')) dataType = 'VARCHAR(20)';
          if (cleanColName.includes('Date')) dataType = 'DATE';
          if (cleanColName.includes('Amount') || cleanColName.includes('Tax')) dataType = 'DECIMAL(10,2)';
          if (cleanColName.includes('Grade')) dataType = 'VARCHAR(5)';

          colDefinitions.push(`    ${cleanColName} <span class="sql-type">${dataType}</span> <span class="sql-keyword">NOT NULL</span>`);
        });

        if (primaryKeys.length > 0) {
          colDefinitions.push(`    <span class="sql-keyword">PRIMARY KEY</span> (${primaryKeys.join(', ')})`);
        }

        sqlOutput += colDefinitions.join(',\n') + '\n);\n\n';
      });
    }

    dom.sqlCodeDisplay.innerHTML = sqlOutput;
  }

  /* ---------------- RENDER WORKSPACE & TABLES ---------------- */
  function renderCurrentStep() {
    const caseData = NORMALIZATION_CASES[`case${state.currentCase}`];
    if (!caseData || !caseData.steps[state.currentStep]) return;

    const stepData = caseData.steps[state.currentStep];
    const isVi = state.lang === 'vi';

    // Update Topbar Breadcrumbs & Stage Title
    dom.currentCaseBadge.textContent = isVi ? caseData.titleVi.split(':')[0] : caseData.titleEn.split(':')[0];
    dom.currentStepBadge.textContent = state.currentStep.toUpperCase();
    dom.topicBreadcrumbText.textContent = `${isVi ? caseData.titleVi : caseData.titleEn} • ${state.currentStep.toUpperCase()}`;

    // Collect display tables
    let displayTables = [];
    let hasUnnormalizedTable = false;

    stepData.tables.forEach(baseTable => {
      if (state.normalizedTableIds.has(baseTable.id) && baseTable.splitResults) {
        displayTables.push(...baseTable.splitResults);
      } else {
        displayTables.push(baseTable);
        if (!baseTable.isOk && !baseTable.isLocked) {
          hasUnnormalizedTable = true;
        }
      }
    });

    const isStepFullyNormalized = !hasUnnormalizedTable;
    const stepKeyId = `c${state.currentCase}_${state.currentStep}`;

    if (isStepFullyNormalized) {
      state.completedSteps.add(stepKeyId);
      dom.stageStatusPill.className = 'status-pill completed';
      dom.stageStatusText.textContent = I18N[state.lang].stageStatusDone;
      dom.dynamicStageTitle.textContent = isVi ? stepData.nextStepTitleVi : stepData.nextStepTitleEn;
      dom.dynamicStageSubtitle.textContent = isVi 
        ? 'Dạng chuẩn này đã đạt yêu cầu. Nhấn Bước Kế Tiếp để sang dạng chuẩn tiếp theo.'
        : 'All functional dependency constraints satisfied for this normal form. Click Next Step to continue.';
      dom.btnNormalize.disabled = true;
      dom.btnNextStep.disabled = !stepData.nextStepKey;
    } else {
      state.completedSteps.delete(stepKeyId);
      dom.stageStatusPill.className = 'status-pill in-progress';
      dom.stageStatusText.textContent = I18N[state.lang].stageStatusNeeds;
      dom.dynamicStageTitle.textContent = isVi ? stepData.titleVi : stepData.titleEn;
      dom.dynamicStageSubtitle.textContent = isVi ? stepData.subtitleVi : stepData.subtitleEn;
      dom.btnNormalize.disabled = false;
      dom.btnNextStep.disabled = true;
    }

    updateSidebarActiveStep();
    updateProgress();

    // Render Table Cards
    dom.tablesContainer.innerHTML = '';
    displayTables.forEach(table => {
      const tableElem = createTableCardElement(table, stepData);
      dom.tablesContainer.appendChild(tableElem);
    });

    // Check if 2NF graph should be displayed
    const tableWithGraph = displayTables.find(t => t.hasGraph && t.graphConfig && !t.isOk && !t.isLocked);
    if (tableWithGraph) {
      render2NFGraph(tableWithGraph.graphConfig);
    } else {
      dom.graphPanel.style.display = 'none';
    }

    // Update SQL Schema DDL View
    renderSqlDdl(displayTables);

    // Initial explanation dock
    const tableToExplain = displayTables.find(t => !t.isOk && !t.isLocked) || displayTables[0];
    updateExplanation(tableToExplain);
  }

  /* ---------------- CREATE TABLE CARD ELEMENT ---------------- */
  function createTableCardElement(table, stepData) {
    const isVi = state.lang === 'vi';
    const card = document.createElement('div');
    const isCollapsed = state.collapsedTables.has(table.id);

    let statusClass = 'needs-norm';
    let badgeClass = 'badge-needs';
    let badgeText = I18N[state.lang].needsNormalization;

    if (table.isLocked) {
      statusClass = 'is-locked';
      badgeClass = 'badge-locked';
      const targetStepText = table.targetStep || 'Later';
      badgeText = I18N[state.lang].lockedTable.replace('{step}', targetStepText);
    } else if (table.isOk) {
      statusClass = 'is-ok';
      badgeClass = 'badge-ok';
      badgeText = I18N[state.lang].normalizedOk;
    }

    card.className = `table-card ${statusClass} ${isCollapsed ? 'collapsed' : ''}`;
    card.id = `card_${table.id}`;

    const tableName = isVi ? table.nameVi || table.name : table.name;
    const rowCountText = I18N[state.lang].rowsCount.replace('{count}', table.rows.length);

    card.innerHTML = `
      <div class="table-card-header">
        <div class="table-title-group">
          <span class="table-name">${tableName}</span>
          <span class="table-badge ${badgeClass}">${badgeText}</span>
        </div>
        <div class="table-actions-group">
          ${(!table.isOk && !table.isLocked) ? `
            <button class="btn-quick-normalize" title="${I18N[state.lang].normalizeBtn}">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
              </svg>
              <span>${I18N[state.lang].normalizeBtn}</span>
            </button>
          ` : ''}
          <span class="table-row-count">${rowCountText}</span>
          <button class="btn-table-expand" title="Expand / Collapse" aria-label="Toggle Expand">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </div>
      </div>
      <div class="table-card-body">
        <table class="db-table">
          <thead>
            <tr id="thead_tr_${table.id}"></tr>
          </thead>
          <tbody id="tbody_${table.id}"></tbody>
        </table>
      </div>
    `;

    // Populate Headers with Highlights
    const theadTr = card.querySelector(`#thead_tr_${table.id}`);
    table.columns.forEach(col => {
      const th = document.createElement('th');
      const isKey = col.includes('*');
      const isProblematicCol = !table.isLocked && table.problematicCol && col === table.problematicCol;
      const isPartialDep = !table.isLocked && table.partialDepCols && table.partialDepCols.includes(col);
      const isTransitiveDep = !table.isLocked && table.transitiveCols && table.transitiveCols.includes(col);
      const isBcnfDep = !table.isLocked && table.bcnfCols && table.bcnfCols.includes(col);
      const isMvdDep = !table.isLocked && table.mvdCols && table.mvdCols.includes(col);

      let classes = [];
      if (isKey) classes.push('col-key');
      if (isProblematicCol) classes.push('col-multivalue');
      if (isPartialDep) classes.push('col-partial-dep');
      if (isTransitiveDep) classes.push('col-transitive-dep');
      if (isBcnfDep) classes.push('col-bcnf-dep');
      if (isMvdDep) classes.push('col-mvd-dep');

      th.className = classes.join(' ');

      const translatedHeader = translateCol(col);
      th.innerHTML = translatedHeader.replace('*', '<span class="key-asterisk">*</span>');
      theadTr.appendChild(th);
    });

    // Populate Rows with Red/Green Boxes
    const tbody = card.querySelector(`#tbody_${table.id}`);
    table.rows.forEach(row => {
      const tr = document.createElement('tr');
      row.forEach((cell, cellIdx) => {
        if (typeof cell === 'boolean') return;

        const td = document.createElement('td');
        const colName = table.columns[cellIdx];
        const isProblematicCol = !table.isLocked && table.problematicCol && colName === table.problematicCol;

        if (isProblematicCol) td.classList.add('col-multivalue');

        if (Array.isArray(cell)) {
          if (!table.isLocked) td.classList.add('col-multivalue');
          cell.forEach(valItem => {
            const span = document.createElement('span');
            span.className = table.isLocked ? 'multi-val-badge' : 'multi-val-badge red-box';
            span.textContent = valItem;
            td.appendChild(span);
          });
        } 
        else if (row[row.length - 1] === true && cellIdx === table.columns.length - 1) {
          const span = document.createElement('span');
          span.className = 'fixed-val-badge green-box';
          span.textContent = cell;
          td.appendChild(span);
        } else {
          td.textContent = cell;
        }

        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });

    // Hover Events
    card.addEventListener('mouseenter', () => {
      updateExplanation(table);
      if (table.hasGraph && table.graphConfig && !table.isOk && !table.isLocked) {
        render2NFGraph(table.graphConfig);
      }
    });

    // Expand / Collapse Event
    const expandBtn = card.querySelector('.btn-table-expand');
    expandBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      playChime('click');
      if (state.collapsedTables.has(table.id)) {
        state.collapsedTables.delete(table.id);
        card.classList.remove('collapsed');
      } else {
        state.collapsedTables.add(table.id);
        card.classList.add('collapsed');
      }
    });

    // Normalize Click Event
    card.addEventListener('click', (e) => {
      if (e.target.closest('.btn-table-expand')) return;
      if (!table.isOk && !table.isLocked) {
        normalizeSingleTable(table.id);
      }
    });

    return card;
  }

  /* ---------------- NORMALIZE INDIVIDUAL TABLE ---------------- */
  function normalizeSingleTable(tableId) {
    playChime('success');

    const card = document.getElementById(`card_${tableId}`);
    if (card) card.classList.add('anim-split');

    setTimeout(() => {
      state.normalizedTableIds.add(tableId);
      renderCurrentStep();
    }, 280);
  }

  /* ---------------- NORMALIZE ALL TABLES IN CURRENT STEP ---------------- */
  function normalizeAllInCurrentStep() {
    playChime('success');

    const cards = dom.tablesContainer.querySelectorAll('.table-card.needs-norm');
    cards.forEach(c => c.classList.add('anim-split'));

    setTimeout(() => {
      const caseData = NORMALIZATION_CASES[`case${state.currentCase}`];
      const stepData = caseData.steps[state.currentStep];
      stepData.tables.forEach(t => {
        if (!t.isOk && !t.isLocked) {
          state.normalizedTableIds.add(t.id);
        }
      });
      renderCurrentStep();
    }, 280);
  }

  /* ---------------- RESET CURRENT STEP ---------------- */
  function resetCurrentStep() {
    playChime('click');
    const caseData = NORMALIZATION_CASES[`case${state.currentCase}`];
    const stepData = caseData.steps[state.currentStep];
    stepData.tables.forEach(t => {
      state.normalizedTableIds.delete(t.id);
    });
    state.completedSteps.delete(`c${state.currentCase}_${state.currentStep}`);
    renderCurrentStep();
  }

  /* ---------------- SWITCH WORKSPACE TABS ---------------- */
  function switchTab(tabKey) {
    playChime('click');
    state.activeTab = tabKey;
    if (tabKey === 'tables') {
      dom.tabTablesBtn.classList.add('active');
      dom.tabSqlBtn.classList.remove('active');
      dom.tablesViewPanel.style.display = 'block';
      dom.sqlViewPanel.style.display = 'none';
    } else {
      dom.tabSqlBtn.classList.add('active');
      dom.tabTablesBtn.classList.remove('active');
      dom.tablesViewPanel.style.display = 'none';
      dom.sqlViewPanel.style.display = 'block';
    }
  }

  /* ---------------- COPY SQL TO CLIPBOARD ---------------- */
  function copySqlToClipboard() {
    const rawSql = dom.sqlCodeDisplay.innerText || dom.sqlCodeDisplay.textContent;
    navigator.clipboard.writeText(rawSql).then(() => {
      playChime('success');
      dom.btnCopySql.classList.add('copied');
      dom.copySqlText.textContent = I18N[state.lang].copiedSqlBtn;
      setTimeout(() => {
        dom.btnCopySql.classList.remove('copied');
        dom.copySqlText.textContent = I18N[state.lang].copySqlBtn;
      }, 2000);
    });
  }

  /* ---------------- EVENT LISTENERS SETUP ---------------- */
  function initEvents() {
    dom.themeSwitchBtn.addEventListener('click', toggleTheme);

    dom.langSelect.addEventListener('change', (e) => {
      setLanguage(e.target.value);
    });

    dom.tabTablesBtn.addEventListener('click', () => switchTab('tables'));
    dom.tabSqlBtn.addEventListener('click', () => switchTab('sql'));
    dom.btnCopySql.addEventListener('click', copySqlToClipboard);

    dom.btnNormalize.addEventListener('click', normalizeAllInCurrentStep);
    dom.btnResetStep.addEventListener('click', resetCurrentStep);

    dom.btnNextStep.addEventListener('click', () => {
      playChime('click');
      const caseData = NORMALIZATION_CASES[`case${state.currentCase}`];
      const stepData = caseData.steps[state.currentStep];
      if (stepData && stepData.nextStepKey) {
        selectStep(state.currentCase, stepData.nextStepKey);
      }
    });

    dom.closeGraphBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dom.graphPanel.style.display = 'none';
    });
  }

  /* ---------------- APPLICATION INITIALIZATION ---------------- */
  function init() {
    initTheme();
    initSidebar();
    initEvents();
    setLanguage(state.lang);
    selectCase(1);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
