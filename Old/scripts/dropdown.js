/*function toggleDropdown(id) {
    var element = document.getElementById(id);
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}
*/
function toggleDropdown(id) {
    const element = document.getElementById(id);
    if (element.classList.contains('expanded')) {
        element.classList.remove('expanded');
        element.style.maxHeight = '0';
    } else {
        element.classList.add('expanded');
        element.style.maxHeight = element.scrollHeight + 'px';
    }
}