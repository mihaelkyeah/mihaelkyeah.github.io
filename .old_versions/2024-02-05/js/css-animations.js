window.addEventListener('load', () => {
    let pausedElements = document.querySelectorAll(".animation-paused")
    Array.prototype.forEach.call(pausedElements, (element) => {
        setTimeout(() => {
            element.classList.remove("animation-paused")
            element.classList.add("animation-play")
        }, 200)
    })
    // I will figure out a way for them to appear on scroll, or even better,
    // to make it possible to control which one appears first from the document.
})