const testimonials = [
  {
    photo: '../../images/library/passport photo/client2-1.png',
    name: 'Student 1',
    testimonial: 'This is a great library resource that helped me a lot in my studies.',
    link: 'http://example.com/student1',
    batch: 'Batch A'
  },
  {
    photo: '../../images/library/passport photo/client2-1.png',
    name: 'Student 2',
    testimonial: 'The workshops were very informative and well-organized.',
    link: 'http://example.com/student2',
    batch: 'Batch B'
  },
  {
    photo: '../../images/library/passport photo/client2-1.png',
    name: 'Student 3',
    testimonial: 'I learned so much from the training sessions.',
    link: 'http://example.com/student3',
    batch: 'Batch C'
  },
  {
    photo: '../../images/library/passport photo/client2-1.png',
    name: 'Student 4',
    testimonial: 'This is a great library resource that helped me a lot in my studies.',
    link: 'http://example.com/student4',
    batch: 'Batch D'
  },
  {
    photo: '../../images/library/passport photo/client2-1.png',
    name: 'Student 5',
    testimonial: 'The workshops were very informative and well-organized.',
    link: 'http://example.com/student5',
    batch: 'Batch E'
  },
  {
    photo: '../../images/library/passport photo/client2-1.png',
    name: 'Student 6',
    testimonial: 'I learned so much from the training sessions.',
    link: 'http://example.com/student6',
    batch: 'Batch F'
  },
];

function generateTestimonialSlides(testimonials) {
  const testimonialTrack = document.querySelector('.testimonial-carousel-track');
  testimonials.forEach(testimonial => {
    const slide = document.createElement('div');
    slide.className = 'testimonial-carousel-slide p-4';
    slide.innerHTML = `
      <div class="flex flex-col h-full justify-between bg-gray-200 shadow-lg p-4 rounded-lg text-center p-8">
        <p class="testimonial-content mb-8 mt-16 ">${testimonial.testimonial}</p>
        <div class="flex items-center mt-8">
          <a href="${testimonial.link}" class="flex items-center">
            <img src="${testimonial.photo}" alt="${testimonial.name}" class="w-8 h-8 object-cover rounded-full mr-4" />
            <p class="testimonial-name font-semibold">${testimonial.name}</p>
          </a>
          <span class="batch ml-2 text-sm text-gray-500">${testimonial.batch}</span>
        </div>
      </div>
    `;
    testimonialTrack.appendChild(slide);
  });
}

generateTestimonialSlides(testimonials);

const testimonialCarousel = (function() {
  const testimonialTrack = document.querySelector('.testimonial-carousel-track');
  const testimonialSlides = Array.from(document.querySelectorAll('.testimonial-carousel-slide'));
  const prevButton = document.querySelector('.testimonial-prev');
  const nextButton = document.querySelector('.testimonial-next');
  let currentIndex = 0;

  function updateCarousel() {
    const slideWidth = testimonialTrack.clientWidth / 3; // Display 3 testimonials at a time
    testimonialSlides.forEach(slide => {
      slide.style.minWidth = `${slideWidth}px`;
    });
    testimonialTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  function showNextSlide() {
    if (currentIndex < testimonialSlides.length - 3) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  }

  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  nextButton.addEventListener('click', () => {
    if (currentIndex < testimonialSlides.length - 3) {
      currentIndex++;
      updateCarousel();
    }
  });

  window.addEventListener('resize', updateCarousel);
  setInterval(showNextSlide, 3000);

  updateCarousel(); // Initialize carousel position
})();
