const tabs = document.querySelectorAll('[data-case-tab]');
const panels = document.querySelectorAll('[data-case-panel]');

function activateTab(name) {
  const tab = document.querySelector(`[data-case-tab="${name}"]`);
  const panel = document.querySelector(`[data-case-panel="${name}"]`);
  if (!tab || !panel) return;
  tabs.forEach((item) => {
    item.classList.remove('selected');
    item.setAttribute('aria-selected', 'false');
  });
  panels.forEach((item) => item.classList.remove('active'));
  tab.classList.add('selected');
  tab.setAttribute('aria-selected', 'true');
  panel.classList.add('active');
}

tabs.forEach((tab) => tab.addEventListener('click', () => activateTab(tab.dataset.caseTab)));
const requestedTab = new URLSearchParams(window.location.search).get('tab');
if (requestedTab) activateTab(requestedTab);

const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox.querySelector('img');
const lightboxCaption = lightbox.querySelector('p');
document.querySelectorAll('[data-lightbox]').forEach((card) => card.addEventListener('click', () => {
  lightboxImage.src = card.dataset.lightbox;
  lightboxImage.alt = card.querySelector('img').alt;
  lightboxCaption.textContent = card.dataset.caption;
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
}));

function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
}

lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox || event.target.classList.contains('lightbox-close')) closeLightbox();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeLightbox();
});

const playButton = document.querySelector('[data-play-video]');
if (playButton) playButton.addEventListener('click', () => {
  const video = document.querySelector('.final-video video');
  video.play();
  video.scrollIntoView({ behavior: 'smooth', block: 'center' });
});
