const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');
    const icon = this.querySelector('.icon');

    items.forEach((item) => {
        item.setAttribute('aria-expanded', 'false');
        item.querySelector('.icon').classList.remove('rotate-45');
    });

    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
        icon.classList.add('rotate-45');
    }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));
