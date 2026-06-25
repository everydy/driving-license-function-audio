const audioClips = [
  { id: "pre-exam-notice", title: "시험 시작 안내", text: "잠시 후 시험을 시작하겠습니다. 시험은 지시에 따라 진행하며 지시와 다른 장치를 조작할 경우 감점될 수 있으니 유의하시기 바랍니다.", file: "audio/1-pre-exam-notice.mp3", group: "시험 시작", number: "1", majorNumber: "1", majorLabel: "시험 시작" },
  { id: "engine-start", title: "시동", text: "지금부터 시험을 시작하겠습니다. 5초 이내에 엔진 시동을 거세요.", file: "audio/2-engine-start.mp3", group: "시동", delaySeconds: 5, successAfterDelay: true, number: "2", majorNumber: "2", majorLabel: "시동" },
  { id: "control-intro", title: "운전장치 공통 안내", text: "운전장치 조작 능력은 주차 브레이크를 그대로 둔 상태에서 4개 항목 중 2개 항목을 평가합니다.", file: "audio/3-control-intro.mp3", group: "공통 안내", number: "3", majorNumber: "3", majorLabel: "공통 안내" },
  { id: "indicator-left-on", title: "좌측 방향지시등 켜기", text: "방향지시등 조작 능력을 점검합니다. 5초 내에 좌측 방향지시등을 켜세요.", file: "audio/4-1-1-1-left-indicator-on.mp3", group: "기능조작", delaySeconds: 5, taskSet: "indicator-left", taskSetLabel: "4-1-1 좌측 방향지시등", taskStep: "1/2", number: "4-1-1-1", majorNumber: "4", majorLabel: "기능조작", middleNumber: "4-1", middleLabel: "방향지시등", minorNumber: "4-1-1", minorLabel: "좌측" },
  { id: "indicator-left-off", title: "좌측 방향지시등 끄기", text: "5초 내에 방향지시등을 끄세요.", file: "audio/4-1-1-2-left-indicator-off.mp3", group: "기능조작", delaySeconds: 5, taskSet: "indicator-left", taskSetLabel: "4-1-1 좌측 방향지시등", taskStep: "2/2", taskSetEnd: true, number: "4-1-1-2", majorNumber: "4", majorLabel: "기능조작", middleNumber: "4-1", middleLabel: "방향지시등", minorNumber: "4-1-1", minorLabel: "좌측" },
  { id: "indicator-right-on", title: "우측 방향지시등 켜기", text: "방향지시등 조작 능력을 점검합니다. 5초 내에 우측 방향지시등을 켜세요.", file: "audio/4-1-2-1-right-indicator-on.mp3", group: "기능조작", delaySeconds: 5, taskSet: "indicator-right", taskSetLabel: "4-1-2 우측 방향지시등", taskStep: "1/2", number: "4-1-2-1", majorNumber: "4", majorLabel: "기능조작", middleNumber: "4-1", middleLabel: "방향지시등", minorNumber: "4-1-2", minorLabel: "우측" },
  { id: "indicator-right-off", title: "우측 방향지시등 끄기", text: "5초 내에 방향지시등을 끄세요.", file: "audio/4-1-2-2-right-indicator-off.mp3", group: "기능조작", delaySeconds: 5, taskSet: "indicator-right", taskSetLabel: "4-1-2 우측 방향지시등", taskStep: "2/2", taskSetEnd: true, number: "4-1-2-2", majorNumber: "4", majorLabel: "기능조작", middleNumber: "4-1", middleLabel: "방향지시등", minorNumber: "4-1-2", minorLabel: "우측" },
  { id: "headlight-on", title: "전조등 켜기", text: "전조등 조작 능력을 점검합니다. 지시에 따라 전조등을 켠 후 상향등 하향등 조작을 각 1회씩 실시합니다. 먼저 5초 내에 전조등을 켜세요.", file: "audio/4-2-1-headlight-on.mp3", group: "기능조작", delaySeconds: 5, taskSet: "headlight", taskSetLabel: "4-2 전조등", taskStep: "1/3", number: "4-2-1", majorNumber: "4", majorLabel: "기능조작", middleNumber: "4-2", middleLabel: "전조등" },
  { id: "headlight-high", title: "상향등 전환", text: "5초 내에 상향등으로 전환하세요.", file: "audio/4-2-2-headlight-high.mp3", group: "기능조작", delaySeconds: 5, taskSet: "headlight", taskSetLabel: "4-2 전조등", taskStep: "2/3", number: "4-2-2", majorNumber: "4", majorLabel: "기능조작", middleNumber: "4-2", middleLabel: "전조등" },
  { id: "headlight-low-off", title: "하향등 전환 후 끄기", text: "5초 내에 하향등으로 전환한 후 전조등을 끄세요.", file: "audio/4-2-3-headlight-low-off.mp3", group: "기능조작", delaySeconds: 5, taskSet: "headlight", taskSetLabel: "4-2 전조등", taskStep: "3/3", taskSetEnd: true, number: "4-2-3", majorNumber: "4", majorLabel: "기능조작", middleNumber: "4-2", middleLabel: "전조등" },
  { id: "gear-drive", title: "기어변속 D", text: "기어 변속 능력을 점검합니다. 10초 내에 변속기 레버를 드라이브에 넣었다가 다시 파킹 위치로 전환하세요.", file: "audio/4-3-1-gear-drive.mp3", group: "기능조작", delaySeconds: 10, taskSet: "gear", taskSetLabel: "4-3 기어변속", taskStep: "1/1", taskSetEnd: true, number: "4-3-1", majorNumber: "4", majorLabel: "기능조작", middleNumber: "4-3", middleLabel: "기어변속" },
  { id: "wiper-on", title: "와이퍼 켜기", text: "와이퍼 조작 능력을 점검합니다. 5초 내에 와이퍼를 작동하세요.", file: "audio/4-4-1-wiper-on.mp3", group: "기능조작", delaySeconds: 5, taskSet: "wiper", taskSetLabel: "4-4 와이퍼", taskStep: "1/2", number: "4-4-1", majorNumber: "4", majorLabel: "기능조작", middleNumber: "4-4", middleLabel: "와이퍼" },
  { id: "wiper-off", title: "와이퍼 끄기", text: "5초 내에 와이퍼를 끄세요.", file: "audio/4-4-2-wiper-off.mp3", group: "기능조작", delaySeconds: 5, taskSet: "wiper", taskSetLabel: "4-4 와이퍼", taskStep: "2/2", taskSetEnd: true, number: "4-4-2", majorNumber: "4", majorLabel: "기능조작", middleNumber: "4-4", middleLabel: "와이퍼" },
  { id: "departure", title: "출발 지시 안내", text: "지금부터 기본 주행능력을 점검합니다. 주행 속도는 시속 20km 미만을 유지하십시오. 그럼 시작하겠습니다. 주차 브레이크를 해제하고 출발하세요.", file: "audio/5-departure.mp3", group: "출발", number: "5", majorNumber: "5", majorLabel: "출발 지시 안내" },
  { id: "emergency", title: "돌발", text: "돌발 음성", file: "audio/6-1-emergency.mp3", group: "돌발", number: "6-1", majorNumber: "6", majorLabel: "돌발" }
];

const successChime = {
  id: "success-chime",
  title: "성공음",
  text: "성공음",
  file: "audio/sfx/success-chime.mp3",
  group: "효과음"
};

const clipMap = new Map([...audioClips, successChime].map((clip) => [clip.id, clip]));

const fullSequenceIds = [
  "pre-exam-notice",
  "engine-start",
  "control-intro",
  "indicator-left-on",
  "indicator-left-off",
  "indicator-right-on",
  "indicator-right-off",
  "headlight-on",
  "headlight-high",
  "headlight-low-off",
  "gear-drive",
  "wiper-on",
  "wiper-off",
  "departure",
  "emergency"
];

const controlTaskTemplates = [
  {
    id: "indicator",
    title: "방향지시등",
    variants: [
      { id: "indicator-left", title: "좌측 방향지시등", clips: ["indicator-left-on", "indicator-left-off"] },
      { id: "indicator-right", title: "우측 방향지시등", clips: ["indicator-right-on", "indicator-right-off"] }
    ]
  },
  { id: "headlight", title: "전조등", clips: ["headlight-on", "headlight-high", "headlight-low-off"] },
  { id: "gear-drive", title: "기어변속 D", clips: ["gear-drive"] },
  { id: "wiper", title: "와이퍼", clips: ["wiper-on", "wiper-off"] }
];

const neededItems = [
  { title: "기어 N/R 음성", detail: "현재 앱은 확정된 D(드라이브)만 사용합니다. N/R을 랜덤에 넣으려면 최종 MP3가 필요합니다." },
  { title: "기능조작 정답 판정", detail: "지금은 음성 연습과 수동 성공음 중심입니다. 실제 조작 입력 판정은 아직 없습니다." }
];

let activeAudio = null;
let activeQueue = [];
let activeQueueIndex = 0;
let activeQueueName = "전체 순차";
let activeQueueMode = "manual";
let infiniteControlMode = false;
let currentClip = audioClips[0];
let queueDelayTimer = null;
let emergencyTimer = null;
let emergencyLoopActive = false;
let emergencyLive = false;
let emergencyStart = 0;
let activeHeroAction = "";

const $ = (selector) => document.querySelector(selector);

const statusDot = $("#audioStatusDot");
const audioStatus = $("#audioStatus");
const currentClipTitle = $("#currentClipTitle");
const currentClipText = $("#currentClipText");
const currentClipFile = $("#currentClipFile");
const fullQueueList = $("#fullQueueList");
const partQueueList = $("#partQueueList");
const partModeLabel = $("#partModeLabel");
const libraryList = $("#libraryList");
const neededList = $("#neededList");
const emergencyTitle = $("#emergencyTitle");
const emergencyText = $("#emergencyText");
const emergencyLoopState = $("#emergencyLoopState");
const signalLight = $("#signalLight");
const emergencyMinInput = $("#emergencyMinSeconds");
const emergencyMaxInput = $("#emergencyMaxSeconds");
const heroActionButtons = [...document.querySelectorAll(".hero-action-button")];

function setHeroActionState(action) {
  activeHeroAction = action;
  heroActionButtons.forEach((button) => {
    const isActive = button.dataset.actionState === activeHeroAction;
    button.classList.toggle("is-action-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function setAudioStatus(text, ready = false) {
  audioStatus.textContent = text;
  statusDot.classList.toggle("is-ready", ready);
}

function setCurrentClip(clip) {
  currentClip = clip;
  currentClipTitle.textContent = clip.title;
  currentClipText.textContent = clip.text;
  currentClipFile.textContent = clip.file;
}

function stopAudio() {
  if (!activeAudio) return;
  activeAudio.pause();
  activeAudio.currentTime = 0;
  activeAudio = null;
}

function clearQueueDelay() {
  window.clearTimeout(queueDelayTimer);
  queueDelayTimer = null;
}

function stopQueuePlayback() {
  activeQueueMode = "manual";
  infiniteControlMode = false;
  clearQueueDelay();
  stopAudio();
  renderQueues();
  setAudioStatus("재생 중지", true);
}

function playAudioClip(clip, onEnded) {
  setCurrentClip(clip);

  stopAudio();
  activeAudio = new Audio(clip.file);
  activeAudio.addEventListener("error", () => {
    setAudioStatus(`파일 확인 필요: ${clip.file}`, false);
  }, { once: true });
  activeAudio.addEventListener("ended", () => {
    setAudioStatus("재생 완료", true);
    if (typeof onEnded === "function") onEnded();
  }, { once: true });

  return activeAudio.play()
    .then(() => setAudioStatus(`재생 중: ${clip.title}`, true))
    .catch((error) => {
      setAudioStatus("재생 차단 · 다시 눌러주세요", false);
      throw error;
    });
}

function playStandaloneClip(id) {
  activeQueueMode = "manual";
  infiniteControlMode = false;
  clearQueueDelay();
  const clip = clipMap.get(id);
  if (clip) playAudioClip(clip).catch(() => {});
}

function playSuccessChime() {
  playStandaloneClip("success-chime");
}

function playHeroCurrent() {
  setHeroActionState("current");
  playActiveQueueClip();
}

function playHeroNext() {
  setHeroActionState("next");
  playNextInActiveQueue();
}

function stopHeroPlayback() {
  setHeroActionState("stop");
  stopQueuePlayback();
}

function playHeroSuccessChime() {
  setHeroActionState("success");
  playSuccessChime();
}

function clipsFromIds(ids) {
  return ids.map((id) => clipMap.get(id)).filter(Boolean);
}

function displayNumber(value) {
  return String(value || "").replace(/\b0+(?=\d)/g, "");
}

function materializeControlTask(task) {
  if (!task.variants) return task;
  return task.variants[Math.floor(Math.random() * task.variants.length)];
}

function materializedControlTasks() {
  return controlTaskTemplates.map(materializeControlTask);
}

function sampleTwoControlTasks() {
  return [...materializedControlTasks()].sort(() => Math.random() - 0.5).slice(0, 2);
}

function setActiveQueue(name, clips, mode = "manual") {
  clearQueueDelay();
  activeQueueName = name;
  activeQueue = clips;
  activeQueueIndex = 0;
  activeQueueMode = mode;
  if (activeQueue[0]) setCurrentClip(activeQueue[0]);
  renderQueues();
}

function currentQueuePanel() {
  return activeQueueName === "전체 순차" ? fullQueueList : partQueueList;
}

function renderQueueList(container, queue, heading, currentIndex) {
  container.innerHTML = "";
  const header = document.createElement("div");
  header.className = "queue-header";
  header.innerHTML = `<strong>${heading}</strong><span>${queue.length}개 음성</span>`;
  container.appendChild(header);

  let currentMajorKey = "";
  let currentMiddleKey = "";
  let currentMinorKey = "";
  let majorBody = container;
  let middleBody = null;
  let minorBody = null;
  const localCounters = new Map();

  queue.forEach((clip, index) => {
    const majorKey = clip.majorNumber || clip.group || "기타";
    if (majorKey !== currentMajorKey) {
      const majorBlock = document.createElement("section");
      majorBlock.className = "queue-major-block";
      majorBlock.innerHTML = `
        <div class="queue-major-heading">
          <span>${displayNumber(clip.majorNumber)}</span>
          <strong>${clip.majorLabel || clip.group}</strong>
        </div>
        <div class="queue-major-body"></div>
      `;
      container.appendChild(majorBlock);
      majorBody = majorBlock.querySelector(".queue-major-body");
      currentMajorKey = majorKey;
      currentMiddleKey = "";
      currentMinorKey = "";
      middleBody = null;
      minorBody = null;
    }

    const middleKey = clip.middleNumber || "";
    if (middleKey && middleKey !== currentMiddleKey) {
      const middleBlock = document.createElement("section");
      middleBlock.className = "queue-middle-block";
      middleBlock.innerHTML = `
        <div class="queue-middle-heading">
          <span>${displayNumber(clip.middleNumber)}</span>
          <strong>${clip.middleLabel}</strong>
        </div>
        <div class="queue-middle-body"></div>
      `;
      majorBody.appendChild(middleBlock);
      middleBody = middleBlock.querySelector(".queue-middle-body");
      currentMiddleKey = middleKey;
      currentMinorKey = "";
      minorBody = null;
    }

    const minorKey = clip.minorNumber || "";
    if (minorKey && minorKey !== currentMinorKey) {
      const minorBlock = document.createElement("section");
      minorBlock.className = "queue-minor-block";
      minorBlock.innerHTML = `
        <div class="queue-minor-heading">
          <span>${displayNumber(clip.minorNumber)}</span>
          <strong>${clip.minorLabel}</strong>
        </div>
        <div class="queue-minor-body"></div>
      `;
      (middleBody || majorBody).appendChild(minorBlock);
      minorBody = minorBlock.querySelector(".queue-minor-body");
      currentMinorKey = minorKey;
    }

    const itemScopeKey = minorKey || middleKey || majorKey;
    const itemNumber = (localCounters.get(itemScopeKey) || 0) + 1;
    localCounters.set(itemScopeKey, itemNumber);

    const item = document.createElement("button");
    item.type = "button";
    item.className = `queue-item${index === currentIndex && heading === activeQueueName ? " is-current" : ""}`;
    item.innerHTML = `
      <span>${itemNumber}</span>
      <strong>${clip.title}</strong>
      <small>${clip.file.replace("audio/", "")}</small>
    `;
    item.addEventListener("click", () => {
      activeQueueName = heading;
      activeQueue = queue;
      activeQueueIndex = index;
      activeQueueMode = "manual";
      renderQueues();
      playActiveQueueClip();
    });
    (minorBody || middleBody || majorBody).appendChild(item);
  });
}

function renderQueues() {
  const fullQueue = clipsFromIds(fullSequenceIds);
  renderQueueList(fullQueueList, fullQueue, "전체 순차", activeQueueIndex);
  if (activeQueueName === "전체 순차") {
    partQueueList.innerHTML = `<div class="empty-state">파트별 재생 모드를 선택하면 여기에 재생 큐가 표시됩니다.</div>`;
    partModeLabel.textContent = "파트별 큐 없음";
    return;
  }
  renderQueueList(partQueueList, activeQueue, activeQueueName, activeQueueIndex);
  partModeLabel.textContent = activeQueueName;
}

function playActiveQueueClip() {
  const clip = activeQueue[activeQueueIndex];
  if (!clip) return;
  playAudioClip(clip, handleQueueEnded).catch(() => {});
  renderQueues();
}

function handleQueueEnded() {
  if (activeQueueMode !== "auto") return;
  const completedClip = activeQueue[activeQueueIndex];
  if (completedClip?.delaySeconds) {
    scheduleCommandDelay(completedClip);
    return;
  }
  advanceQueueAfterClip();
}

function scheduleCommandDelay(clip) {
  clearQueueDelay();
  const shouldPlaySuccess = Boolean(clip.successAfterDelay || clip.taskSetEnd);
  const waitLabel = shouldPlaySuccess
    ? `${clip.delaySeconds}초 조작 대기 후 성공음`
    : `${clip.delaySeconds}초 조작 대기`;
  setAudioStatus(waitLabel, true);
  queueDelayTimer = window.setTimeout(() => {
    if (activeQueueMode !== "auto") return;
    if (shouldPlaySuccess) {
      playAudioClip(successChime, advanceQueueAfterClip).catch(() => {});
      return;
    }
    advanceQueueAfterClip();
  }, clip.delaySeconds * 1000);
}

function advanceQueueAfterClip() {
  clearQueueDelay();
  if (activeQueueMode !== "auto") return;
  if (activeQueueIndex < activeQueue.length - 1) {
    activeQueueIndex += 1;
    renderQueues();
    playActiveQueueClip();
    return;
  }

  if (infiniteControlMode) {
    startRandomInfiniteControls();
    return;
  }

  activeQueueMode = "manual";
  renderQueues();
  setAudioStatus(`${activeQueueName} 완료`, true);
}

function playNextInActiveQueue() {
  if (activeQueueIndex < activeQueue.length - 1) {
    activeQueueIndex += 1;
  }
  activeQueueMode = "manual";
  renderQueues();
  playActiveQueueClip();
}

function startFullSequence() {
  setActiveQueue("전체 순차", clipsFromIds(fullSequenceIds), "auto");
  infiniteControlMode = false;
  playActiveQueueClip();
}

function playFullCurrent() {
  if (activeQueueName !== "전체 순차") {
    setActiveQueue("전체 순차", clipsFromIds(fullSequenceIds), "manual");
  }
  playActiveQueueClip();
}

function startRandomInfiniteControls() {
  const [task] = sampleTwoControlTasks();
  setActiveQueue(`무한 랜덤: ${task.title}`, clipsFromIds(task.clips), "auto");
  infiniteControlMode = true;
  playActiveQueueClip();
}

function startActualExamTwoControls() {
  const tasks = sampleTwoControlTasks();
  const clips = clipsFromIds(["control-intro", ...tasks.flatMap((task) => task.clips)]);
  setActiveQueue(`실제시험 2개: ${tasks.map((task) => task.title).join(", ")}`, clips, "auto");
  infiniteControlMode = false;
  playActiveQueueClip();
}

function startAllControlsSequential() {
  const tasks = materializedControlTasks();
  const clips = clipsFromIds(tasks.flatMap((task) => task.clips));
  setActiveQueue(`4종 순차: ${tasks.map((task) => task.title).join(" → ")}`, clips, "auto");
  infiniteControlMode = false;
  playActiveQueueClip();
}

function renderLibrary() {
  libraryList.innerHTML = "";
  audioClips.forEach((clip, index) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "clip-button";
    const setLabel = clip.middleNumber
      ? `${displayNumber(clip.majorNumber)} ${clip.majorLabel} · ${displayNumber(clip.middleNumber)} ${clip.middleLabel}${clip.minorNumber ? ` · ${displayNumber(clip.minorNumber)} ${clip.minorLabel}` : ""}`
      : `${displayNumber(clip.majorNumber) || index + 1} ${clip.majorLabel || clip.group}`;
    item.innerHTML = `
      <span class="clip-index">${index + 1}</span>
      <span><strong>${clip.title}</strong><span>${setLabel} · ${clip.file.replace("audio/", "")}</span></span>
    `;
    item.addEventListener("click", () => playStandaloneClip(clip.id));
    libraryList.appendChild(item);
  });
}

function renderNeededItems() {
  neededList.innerHTML = "";
  neededItems.forEach((item) => {
    const row = document.createElement("article");
    row.className = "needed-item";
    row.innerHTML = `<strong>${item.title}</strong><span>${item.detail}</span>`;
    neededList.appendChild(row);
  });
}

function resetEmergencyResponse() {
  emergencyLive = false;
  emergencyStart = 0;
  signalLight.classList.remove("is-live");
}

function getEmergencyDelayMs() {
  const min = Math.max(0, Number(emergencyMinInput.value || 0));
  const max = Math.max(min, Number(emergencyMaxInput.value || 60));
  emergencyMinInput.value = String(min);
  emergencyMaxInput.value = String(max);
  return Math.round((min + Math.random() * (max - min)) * 1000);
}

function scheduleNextEmergency() {
  if (!emergencyLoopActive) return;
  window.clearTimeout(emergencyTimer);
  resetEmergencyResponse();
  const delayMs = getEmergencyDelayMs();
  const min = emergencyMinInput.value;
  const max = emergencyMaxInput.value;
  emergencyTitle.textContent = "대기 중";
  emergencyText.textContent = `${min}~${max}초 사이 무작위 시점에 돌발 음성이 나옵니다.`;
  emergencyLoopState.textContent = "반복 중";

  emergencyTimer = window.setTimeout(() => {
    if (!emergencyLoopActive) return;
    emergencyLive = true;
    emergencyStart = Date.now();
    signalLight.classList.add("is-live");
    emergencyTitle.textContent = "돌발 발생";
    emergencyText.textContent = "돌발 음성이 재생 중입니다.";
    playAudioClip(clipMap.get("emergency"), () => {
      if (emergencyLoopActive) scheduleNextEmergency();
    }).catch(() => {});
  }, delayMs);
}

function startEmergencyLoop() {
  emergencyLoopActive = true;
  scheduleNextEmergency();
}

function stopEmergencyLoop() {
  emergencyLoopActive = false;
  window.clearTimeout(emergencyTimer);
  emergencyTimer = null;
  resetEmergencyResponse();
  emergencyTitle.textContent = "중지됨";
  emergencyText.textContent = "랜덤 반복 시작을 누르면 다시 대기합니다.";
  emergencyLoopState.textContent = "중지";
  setAudioStatus("돌발 반복 중지", true);
}

function bindTabs() {
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".tab-button").forEach((tab) => tab.classList.remove("is-active"));
      document.querySelectorAll(".tab-panel").forEach((panel) => panel.classList.remove("is-active"));
      button.classList.add("is-active");
      $(`#${button.dataset.tab}Panel`).classList.add("is-active");
    });
  });
}

$("#playCurrentButton").addEventListener("click", playHeroCurrent);
$("#nextClipButton").addEventListener("click", playHeroNext);
$("#stopPlaybackButton").addEventListener("click", stopHeroPlayback);
$("#startFullSequenceButton").addEventListener("click", startFullSequence);
$("#fullCurrentButton").addEventListener("click", playFullCurrent);
$("#successChimeButton").addEventListener("click", playHeroSuccessChime);
$("#randomInfiniteButton").addEventListener("click", startRandomInfiniteControls);
$("#actualTwoButton").addEventListener("click", startActualExamTwoControls);
$("#allControlsButton").addEventListener("click", startAllControlsSequential);
$("#partStopButton").addEventListener("click", stopQueuePlayback);
$("#partSuccessButton").addEventListener("click", playSuccessChime);
$("#startEmergencyLoopButton").addEventListener("click", startEmergencyLoop);
$("#stopEmergencyLoopButton").addEventListener("click", stopEmergencyLoop);

bindTabs();
setActiveQueue("전체 순차", clipsFromIds(fullSequenceIds), "manual");
renderLibrary();
renderNeededItems();
resetEmergencyResponse();
emergencyTitle.textContent = "대기";
emergencyText.textContent = "기본값은 0~60초 랜덤 반복입니다.";
emergencyLoopState.textContent = "중지";
