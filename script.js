const coverImage = document.getElementById('coverImage');
const imageUpload = document.getElementById('imageUpload');
const linksContainer = document.getElementById('linksContainer');
const newLinkInput = document.getElementById('newLink');

const links = [];

imageUpload.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      coverImage.src = event.target.result;
    }
    reader.readAsDataURL(file);
  }
});

function addLink() {
  const url = newLinkInput.value.trim();
  if (url) {
    links.push(url);
    renderLinks();
    newLinkInput.value = '';
  }
}

function renderLinks() {
  linksContainer.innerHTML = '';
  links.forEach(link => {
    const a = document.createElement('a');
    a.href = link;
    a.target = '_blank';
    a.textContent = link;
    a.style.opacity = 0;
    linksContainer.appendChild(a);
    setTimeout(() => {
      a.style.transition = 'opacity 0.5s ease-in-out';
      a.style.opacity = 1;
    }, 100);
  });
}
