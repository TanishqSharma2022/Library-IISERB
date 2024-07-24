document.addEventListener('DOMContentLoaded', function() {
    const footerContainer = document.getElementById('footer-container');

    const footerHTML = `
        <div class="w-full bg-zinc-800 grid grid-cols-1 md:grid-cols-4 p-12 gap-6 text-white">
            <div>
        
                <h1 class="footer_heading">Quick Links</h1>
                <ul class="footer_items">
                    <a href="dropdown-pages-html/about-us/library-timings.html" target="_blank">
                        <li>Discussion Room Booking<i class="fa-arrow-right fa-solid"></i></li>
                    </a>
                    <a href="dropdown-pages-html/about-us/library-rules.html" target="_blank">
                        <li>Book Requisition Form<i class="fa-arrow-right fa-solid"></i></li>
                    </a>
                    <a href="dropdown-pages-html/about-us/feedback.html" target="_blank">
                        <li>Give us a feedback<i class="fa-arrow-right fa-solid"></i></li>
                    </a>
                    <a href="dropdown-pages-html/online-resources/e_book_collections.html" target="_blank">
                        <li>A-Z Library <i class="fa-arrow-right fa-solid"></i></li>
                    </a>
                    <a href="dropdown-pages-html/online-resources/video_resources.html" target="_blank">
                        <li>Library Tour <i class="fa-arrow-right fa-solid"></i></li>
                    </a>
                </ul>
            </div>
            <div>
                <h1 class="footer_heading">Quick Links</h1>
                <ul class="footer_items">
                    <a href="dropdown-pages-html/about-us/library-timings.html" target="_blank">
                        <li>Library Timings <i class="fa-arrow-right fa-solid"></i></li>
                    </a>
                    <a href="dropdown-pages-html/about-us/library-rules.html" target="_blank">
                        <li>Library Rules <i class="fa-arrow-right fa-solid"></i></li>
                    </a>
                    <a href="dropdown-pages-html/about-us/feedback.html" target="_blank">
                        <li>Give us a feedback<i class="fa-arrow-right fa-solid"></i></li>
                    </a>
                    <a href="dropdown-pages-html/online-resources/e_book_collections.html" target="_blank">
                        <li>A-Z Library <i class="fa-arrow-right fa-solid"></i></li>
                    </a>
                    <a href="dropdown-pages-html/online-resources/video_resources.html" target="_blank">
                        <li>Library Tour <i class="fa-arrow-right fa-solid"></i></li>
                    </a>
                </ul>
            </div>
            <div>
                <h1 class="footer_heading">Quick Links</h1>
                <ul class="footer_items">
                    <a href="dropdown-pages-html/about-us/library-timings.html" target="_blank">
                        <li>Library Timings <i class="fa-arrow-right fa-solid"></i></li>
                    </a>
                    <a href="dropdown-pages-html/about-us/library-rules.html" target="_blank">
                        <li>Library Rules <i class="fa-arrow-right fa-solid"></i></li>
                    </a>
                    <a href="dropdown-pages-html/about-us/faq.html" target="_blank">
                        <li>FAQs<i class="fa-arrow-right fa-solid"></i></li>
                    </a>
                    <a href="dropdown-pages-html/online-resources/e_book_collections.html" target="_blank">
                        <li>A-Z Library <i class="fa-arrow-right fa-solid"></i></li>
                    </a>
                    <a href="dropdown-pages-html/online-resources/video_resources.html" target="_blank">
                        <li>Library Tour <i class="fa-arrow-right fa-solid"></i></li>
                    </a>
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
                        <a href="https://x.com/LibraryIISERB"><i class="fa-brands fa-x-twitter"></i></a>&nbsp;&nbsp;
                        <a href="https://www.facebook.com/cliiserb/"><i class="fa-brands fa-facebook-f"></i></a>&nbsp;&nbsp;
                        <i class="fa-brands fa-linkedin-in"></i>&nbsp;&nbsp;
                        <i class="fa-brands fa-youtube"></i>&nbsp;&nbsp;
                        <a href="https://play.google.com/store/apps/details?id=android1.example1.com.libraryapp&hl=en_IN">
                            <i class="fa-brands fa-google-play"></i></a>&nbsp;&nbsp;
                    </li>
                </ul>
            </div>
            <div class="md:col-span-4">
                <p class="text-center">
                    © 2024 Central Library, IISER Bhopal | All Rights Reserved
                </p>
            </div>
        </div>
    `;

    footerContainer.innerHTML = footerHTML;
});

// const about_footer = [
//     {
//         title: "About IISERB",
//         content: `Welcome to Central Library, IISER Bhopal, a hub of knowledge within the campus, boasting a diverse collection of
//         over 10,000 books and journals spanning the spectrum of Basic Sciences and related disciplines. Catering to the
//         academic needs of BS-MS and Ph.D. students, our repository includes textbooks, research materials, and enriching
//         reads across Biological Sciences, Chemistry, Earth and Environmental Sciences, Mathematics, Physics, Humanities,
//         and Social Sciences. Dive into our curated assortment featuring documents in Computer Science, History of
//         Science, light reading materials, fiction, encyclopedias, dictionaries, magazines, and more. Committed to
//         facilitating seamless access, our library offers online databases, research journals, and modern amenities,
//         ensuring a conducive environment for learning and exploration.`
//     }
// ]

// const useful_links_footer = [
//     {
//         id: 0,
//         title: "IISER Bhopal",
//         link: "https://iiserb.ac.in"
//     },
//     {
//         id: 1,
//         title: "IISER Bhopal",
//         link: "https://iiserb.ac.in"
//     },
//     {
//         id: 2,
//         title: "IISER Bhopal",
//         link: "https://iiserb.ac.in"
//     },
//     {
//         id: 3,
//         title: "IISER Bhopal",
//         link: "https://iiserb.ac.in"
//     },
//     {
//         id: 4,
//         title: "IISER Bhopal",
//         link: "https://iiserb.ac.in"
//     },
// ]

// const contact_us_footer = [
//     {
//         title: "CONTACT US",
//         content: `The Librarian <br /> Central Library, Indian Institute of Science Education & Research Bhopal-462066`
//         ,phone: "",
//         email: "",
//         twitter: "",
//         facebook: "",
//         linkedin: "",
//         youtube: ""
//     }
// ]



// // API_KEY = re_fEoX1mpZ_M8CycKG1fhCeGHmtsJu3wnHn

