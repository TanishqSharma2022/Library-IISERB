document.addEventListener('DOMContentLoaded', () => {
    const testimonials = [
      {
        message: "This is a review message about the library from Student 1. It's detailed and informative.",
        imgSrc: "../images/library/passport photo/client2-1.png",
        name: "Student Name 1",
        batch: "Batch 2021"
      },
      {
        message: "This is a review message about the library from Student 2. It's detailed and informative.",
        imgSrc: "../images/library/passport photo/client2-1.png",
        name: "Student Name 2",
        batch: "Batch 2022"
      },
      {
        message: "This is a review message about the library from Student 3. It's detailed and informative.",
        imgSrc: "../images/library/passport photo/client2-1.png",
        name: "Student Name 3",
        batch: "Batch 2023"
      },
      {
        message: "This is a review message about the library from Student 4. It's detailed and informative.",
        imgSrc: "../images/library/passport photo/client2-1.png",
        name: "Student Name 4",
        batch: "Batch 2024"
      }
    ];
  
    const slider = document.getElementById('testimonial-slider');
  
    testimonials.forEach(testimonial => {
      const testimonialSlide = document.createElement('div');
      testimonialSlide.className = 'testimonial-slide bg-white rounded-lg shadow-lg p-16 flex-none w-full md:w-1/3 relative ml-2 mr-2';
      testimonialSlide.innerHTML = `
        <p class="text-gray-800 mb-12">${testimonial.message}</p>
        <div class="absolute bottom-4 right-4 flex items-center">
          <img src="${testimonial.imgSrc}" alt="${testimonial.name}" class="w-12 h-12 object-cover rounded-full mr-2">
          <div class="text-left">
            <p class="text-sm font-semibold pr-4">${testimonial.name}</p>
            <p class="text-xs text-gray-600 pr-4">${testimonial.batch}</p>
          </div>
        </div>
      `;
      slider.appendChild(testimonialSlide);
    });
  
    const slides = slider.querySelectorAll('.testimonial-slide');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let index = 0;
  
    const updateSlider = () => {
      const slideWidth = slides[0].clientWidth;
      slider.style.transform = `translateX(-${index * slideWidth}px)`;
    };
  
    prevButton.addEventListener('click', () => {
      if (index > 0) {
        index--;
      } else {
        index = slides.length - 1;
      }
      updateSlider();
    });
  
    nextButton.addEventListener('click', () => {
      if (index < slides.length - 1) {
        index++;
      } else {
        index = 0;
      }
      updateSlider();
    });
  
    window.addEventListener('resize', updateSlider);
  
    // Auto-slide functionality
    setInterval(() => {
      if (index < slides.length - 1) {
        index++;
      } else {
        index = 0;
      }
      updateSlider();
    }, 30000);
  });
  