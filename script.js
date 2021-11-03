const hiddenContentToggles = document.querySelectorAll('[aria-controls="hidden-content"]');

hiddenContentToggles.forEach((toggle) => {
    toggle.addEventListener('click', toggleHidden);
})

function toggleHidden(e) {
    const toggleTarget = e.target.getAttribute('aria-controls');
    const target = document.querySelector(`#${toggleTarget}`);
    if (target.getAttribute('hidden')) {
        target.removeAttribute('hidden', false)
    } else {
        target.setAttribute('hidden', true);
    }
}
