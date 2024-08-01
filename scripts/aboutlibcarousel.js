
  document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.getElementById("about-carousel");

    let currentIndex = 0;

    const images = [
        { src: '../../images/aboutcarousel/1.jpg', caption: 'Library Help Desk' },
        { src: '../../images/aboutcarousel/2.jpg', caption: 'Browsing Area (Ground Floor)' },
        { src: '../../images/aboutcarousel/3.jpg', caption: 'Browsing Area (Ground Floor)' },
        { src: '../../images/aboutcarousel/4.jpg', caption: 'RFID COMPONENTS (Ground Floor) ' },
        { src: '../../images/aboutcarousel/5.jpg', caption: 'Reading zone (Ground Floor) ' },
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
    
    function showImage(index) {
      carouselContainer.innerHTML = `
      <a href="../../dropdown/about-us/gallery.html">     <div class="carousel-item">
        <img src="${images[index].src}" alt="Carousel Image ${index + 1}" class="w-full object-cover">
          <div class="font-semibold mb-2">${images[index].caption}</div>
        </div></a>
      `;
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    // document.getElementById("about-next").addEventListener("click", nextImage);
    // document.getElementById("about-prev").addEventListener("click", prevImage);
    
  document.getElementById('about-next').addEventListener('click', showNextImage);
  document.getElementById('about-prev').addEventListener('click', showPrevImage);

  // Initialize the carousel with the first image
  showImage(currentIndex);

  // Auto-slide every 5 seconds
  setInterval(showNextImage, 5000);


    // document.getElementById("about-next").classList.add("invisible")
    carousel.addEventListener('mouseover', (event) => {
      document.getElementById("about-next").classList.remove("invisible")
      document.getElementById("about-prev").classList.remove("invisible")
    })
    carousel.addEventListener('mouseleave', (event) => {
      document.getElementById("about-next").classList.add("invisible");
      document.getElementById("about-prev").classList.add("invisible");
    })
    // setInterval(nextImage, 3000); // Change image every 3 seconds

    // Initial display
    showImage(currentIndex);
  })
