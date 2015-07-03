// This is just in here to avoid loading and weird 
// button expansion when refreshing the page

window.addEventListener('load', function load() {
window.removeEventListener('load', load, false);
document.body.classList.remove('load');
}, false);