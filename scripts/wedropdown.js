// work-dropdown.js

function toggleWorkDescription(id) {
    const element = document.getElementById(id);
    if (element.classList.contains('expanded')) {
        element.classList.remove('expanded');
        element.style.maxHeight = '0';
    } else {
        element.classList.add('expanded');
        element.style.maxHeight = element.scrollHeight + 'px';
    }
}
