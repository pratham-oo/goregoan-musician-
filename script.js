// Modal Elements
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');

// Open modal
function openModal(el) {
  modalContent.innerHTML = '';
  const clone = el.cloneNode(true);

  if (clone.tagName === 'VIDEO') {
    clone.controls = true;
    clone.autoplay = true;
    clone.muted = false;
  }

  modalContent.appendChild(clone);
  modal.style.display = 'flex';
}

// Attach click to all media
document.querySelectorAll('.media-row img, .media-row video').forEach(el => {
  el.addEventListener('click', () => openModal(el));
});

// Close modal
modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
  modalContent.innerHTML = '';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    modalContent.innerHTML = '';
  }
});
