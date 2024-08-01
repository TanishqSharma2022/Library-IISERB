const activities = [
  // 1st image
  { 
    src: '../../images/library/activity/1.jpg', 
    alt: 'Activity 1', 
    description: 'Training Session on JoVE Resources on May 27 2024',
    about: 'This session was designed to enhance the knowledge of JoVE resources for better research outcomes.' 
  },
  // 2nd image
  { 
    src: '../../images/library/activity/2.jpg', 
    alt: 'Activity 2', 
    description: 'Springer-Nature Editorial Workshop at L-3, LHC on May 16, 2024', 
    about: 'This session was designed to enhance the knowledge of JoVE resources for better research outcomes.' 
  },
  // 3rd image
  { 
    src: '../../images/library/activity/3.jpg', 
    alt: 'Activity 3', 
    description: 'Training Session on SciFinder on May 08, 2024', 
    about: 'This session was designed to enhance the knowledge of JoVE resources for better research outcomes.' 
  },
  // 4th image
  { 
    src: '../../images/library/activity/4.jpg', 
    alt: 'Activity 4', 
    description: 'Visit of Professor Anand Ranganathan on April 13, 2024', 
    about: 'This session was designed to enhance the knowledge of JoVE resources for better research outcomes.' 
  },
  // 5th image
  { 
    src: '../../images/library/activity/5.jpg', 
    alt: 'Activity 5', 
    description: 'Institute Day Celebration on March 07, 2024', 
    about: 'This session was designed to enhance the knowledge of JoVE resources for better research outcomes.' 
  },
  // 6th image
  { 
    src: '../../images/library/activity/6.jpg', 
    alt: 'Activity 6', 
    description: 'Visit of Prof. Abhay Karandikar, Secretary, Department of Science and Technology (DST), Government of India on Feb 03, 2024', 
    about: 'This session was designed to enhance the knowledge of JoVE resources for better research outcomes.' 
  },
  // 7th image
  { 
    src: '../../images/library/activity/7.jpg', 
    alt: 'Activity 7', 
    description: 'Orientation Program for Ph.D. Students (December 23 batch) on January 13, 2024', 
    about: 'This session was designed to enhance the knowledge of JoVE resources for better research outcomes.' 
  },
  // 8th image
  { 
    src: '../../images/library/activity/8.jpg', 
    alt: 'Activity 8', 
    description: 'Sagar Public School Bhopal Librarians Training Session on Jan 24, 2024', 
    about: 'This session was designed to enhance the knowledge of JoVE resources for better research outcomes.' 
  },
  // 9th image
  { 
    src: '../../images/library/activity/9.jpg', 
    alt: 'Activity 9', 
    description: 'Visit of Library Science Students from Makhanlal Chaturvedi University on 24/12/2023', 
    about: 'This session was designed to enhance the knowledge of JoVE resources for better research outcomes.' 
  },
  // 10th image
  { 
    src: '../../images/library/activity/10.jpg', 
    alt: 'Activity 10', 
    description: 'Outreach Students', 
    about: 'This session was designed to enhance the knowledge of JoVE resources for better research outcomes.' 
  },
  // 11th image
  { 
    src: '../../images/library/activity/11.jpg', 
    alt: 'Activity 11', 
    description: 'User training session on JoVE on Oct 11, 2023', 
    about: 'This session was designed to enhance the knowledge of JoVE resources for better research outcomes.' 
  },
  // 12th image
  { 
    src: '../../images/library/activity/12.jpg', 
    alt: 'Activity 12', 
    description: 'Library Orientation Session for BS/BS-MS first year Students on Sept. 10, 2023 @ IISERB', 
    about: 'This session was designed to enhance the knowledge of JoVE resources for better research outcomes.' 
  },
  // 13th image
  { 
    src: '../../images/library/activity/13.jpg', 
    alt: 'Activity 13', 
    description: '“Wiley” Author Workshop on (Sep 08, 2023)', 
    about: 'This session was designed to enhance the knowledge of JoVE resources for better research outcomes.' 
  },
  // 14th image
  { 
    src: '../../images/library/activity/14.jpg', 
    alt: 'Activity 14', 
    description: 'IISER Bhopal: Orientation Session for Newly Joined BS and BSMS Students on Aug 27, 2023', 
    about: 'This session was designed to enhance the knowledge of JoVE resources for better research outcomes.' 
  },
  // 15th image
  { 
    src: '../../images/library/activity/15.jpg', 
    alt: 'Activity 15', 
    description: 'Library orientation class on “Web of Science and EndNote” (November 01, 2019)', 
    about: 'This session was designed to enhance the knowledge of JoVE resources for better research outcomes.' 
  },
  // 16th image
  { 
    src: '../../images/library/activity/16.jpg', 
    alt: 'Activity 16', 
    description: 'Library Workshop on “Science of Synthesis” (September 05, 2019)', 
    about: 'This session was designed to enhance the knowledge of JoVE resources for better research outcomes.' 
  },
  // 17th image
  { 
    src: '../../images/library/activity/17.jpg', 
    alt: 'Activity 17', 
    description: 'Library orientation programme on “Mendeley: Reference Management” (August 28, 2019)', 
    about: 'This session was designed to enhance the knowledge of JoVE resources for better research outcomes.' 
  },
  // 18th image
  { 
    src: '../../images/library/activity/18.jpg', 
    alt: 'Activity 18', 
    description: 'Library orientation programme on “IEEE-Database” (MAY 16, 2019)', 
    about: 'This session was designed to enhance the knowledge of JoVE resources for better research outcomes.' 
  },
  // 19th image
  { 
    src: '../../images/library/activity/19.jpg', 
    alt: 'Activity 19', 
    description: 'Library orientation class on “SciFinder” (FEB 18, 2019)', 
    about: 'This session was designed to enhance the knowledge of JoVE resources for better research outcomes.' 
  },
  // 20th image
  { 
    src: '../../images/library/activity/20.jpg', 
    alt: 'Activity 20', 
    description: 'Springer Nature Author Workshop (Oct 25, 2018)', 
    about: 'This session was designed to enhance the knowledge of JoVE resources for better research outcomes.' 
  }
];

function generateCarouselSlides(activities) {
  const track = document.querySelector('.carousel-track');
  activities.forEach(activity => {
      const slide = document.createElement('div');
      slide.className = 'carousel-slide p-2 ';
      slide.innerHTML = `
          <img src="${activity.src}" alt="${activity.alt}" class="w-full h-48 object-cover rounded-lg cursor-pointer" />
          <p class="carousel-description font-semibold">${activity.description}</p>
      `;
      slide.querySelector('img').addEventListener('click', () => {
          openBlogPage(activity.description, activity.description);
      });
      track.appendChild(slide);
  });
}

function openBlogPage(title, description) {
  const url = `../../dropdown/about-us/blog.html?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`;
  window.open(url, '_blank');
}

generateCarouselSlides(activities);

const mainCarousel = (function() {
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(document.querySelectorAll('.carousel-slide'));
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  let currentIndex = 0;

  function updateCarousel() {
      const slideWidth = slides[0].getBoundingClientRect().width;
      track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  function showNextSlide() {
      if (currentIndex < slides.length - 3) {
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
      if (currentIndex < slides.length - 1) {
          currentIndex++;
          updateCarousel();
      }
  });

  window.addEventListener('resize', updateCarousel);
  setInterval(showNextSlide, 5000);
})();

function generateCarouselSlides(activities) {
  const track = document.querySelector('.carousel-track');
  activities.forEach(activity => {
      const slide = document.createElement('div');
      slide.className = 'carousel-slide p-2 ';
      slide.innerHTML = `
          <img src="${activity.src}" alt="${activity.alt}" class="w-full h-48 object-cover rounded-lg cursor-pointer" />
          <p class="carousel-description font-semibold">${activity.description}</p>
      `;
      slide.querySelector('img').addEventListener('click', () => {
          openBlogPage(activity.src, activity.description, activity.about);
      });
      track.appendChild(slide);
  });
}

function openBlogPage(src, title, description, about) {
  console.log('Title:', title);
  console.log('Description:', description);
  console.log('About:', about);
  const url = `../../dropdown/about-us/blog.html?src=${encodeURIComponent(src)}&title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}&about=${encodeURIComponent(about)}`;
  window.open(url, '_blank');
}


generateCarouselSlides(activities);
