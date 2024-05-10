// let counts = setInterval(updated);
// let upto = 1000;
// function updated() {
//     let count = document.querySelector(".counter");
//     count.innerHTML = 5-upto;
//     if (upto === 0) {
//         clearInterval(counts);
//     }
// }
function animateValue(id, start, end, duration) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

animateValue("counter", 14900, 15000, 3000);
animateValue("counter2", 5700, 5800, 3000);
animateValue("counter3", 0, 10, 3000);
animateValue("counter4", 2250, 2450, 3000);