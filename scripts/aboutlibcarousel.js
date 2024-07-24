
  
  const aboutCarousel = (function() {
    const carousel = document.getElementById("about-carousel");
    let currentIndex = 0;

    const images = [
        { src: '../../images/aboutcarousel/1.jpg', caption: 'Library Help Desk' },
        { src: '../../images/aboutcarousel/2.jpg', caption: 'Browsing Area Ground Floor' },
        { src: '../../images/aboutcarousel/3.jpg', caption: 'Browsing Area Ground Floor' },
        { src: '../../images/aboutcarousel/4.jpg', caption: 'RFID COMPONENTS (GROUD FLOOR) ' },
        { src: '../../images/aboutcarousel/5.jpg', caption: 'Reading zone (GROUD FLOOR) ' },
        { src: '../../images/aboutcarousel/6.jpg', caption: 'Book Stack Area (Ground Floor) ' },
        { src: '../../images/aboutcarousel/7.jpg', caption: 'Reading Zone (Ground Floor) ' },
        { src: '../../images/aboutcarousel/8.jpg', caption: 'Book Stack Area (Ground Floor) ' },
        { src: '../../images/aboutcarousel/9.jpg', caption: 'Book Stack Area (Ground Floor) ' },
        { src: '../../images/aboutcarousel/10.jpg', caption: 'Book Stack Area (Ground Floor) ' },
        { src: '../../images/aboutcarousel/11.jpg', caption: 'Book Stack Area (Ground Floor) ' },
        { src: '../../images/aboutcarousel/12.jpg', caption: 'Journals Display Area (First Floor) ' },
        { src: '../../images/aboutcarousel/13.jpg', caption: 'Journals Display Area (First Floor) ' },
        { src: '../../images/aboutcarousel/14.jpg', caption: 'Reading Zone (First Floor) ' },
        { src: '../../images/aboutcarousel/15.jpg', caption: 'Reading Zone  (First Floor) ' },
        { src: '../../images/aboutcarousel/16.jpg', caption: 'Book Stack Area  (First Floor) ' },
        { src: '../../images/aboutcarousel/17.jpg', caption: 'Book Stack Area  (First Floor) ' },
        { src: '../../images/aboutcarousel/18.jpg', caption: 'Book Stack Area  (First Floor) ' },
        { src: '../../images/aboutcarousel/19.jpg', caption: 'Book Stack Area  (First Floor) ' },
        { src: '../../images/aboutcarousel/20.jpg', caption: 'Reading Zone  (Second Floor) ' },
        { src: '../../images/aboutcarousel/21.jpg', caption: 'Reading Zone  (Second Floor) ' },
        { src: '../../images/aboutcarousel/22.jpg', caption: 'Reading Zone  (Second Floor) ' },
        { src: '../../images/aboutcarousel/23.jpg', caption: 'Reading Zone  (Second Floor) ' },
        { src: '../../images/aboutcarousel/24.jpg', caption: 'E-Library  (Second Floor) ' },
        { src: '../../images/aboutcarousel/25.jpg', caption: 'E-Library  (Second Floor) ' },
      ];
    function createImageElement(src, caption) {
        const img = document.createElement("img");
        img.src = src;

        const captionElement = document.createElement("div");
        captionElement.className = "about-carousel-caption";
        captionElement.textContent = caption;

        const container = document.createElement("div");
        container.className = "about-carousel-container";
        container.appendChild(img);
        container.appendChild(captionElement);

        return container;
    }

    function showImage(index) {
        carousel.innerHTML = "";
        const container = createImageElement(images[index].src, images[index].caption);
        carousel.appendChild(container);

        // Force reflow to restart the CSS animation
        container.querySelector("img").offsetHeight;
        container.querySelector("img").style.opacity = 1;
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    document.getElementById("about-next").addEventListener("click", nextImage);
    document.getElementById("about-prev").addEventListener("click", prevImage);

    setInterval(nextImage, 3000); // Change image every 3 seconds

    // Initial display
    showImage(currentIndex);
})();
