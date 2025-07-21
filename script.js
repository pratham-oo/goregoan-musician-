// Modal Elements
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');

// Open modal with cloned media
function openModal(el) {
  modalContent.innerHTML = '';
  const clone = el.cloneNode(true);

  if (clone.tagName === 'VIDEO') {
    clone.controls = true;
    clone.autoplay = true;
    clone.muted = false;
    clone.playsInline = true; // 👈 Needed for iPhones
  }

  modalContent.appendChild(clone);
  modal.style.display = 'flex';
}

// Attach click listeners to all images and videos
document.querySelectorAll('.media-row img, .media-row video').forEach(el => {
  el.addEventListener('click', () => openModal(el));
});

// Close modal via close icon
modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
  modalContent.innerHTML = '';
});

// Close modal when clicking outside content
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    modalContent.innerHTML = '';
  }
});
