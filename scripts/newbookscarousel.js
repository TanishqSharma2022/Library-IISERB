document.addEventListener('DOMContentLoaded', function() {
  const bookCarouselTrack = document.querySelector('.newbookcarousel-track');
  const prevButton = document.querySelector('.prevbook');
  const nextButton = document.querySelector('.nextbook');
  const books = [
    // Book 1
    {
        img: '../../images/newbook/aug1.jpg',
        title: 'Principles of Communications: Systems, Modulation, and Noise',
        author: 'Ziemer, Rodger E ; Tranter, William H.',
        readingLink: 'https://webopac.iiserb.ac.in/cgi-bin/koha/opac-detail.pl?biblionumber=10283',
        about: 'The updated 7th edition of Principles of Communications presents the reader with more in-chapter examples, providing for a more supportive framework for learning.',
        publisher: 'Boston : John Wiley & Sons, 2015',
        subject: 'Telecommunication | Signal theory (Telecommunication)',
        remark: ''
    },
    // Book 2
    {
        img: '../../images/newbook/aug2.jpeg',
        title: 'Deep Learning in Natural Language Processing',
        author: 'Deng, Li [editor.]; Liu, Yang [editor.].',
        readingLink: 'https://webopac.iiserb.ac.in/cgi-bin/koha/opac-detail.pl?biblionumber=10360&query_desc=kw%2Cwrdl%3A%20Deep%20Learning%20in%20Natural%20Language%20Processing',
        about: 'This book reviews the state of the art of deep learning research and its successful applications to major NLP tasks, including speech recognition and understanding, dialogue systems, lexical analysis, parsing, knowledge graphs, machine translation, question answering, sentiment analysis, social computing, and natural language generation from images. Outlining and analyzing various research frontiers of NLP in the deep learning era, it features self-contained, comprehensive chapters written by leading researchers in the field. A glossary of technical terms and commonly used acronyms in the intersection of deep learning and NLP is also provided.',
        publisher: 'Singapore: Springer-Nature, 2018',
        subject: 'Artificial intelligence | Mathematical statistics | Natural language processing (Computer science) | Artificial Intelligence | Natural Language Processing (NLP) | Natural Language Processing (NLP) | Probability and Statistics in Computer Science',
        remark: ''
    },
    // Book 3
    {
        img: '../../images/newbook/aug3.jpg',
        title: 'Time series analysis',
        author: 'Hamilton, James D.',
        readingLink: 'https://webopac.iiserb.ac.in/cgi-bin/koha/opac-detail.pl?biblionumber=10362',
        about: '',
        publisher: 'Princeton, N.J. : Kolkata : Princeton University Press, Levant Books, 2012',
        subject: 'Time-series analysis',
        remark: ''
    },
    // Book 4
    {
        img: '../../images/newbook/aug4.jpeg',
        title: '',
        author: '',
        readingLink: 'https://webopac.iiserb.ac.in/cgi-bin/koha/opac-detail.pl?biblionumber=10385 ',
        about: '',
        publisher: '',
        subject: '',
        remark: ''
    },
    // Book 5
    {
      img: '../../images/newbook/aug5.jpeg',
      title: '',
      author: '',
      readingLink: 'https://webopac.iiserb.ac.in/cgi-bin/koha/opac-detail.pl?biblionumber=10371',
      about: '',
      publisher: '',
      subject: '',
      remark: ''
    },
    // Book 6
    {
        img: '../../images/newbook/aug6.jpeg',
        title: '',
        author: '',
        readingLink: 'https://webopac.iiserb.ac.in/cgi-bin/koha/opac-detail.pl?biblionumber=10372',
        about: '',
        publisher: '',
        subject: '',
        remark: ''
    },
   
    // Book 7
    {
      img: '../../images/newbook/aug7.jpeg',
      title: '',
      author: '',
      readingLink: 'https://webopac.iiserb.ac.in/cgi-bin/koha/opac-detail.pl?biblionumber=10401',
      about: '',
      publisher: '',
      subject: '',
      remark: ''
    },
    // Book 8
    {
      img: '../../images/newbook/aug8.jpeg',
      title: '',
      author: '',
      readingLink: 'https://webopac.iiserb.ac.in/cgi-bin/koha/opac-detail.pl?biblionumber=10364',
      about: '',
      publisher: '',
      subject: '',
      remark: ''
    },
    // Book 9
    {
      img: '../../images/newbook/aug9.jpeg',
      title: '',
      author: '',
      readingLink: 'https://webopac.iiserb.ac.in/cgi-bin/koha/opac-detail.pl?biblionumber=10399',
      about: '',
      publisher: '',
      subject: '',
      remark: ''
    },
    // Book 10
    {
      img: '../../images/newbook/aug10.jpeg',
      title: '',
      author: '',
      readingLink: 'https://webopac.iiserb.ac.in/cgi-bin/koha/opac-detail.pl?biblionumber=10378',
      about: '',
      publisher: '',
      subject: '',
      remark: ''
    },
    // Book 11)
    {
      img: '../../images/newbook/aug11.jpeg',
      title: '',
      author: '',
      readingLink: '',
      about: '',
      publisher: '',
      subject: '',
      remark: ''
    },
    // Book 12
    {
      img: '../../images/newbook/aug12.jpeg',
      title: '',
      author: '',
      readingLink: '',
      about: '',
      publisher: '',
      subject: '',
      remark: ''
    }
];

let currentIndex = 0;

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
        subject: book.subject,
        remark: book.remark,
      }).toString();
      window.location.href = `bookDetails.html?${queryParams}`;
    });
    bookCarouselTrack.appendChild(bookItem);
  });
}

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

let autoSlide = setInterval(moveCarousel, 5000);

prevButton.addEventListener('click', () => {
  clearInterval(autoSlide);
  currentIndex = (currentIndex <= 0) ? books.length - 1 : currentIndex - 1;
  moveCarousel();
  autoSlide = setInterval(moveCarousel, 5000);
});

nextButton.addEventListener('click', () => {
  clearInterval(autoSlide);
  currentIndex = (currentIndex >= books.length - 1) ? 0 : currentIndex + 1;
  moveCarousel();
  autoSlide = setInterval(moveCarousel, 5000);
});
});