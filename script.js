// Modal Elements
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');

// Open modal with cloned image/video
function openModal(el) {
  modalContent.innerHTML = '';
  const clone = el.cloneNode(true);

  if (clone.tagName === 'VIDEO') {
    clone.controls = true;
    clone.autoplay = true;
    clone.muted = false;
    clone.playsInline = true; // 👈 Needed for mobile/iPhone inline play
  }

  modalContent.appendChild(clone);
  modal.style.display = 'flex';
}

// Attach click events to all images and videos inside .media-row
document.querySelectorAll('.media-row img, .media-row video').forEach(el => {
  el.addEventListener('click', () => openModal(el));
});

// Close modal on ❌ click
modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
  modalContent.innerHTML = '';
});

// Close modal when clicking outside content area
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    modalContent.innerHTML = '';
  }
});
