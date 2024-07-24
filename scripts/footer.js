const quick_links = [
  {
    id: 0,
    title: "About",
    link: "",
  },
  {
    id: 1,
    title: "FAQs",
    link: "",
  },
  {
    id: 2,
    title: "Downloads",
    link: "",
  },
  {
    id: 3,
    title: "Institute Website",
    link: "",
  },
  {
    id: 4,
    title: "Contact",
    link: "",
  },
];

const useful_links = [
  {
    id: 0,
    title: "Online Catalogue",
    link: "https://iiserb.ac.in",
  },
  {
    id: 1,
    title: "E-Resources",
    link: "https://iiserb.ac.in",
  },
  {
    id: 2,
    title: "Research Publications",
    link: "https://iiserb.ac.in",
  },
  {
    id: 3,
    title: "Institutional Repository",
    link: "https://iiserb.ac.in",
  },
  {
    id: 4,
    title: "Video Resources",
    link: "https://iiserb.ac.in",
  },
];
const services_links = [
  {
    id: 0,
    title: "OPAC/Book Searching",
    link: "https://iiserb.ac.in",
  },
  {
    id: 1,
    title: "Photocopy Library",
    link: "https://iiserb.ac.in",
  },
  {
    id: 2,
    title: "Discussion Room Booking",
    link: "https://iiserb.ac.in",
  },
  {
    id: 3,
    title: "Arrival of New Books",
    link: "https://iiserb.ac.in",
  },
  {
    id: 4,
    title: "Video Guides",
    link: "https://iiserb.ac.in",
  },
];

const contact_us_footer = [
  {
    title: "CONTACT US",
    content: `The Librarian <br /> Central Library, Indian Institute of Science Education & Research Bhopal-462066`,
    phone: "",
    email: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
  },
];

const footer = document.querySelector(".footer");
const quickLinksHTML = quick_links
  .map(
    (quick_link) => `
  <a 
  target="_blank"
  href="${quick_link.link}">
    <li>  
      ${quick_link.title}
    </li>
  </a>
  `
  )
  .join("");

  const usefulLinksHTML = useful_links
  .map(
    (useful_link) => `
  <a 
  target="_blank"
  href="${useful_link.link}">
    <li>  
      ${useful_link.title}
    </li>
  </a>
  `
  )
  .join("");


  const servicesLinksHTML = services_links
  .map(
    (services_link) => `
  <a 
  target="_blank"
  href="${services_link.link}">
    <li>  
      ${services_link.title}
    </li>
  </a>
  `
  )
  .join("");


footer.innerHTML += `
<div
      class="w-full relative bg-zinc-900 grid grid-cols-1 md:grid-cols-4 p-8 md:p-24 gap-6 text-white"
    >
      <div>
      <h1 class="footer_heading">Quick Links</h1>
        <ul class="footer_items">
          ${quickLinksHTML}
        </ul>
      </div>
      <div>
        <h1 class="footer_heading">Useful Links</h1>
        <ul class="footer_items">
          ${usefulLinksHTML}
        </ul>
      </div>
      <div>
        <h1 class="footer_heading">Useful Links</h1>
        <ul class="footer_items">
          ${servicesLinksHTML}
        </ul>
      </div>
      <div>
        <h1 class="footer_heading">Contact Us</h1>
        <ul>
          <li>
            The Librarian<br />
            Central Library,<br />
            Indian Institute of Science Education<br />
            & Research Bhopal-462066<br /><br />
            Phone : +91 755 269 2307<br />
            Email &nbsp; : skpathak@iiserb.ac.in<br /><br />
            <a href="https://x.com/LibraryIISERB">
              <i class="fa-brands fa-x-twitter"></i></a
            >&nbsp;&nbsp;
            <a href="https://www.facebook.com/cliiserb/">
              <i class="fa-brands fa-facebook-f"></i></a
            >&nbsp;&nbsp;
            <!-- <a href="https://x.com/LibraryIISERB">-->
            <i class="fa-brands fa-linkedin-in"></i>
            <!-- </a> -->
            &nbsp;&nbsp;
            <!-- <a href="https://x.com/LibraryIISERB"> -->
            <i class="fa-brands fa-brands fa-youtube"></i>
            <!-- </a> -->
            &nbsp;&nbsp;
            <a
              href="https://play.google.com/store/apps/details?id=android1.example1.com.libraryapp&hl=en_IN"
            >
              <i class="fa-brands fa-google-play"></i></a
            >&nbsp;&nbsp;
          </li>
        </ul>
      </div>
      <div class="absolute w-full py-4 opacity-[0.6] bottom-0 border-t border-white/50 md:col-span-4">
        <p class="text-center text-sm">
          © 2024 Central Library, IISER Bhopal | All Rights Reserved
        </p>
      </div>
    </div>
    `;

// API_KEY = re_fEoX1mpZ_M8CycKG1fhCeGHmtsJu3wnHn
