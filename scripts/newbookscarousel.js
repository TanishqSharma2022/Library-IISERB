document.addEventListener('DOMContentLoaded', function() {
  const bookCarouselTrack = document.querySelector('.newbookcarousel-track');
  const prevButton = document.querySelector('.prevbook');
  const nextButton = document.querySelector('.nextbook');
  const books = [
    { img: '../../images/newbook/1.jpg', title: 'Linear algebra', author: 'Stephen H. Friedberg, Arnold J. Insel, Lawrence E. Spence', readingLink: 'https://books.google.com/books/about/Linear_Algebra.html?id=KyB0DAAAQBAJ', about: 'A comprehensive introduction to linear algebra.', publisher: 'Prentice Hall', accessionNumber: '123456', classNumber: 'QA184.2.F75 2020' },
    { img: '../../images/newbook/book_1716358722.jpg', title: 'Book 2', author: 'Author 2', readingLink: 'https://example.com/read/book2', about: 'Details about Book 2.', publisher: 'Publisher 2', accessionNumber: '654321', classNumber: 'QA184.2.B2' },
    { img: '../../images/newbook/3.jpeg', title: 'Concepts of Biology', author: 'Samantha Fowler, Rebecca Roush, James Wise ', readingLink: 'https://www.google.co.in/books/edition/Concepts_of_Biology/sUZRswEACAAJ?hl=en', about: 'A comprehensive introduction to linear algebra.', publisher: 'Prentice Hall', accessionNumber: '123456', classNumber: 'QA184.2.F75 2020' },
    { img: '../../images/newbook/4.jpeg', title: 'Inorganic Chemistry', author: ' Balaram Sahoo, nayak Nimai Charan, samantaray Asutosh, pujapanda Prafulla Kumar ', readingLink: 'https://www.google.co.in/books/edition/Inorganic_Chemistry/8KAemlQzOj8C?hl=en&gbpv=0', about: 'Details about Book 2.', publisher: 'Publisher 2', accessionNumber: '654321', classNumber: 'QA184.2.B2' },
    { img: '../../images/newbook/5.jpeg', title: 'Linear algebra', author: 'Stephen H. Friedberg, Arnold J. Insel, Lawrence E. Spence', readingLink: 'https://books.google.com/books/about/Linear_Algebra.html?id=KyB0DAAAQBAJ', about: 'A comprehensive introduction to linear algebra.', publisher: 'Prentice Hall', accessionNumber: '123456', classNumber: 'QA184.2.F75 2020' },
    { img: '../../images/newbook/6.jpg', title: 'Book 2', author: ' Introduction to Environmental Science', readingLink: 'https://example.com/read/book2', about: 'Details about Book 2.', publisher: 'Publisher 2', accessionNumber: '654321', classNumber: 'QA184.2.B2' },
    { img: '../../images/newbook/1.jpg', title: 'Linear algebra', author: 'Stephen H. Friedberg, Arnold J. Insel, Lawrence E. Spence', readingLink: 'https://books.google.com/books/about/Linear_Algebra.html?id=KyB0DAAAQBAJ', about: 'A comprehensive introduction to linear algebra.', publisher: 'Prentice Hall', accessionNumber: '123456', classNumber: 'QA184.2.F75 2020' },
    { img: '../../images/newbook/book_1716358722.jpg', title: 'Book 2', author: 'Author 2', readingLink: 'https://example.com/read/book2', about: 'Details about Book 2.', publisher: 'Publisher 2', accessionNumber: '654321', classNumber: 'QA184.2.B2' },
    { img: '../../images/newbook/3.jpeg', title: 'Concepts of Biology', author: 'Samantha Fowler, Rebecca Roush, James Wise ', readingLink: 'https://www.google.co.in/books/edition/Concepts_of_Biology/sUZRswEACAAJ?hl=en', about: 'A comprehensive introduction to linear algebra.', publisher: 'Prentice Hall', accessionNumber: '123456', classNumber: 'QA184.2.F75 2020' },
    { img: '../../images/newbook/4.jpeg', title: 'Inorganic Chemistry', author: ' Balaram Sahoo, nayak Nimai Charan, samantaray Asutosh, pujapanda Prafulla Kumar ', readingLink: 'https://www.google.co.in/books/edition/Inorganic_Chemistry/8KAemlQzOj8C?hl=en&gbpv=0', about: 'Details about Book 2.', publisher: 'Publisher 2', accessionNumber: '654321', classNumber: 'QA184.2.B2' },
    { img: '../../images/newbook/5.jpeg', title: 'Linear algebra', author: 'Stephen H. Friedberg, Arnold J. Insel, Lawrence E. Spence', readingLink: 'https://books.google.com/books/about/Linear_Algebra.html?id=KyB0DAAAQBAJ', about: 'A comprehensive introduction to linear algebra.', publisher: 'Prentice Hall', accessionNumber: '123456', classNumber: 'QA184.2.F75 2020' },
    { img: '../../images/newbook/6.jpg', title: 'Book 2', author: ' Introduction to Environmental Science', readingLink: 'https://example.com/read/book2', about: 'Details about Book 2.', publisher: 'Publisher 2', accessionNumber: '654321', classNumber: 'QA184.2.B2' },
    { img: '../../images/newbook/1.jpg', title: 'Linear algebra', author: 'Stephen H. Friedberg, Arnold J. Insel, Lawrence E. Spence', readingLink: 'https://books.google.com/books/about/Linear_Algebra.html?id=KyB0DAAAQBAJ', about: 'A comprehensive introduction to linear algebra.', publisher: 'Prentice Hall', accessionNumber: '123456', classNumber: 'QA184.2.F75 2020' },
    { img: '../../images/newbook/book_1716358722.jpg', title: 'Book 2', author: 'Author 2', readingLink: 'https://example.com/read/book2', about: 'Details about Book 2.', publisher: 'Publisher 2', accessionNumber: '654321', classNumber: 'QA184.2.B2' },
    { img: '../../images/newbook/3.jpeg', title: 'Concepts of Biology', author: 'Samantha Fowler, Rebecca Roush, James Wise ', readingLink: 'https://www.google.co.in/books/edition/Concepts_of_Biology/sUZRswEACAAJ?hl=en', about: 'A comprehensive introduction to linear algebra.', publisher: 'Prentice Hall', accessionNumber: '123456', classNumber: 'QA184.2.F75 2020' },
    { img: '../../images/newbook/4.jpeg', title: 'Inorganic Chemistry', author: ' Balaram Sahoo, nayak Nimai Charan, samantaray Asutosh, pujapanda Prafulla Kumar ', readingLink: 'https://www.google.co.in/books/edition/Inorganic_Chemistry/8KAemlQzOj8C?hl=en&gbpv=0', about: 'Details about Book 2.', publisher: 'Publisher 2', accessionNumber: '654321', classNumber: 'QA184.2.B2' },
    { img: '../../images/newbook/5.jpeg', title: 'Linear algebra', author: 'Stephen H. Friedberg, Arnold J. Insel, Lawrence E. Spence', readingLink: 'https://books.google.com/books/about/Linear_Algebra.html?id=KyB0DAAAQBAJ', about: 'A comprehensive introduction to linear algebra.', publisher: 'Prentice Hall', accessionNumber: '123456', classNumber: 'QA184.2.F75 2020' },
    { img: '../../images/newbook/6.jpg', title: 'Book 2', author: ' Introduction to Environmental Science', readingLink: 'https://example.com/read/book2', about: 'Details about Book 2.', publisher: 'Publisher 2', accessionNumber: '654321', classNumber: 'QA184.2.B2' },
    { img: '../../images/newbook/1.jpg', title: 'Linear algebra', author: 'Stephen H. Friedberg, Arnold J. Insel, Lawrence E. Spence', readingLink: 'https://books.google.com/books/about/Linear_Algebra.html?id=KyB0DAAAQBAJ', about: 'A comprehensive introduction to linear algebra.', publisher: 'Prentice Hall', accessionNumber: '123456', classNumber: 'QA184.2.F75 2020' },
    { img: '../../images/newbook/book_1716358722.jpg', title: 'Book 2', author: 'Author 2', readingLink: 'https://example.com/read/book2', about: 'Details about Book 2.', publisher: 'Publisher 2', accessionNumber: '654321', classNumber: 'QA184.2.B2' },
    { img: '../../images/newbook/3.jpeg', title: 'Concepts of Biology', author: 'Samantha Fowler, Rebecca Roush, James Wise ', readingLink: 'https://www.google.co.in/books/edition/Concepts_of_Biology/sUZRswEACAAJ?hl=en', about: 'A comprehensive introduction to linear algebra.', publisher: 'Prentice Hall', accessionNumber: '123456', classNumber: 'QA184.2.F75 2020' },
    { img: '../../images/newbook/4.jpeg', title: 'Inorganic Chemistry', author: ' Balaram Sahoo, nayak Nimai Charan, samantaray Asutosh, pujapanda Prafulla Kumar ', readingLink: 'https://www.google.co.in/books/edition/Inorganic_Chemistry/8KAemlQzOj8C?hl=en&gbpv=0', about: 'Details about Book 2.', publisher: 'Publisher 2', accessionNumber: '654321', classNumber: 'QA184.2.B2' },
    { img: '../../images/newbook/5.jpeg', title: 'Linear algebra', author: 'Stephen H. Friedberg, Arnold J. Insel, Lawrence E. Spence', readingLink: 'https://books.google.com/books/about/Linear_Algebra.html?id=KyB0DAAAQBAJ', about: 'A comprehensive introduction to linear algebra.', publisher: 'Prentice Hall', accessionNumber: '123456', classNumber: 'QA184.2.F75 2020' },
    { img: '../../images/newbook/6.jpg', title: 'Book 2', author: ' Introduction to Environmental Science', readingLink: 'https://example.com/read/book2', about: 'Details about Book 2.', publisher: 'Publisher 2', accessionNumber: '654321', classNumber: 'QA184.2.B2' },
  ];

  let currentIndex = 0;

  // Function to create book items
  function createBookItems() {
    books.forEach((book) => {
      const bookItem = document.createElement('div');
      bookItem.className = 'book';
      bookItem.innerHTML = `<img src="${book.img}" alt="Book Image" class="w-full h-auto aspect-[3/4] object-cover" />`;
      bookItem.addEventListener('click', () => {
        const queryParams = new URLSearchParams({
          img: book.img,
          title: book.title,
          author: book.author,
          readingLink: book.readingLink,
          about: book.about,
          publisher: book.publisher,
          accessionNumber: book.accessionNumber,
          classNumber: book.classNumber
        }).toString();
        window.location.href = `bookDetails.html?${queryParams}`;
      });
      bookCarouselTrack.appendChild(bookItem);
    });
  }

  // Function to move the carousel
  function moveCarousel() {
    const bookWidth = document.querySelector('.book').offsetWidth;
    const trackWidth = bookCarouselTrack.scrollWidth;
    const visibleWidth = bookCarouselTrack.offsetWidth;
    const maxIndex = Math.ceil(trackWidth / bookWidth) - Math.ceil(visibleWidth / bookWidth);

    bookCarouselTrack.style.transform = `translateX(-${currentIndex * bookWidth}px)`;

    if (currentIndex >= maxIndex) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
  }

  createBookItems();
  moveCarousel();

  // Auto slide every 3 seconds
  let autoSlide = setInterval(moveCarousel, 3000);

  // Previous button event listener
  prevButton.addEventListener('click', () => {
    clearInterval(autoSlide);
    currentIndex = (currentIndex <= 0) ? books.length - 1 : currentIndex - 1;
    moveCarousel();
    autoSlide = setInterval(moveCarousel, 3000);
  });

  // Next button event listener
  nextButton.addEventListener('click', () => {
    clearInterval(autoSlide);
    currentIndex = (currentIndex >= books.length - 1) ? 0 : currentIndex + 1;
    moveCarousel();
    autoSlide = setInterval(moveCarousel, 3000);
  });
});
