const fanSkills = {
  agents: { index: '01 / AI AGENT', title: 'AI 应用与智能体', copy: '从智能体设计、RAG 知识库问答到模型选择与流程编排，构建能够进入真实业务的 AI 服务能力。', tags: ['Dify', '扣子 Coze', '文心', '元器', 'n8n'] },
  automation: { index: '02 / AUTOMATION', title: '自动化与开发', copy: '以 Java、Python、Codex 与工作流工具为基础，把重复操作拆分、编排并封装为可调用的自动化能力。', tags: ['Java', 'Python', 'Codex', 'OpenClaw', 'Workflow'] },
  content: { index: '03 / GENERATIVE CONTENT', title: '生成式内容与视觉', copy: '理解图文、视频与 AI 视觉生成的能力边界，为电商场景设计稳定、可扩展的内容生产流程。', tags: ['ChatGPT', 'Claude', 'Gemini', 'DeepSeek', '豆包', '即梦'] },
  business: { index: '04 / BUSINESS DELIVERY', title: 'GEO 与跨境电商', copy: '结合八大 AI 平台 GEO、跨境电商运营、B2B 视频与 OPC 项目经验，把技术方案推进为面向业务结果的交付。', tags: ['GEO', 'OPC', 'Cross-border', 'B2B Video', 'Ops'] }
};

const fanKeys = document.querySelectorAll('[data-fan-key]');
const fanSegments = document.querySelectorAll('[data-fan-skill]');
const fanDetailIndex = document.querySelector('[data-fan-detail-index]');
const fanDetailTitle = document.querySelector('[data-fan-detail-title]');
const fanDetailCopy = document.querySelector('[data-fan-detail-copy]');
const fanDetailTags = document.querySelector('[data-fan-detail-tags]');

function setFanSkill(name) {
  const skill = fanSkills[name];
  if (!skill) return;
  fanKeys.forEach((key) => {
    const active = key.dataset.fanKey === name;
    key.classList.toggle('selected', active);
    key.setAttribute('aria-pressed', String(active));
  });
  fanSegments.forEach((segment) => segment.classList.toggle('selected', segment.dataset.fanSkill === name));
  fanDetailIndex.textContent = skill.index;
  fanDetailTitle.textContent = skill.title;
  fanDetailCopy.textContent = skill.copy;
  fanDetailTags.innerHTML = skill.tags.map((tag) => `<i>${tag}</i>`).join('');
}

fanKeys.forEach((key) => key.addEventListener('click', () => setFanSkill(key.dataset.fanKey)));
fanSegments.forEach((segment) => {
  segment.addEventListener('click', () => setFanSkill(segment.dataset.fanSkill));
  segment.addEventListener('mouseenter', () => setFanSkill(segment.dataset.fanSkill));
});
