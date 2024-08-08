const quick_links = [
  { 
    id: 0,
    title: "Discussion Room Booking ",
    link: "https://web.iiserb.ac.in/crbs/index.php",
  },
  {
    id: 1,
    title: "Forms",
    link: "../../dropdown/services/form.html",
  },
  {
    id: 2,
    title: " FAQs",
    link: "../../dropdown/about-us/faq.html",
  },
  {
    id: 3,
    title: " Library Guide",
    link: "../../Library_Guide.pdf",
  },
  {
    id: 4,
    title: "A-Z (Subscribed E-Resources)",
    link: "../../dropdown/online-resources/az_list_of_subs_e_resources.html",
  },
  {
    id: 5,
    title: " Library Virtual Tour",
    link: "../../dropdown/services/video_guides.html",
  },
];

const useful_links = [
  {
    id: 0,
    title: "Library Timings ",
    link: "../../dropdown/about-us/library-timings.html",
  },
  {
    id: 1,
    title: "Library Rules ",
    link: "../../dropdown/about-us/library-rules.html",
  },
  {
    id: 2,
    title: "Online Catalogue (Web OPAC) ",
    link: "https://webopac.iiserb.ac.in/",
  },
  {
    id: 3,
    title: "Faculty Book Publication",
    link: "https://iiserb.irins.org/",
  },
  {
    id: 4,
    title: "Institutional Digital Repository",
    link: "http://idr.iiserb.ac.in:8080/jspui/",
  },
  {
    id: 5,
    title: "MyLOFT (Remote Access Tool) ",
    link: "https://app.myloft.xyz/",
  },
];

const services_links = [
  {
    id: 0,
    title: "Shodhganga ",
    link: "https://shodhganga.inflibnet.ac.in/",
  },
  {
    id: 1,
    title: "NPTEL ",
    link: "https://nptel.ac.in/",
  },
  {
    id: 2,
    title: "DOAJ",
    link: "https://doaj.org/",
  },
  {
    id: 3,
    title: "arXiv ",
    link: "https://arxiv.org/",
  },
  {
    id: 4,
    title: "NDLI",
    link: "https://ndl.iitkgp.ac.in/",
  },
  {
    id: 5,
    title: "e-PGPathshala ",
    link: "https://epgp.inflibnet.ac.in/",
  },
];

const contact_us_footer = [
  {
    title: "CONTACT US",
    content: `The Librarian <br /> Central Library, Indian Institute of Science Education & Research Bhopal-462066`,
    phone: "+91 755 269 2307",
    email: "skpathak[at]iiserb.ac.in / librarian[at]iiserb.ac.in",
    twitter: "https://x.com/LibraryIISERB",
    facebook: "https://www.facebook.com/cliiserb/",
    linkedin: "#",
    youtube: "#",
    app:"https://play.google.com/store/apps/details?id=android1.example1.com.libraryapp&hl=en_IN",
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

const contactHTML = contact_us_footer
  .map(
    (contact) => `
    <div>
      <h1 class="footer_heading">${contact.title}</h1>
      <ul>
        <li class="media">
          ${contact.content}<br /><br />
          Phone: ${contact.phone}<br />
          Email: ${contact.email}<br /><br />
          ${contact.twitter ? `<a href="${contact.twitter}"><i class="fa-brands fa-x-twitter"></i></a>&nbsp;&nbsp;` : ''}
          ${contact.facebook ? `<a href="${contact.facebook}"><i class="fa-brands fa-facebook-f"></i></a>&nbsp;&nbsp;` : ''}
          ${contact.linkedin ? `<a href="${contact.linkedin}"><i class="fa-brands fa-linkedin-in"></i></a>&nbsp;&nbsp;` : ''}
          ${contact.youtube ? `<a href="${contact.youtube}"><i class="fa-brands fa-youtube"></i></a>&nbsp;&nbsp;` : ''}
          ${contact.app ? `<a href="${contact.app}"><i class="fa-brands fa-google-play"></i></a>&nbsp;&nbsp;` : ''}
        </li>
      </ul>
    </div>
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
      <h1 class="footer_heading">Quick links</h1>
      <ul class="footer_items">
        ${usefulLinksHTML}
      </ul>
    </div>
    <div>
      <h1 class="footer_heading">Quick links</h1>
      <ul class="footer_items">
        ${servicesLinksHTML}
      </ul>
    </div>
    ${contactHTML}
    <div class="md:absolute w-full py-4 opacity-[0.6] bottom-0 border-t border-white/50 md:col-span-4">
      <p class="text-center text-sm">
        © 2024 Central Library, IISER Bhopal | All&nbsp;Rights&nbsp;Reserved
      </p>
      <div class="flex justify-between items-center  ">
      <div class="visitors-counter md:pl-6 text-left flex items-center">
       <i class="fa-solid fa-eye"></i> 
         <span class="ml-2">Visitors Count: <span id="visitors-count">0</span></span>
       </div>
  <div class="developer md:pr-16 text-right flex items-center">
  <i class="fa-solid fa-code"></i>
    <a href="" id="mylink" class="ml-2 text-center text-sm">Developed by</a>
  </div>
</div>

    </div>
  </div>
  <button id="scroll-to-top" class="scroll-to-top rounded-full">↑</button>
  
`;

// Scroll-to-Top Functionality
const scrollToTopButton = document.getElementById("scroll-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", () => {
  try {
    let count = parseInt(localStorage.getItem("visitorsCount"), 10);
    if (isNaN(count)) {
      count = 0;
    }
    count++;
    localStorage.setItem("visitorsCount", count);
    updateVisitorsCount(count);
  } catch (error) {
    console.error("An error occurred while updating the visitors count:", error);
  }
});

function updateVisitorsCount(count) {
  const visitorsCountElement = document.getElementById("visitors-count");
  if (visitorsCountElement) {
    visitorsCountElement.textContent = count;
  } else {
    console.error('Element with id "visitors-count" not found.');
  }
}

// Optional: Function to reset the visitors counter
function resetVisitorsCount() {
  try {
    localStorage.setItem("visitorsCount", 0);
    updateVisitorsCount(0);
  } catch (error) {
    console.error("An error occurred while resetting the visitors count:", error);
  }
}




// when on Server
// document.addEventListener("DOMContentLoaded", async () => {
//   try {
//     const response = await fetch('/visit');
//     if (!response.ok) throw new Error('Network response was not ok');
//     const data = await response.json();
//     document.getElementById("visitors-count").textContent = data.count;
//   } catch (error) {
//     console.error("An error occurred while fetching the visitors count:", error);
//   }
// });
{/* <h1>Visitor Count: <span id="visitors-count">Loading...</span></h1> */}
// models/Visitor.js
// const mongoose = require('mongoose');

// const visitorSchema = new mongoose.Schema({
//   ipAddress: String,
//   visitTime: Date
// });

// module.exports = mongoose.model('Visitor', visitorSchema);



// Server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const Visitor = require('./models/Visitor'); // Assuming you have a Visitor model defined
// const app = express();
// const port = 3000;

// mongoose.connect('mongodb://localhost:27017/visitorCount', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// app.get('/visit', async (req, res) => {
//   try {
//     const visitor = new Visitor({ ipAddress: req.ip, visitTime: new Date() });
//     await visitor.save();
//     const count = await Visitor.countDocuments();
//     res.json({ count });
//   } catch (error) {
//     res.status(500).send('Error saving visitor');
//   }
// });

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html'); // Serve your main page
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });
