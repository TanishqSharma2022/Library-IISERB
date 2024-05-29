function animateValue(id, start, end, duration) {
    if (start === end) return;

    const obj = document.getElementById(id);
    const range = end - start;
    const startTime = performance.now();
    const increment = end > start ? 1 : -1;

    function step(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1); // progress between 0 and 1
        const easedProgress = easeInOutQuad(progress); // apply easing

        const currentValue = Math.round(start + range * easedProgress);
        obj.innerHTML = currentValue;

        if (progress < 1) {
            requestAnimationFrame(step);
        }
    }

    requestAnimationFrame(step);

    function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }
}

// Usage
animateValue("counter", 14900, 15000, 3000);
animateValue("counter2", 5700, 5800, 3000);
animateValue("counter3", 0, 10, 3000);
animateValue("counter4", 2250, 2450, 3000);
