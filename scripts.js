/* script.js */
document.addEventListener('DOMContentLoaded', () => {
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropdownBtn.addEventListener('click', () => {
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    window.addEventListener('click', (e) => {
        if (!dropdownBtn.contains(e.target)) {
            dropdownContent.style.display = 'none';
        }
    });

    const dropdownLinks = document.querySelectorAll('.dropdown-content a');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', () => {
            dropdownBtn.textContent = link.textContent;
            dropdownContent.style.display = 'none';
        });
    });
});
