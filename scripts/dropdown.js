const dropDown = [
  {
    id: 0,
    label: "About Us",
    icon: "../../../../images/menubar/info-button.png",
    options: [
      {
        label: "About Us",
        link: "../../dropdown-pages-html/about-us/about-us.html",
      },
      {
        label: "Vision & Mission",
        link: "../../dropdown-pages-html/about-us/vission-mission.html",
      },
      {
        label: "Library Team",
        link: "../../dropdown-pages-html/about-us/Library-team.html",
      },
      {
        label: "Library Timings",
        link: "../../dropdown-pages-html/about-us/library-timings.html",
      },
      {
        label: "Library Rules",
        link: "../../dropdown-pages-html/about-us/library-rules.html",
      },
      {
        label: "Committee",
        link: "../../dropdown-pages-html/about-us/library-rules.html",
      },
      {
        label: "Feedback",
        link: "../../dropdown-pages-html/about-us/feedback.html",
      },
    ],
  },
  {
    id: 1,
    label: "Services",
    icon: "../../images/menubar/customer-support.png",

    options: [
      {
        label: "OPAC / Book Searching",
        link: "https://webopac.iiserb.ac.in/",
      },
      {
        label: "Borrowing Facilities",
        link: "../../dropdown-pages-html/services/Borrowing_facilities.html",
      },
      {
        label: "Inter Library Loan",
        link: "../../dropdown-pages-html/services/Inter_library_loan.html",
      },
      {
        label: "Photocopy Facility",
        link: "../../dropdown-pages-html/services/Photocopy_facility.html.",
      },
      {
        label: "Library Orientation",
        link: "../../dropdown-pages-html/services/library_orientation.html",
      },
      {
        label: "Reserve A Book",
        link: "",
      },
      {
        label: "Recommend A Book",
        link: "",
      },
      {
        label: "Faculty Publication Details",
        link: "",
      },
      {
        label: "Arrival of New Books",
        link: "../../dropdown-pages-html/services/arrival_of_new_books.html",
      },
      {
        label: "Remote Access For Resources",
        link: "",
      },
      {
        label: "Video Guides",
        link: "",
      },
      {
        label: "Moodle Services",
        link: "",
      },
    ],
  },
  {
    id: 2,
    label: "Print Resources",
    icon: "../../images/menubar/printer.png",

    options: [
      {
        label: "Print Books",
        link: "../../dropdown-pages-html/print-resources/print_book.html",
      },
      {
        label: "Thesis Database",
        link: "../../dropdown-pages-html/print-resources/thises_database.html",
      },
      {
        label: "Print Periodicals",
        link: "../../dropdown-pages-html/print-resources/print_periodical.html",
      },
    ],
  },
  {
    id: 3,
    label: "Online-Resources",
    icon: "../../images/menubar/device.png",

    options: [
      {
        label: "Institutional Repository",
        link: "http://idr.iiserb.ac.in:8080/jspui/",
      },
      {
        label: "Digital Archives",
        link: "../../dropdown-pages-html/online-resources/digital_Archives.html",
      },
      {
        label: "Full Text Databases",
        link: "../../dropdown-pages-html/online-resources/full_text_databses.html",
      },
      {
        label: "A-Z List of Text Databases",
        link: "../../dropdown-pages-html/online-resources/atozlist.html",
      },
      {
        label: "Biblographic Resources",
        link: "../../dropdown-pages-html/online-resources/bibliographic_resources.html",
      },
      {
        label: "E-Books Collection",
        link: "../../dropdown-pages-html/online-resources/e_book_collections.html",
      },
      {
        label: "Thesis & Dissertations",
        link: "../../dropdown-pages-html/online-resources/thesis_dissertations.html",
      },
      {
        label: "Standards",
        link: "../../dropdown-pages-html/online-resources/standards.html",
        
      },
      {
        label: "Archives",
        link: "../../dropdown-pages-html/online-resources/archives.html",
      },
      {
        label: "Video Resources",
        link: "../../dropdown-pages-html/online-resources/video_resources.html",
      },
      {
        label: "CD-ROM Database",
        link: "../../dropdown-pages-html/online-resources/cd_rom_database.html",
      },
      {
        label: "Downloaded E-Books",
        link: "../../dropdown-pages-html/online-resources/downloaded_e_books.html",
      },
      {
        label: "Trail Access Detail",
        link: "../../dropdown-pages-html/online-resources/trail_accesss_detail.html",
      },
      {
        label: "Open Access Resources",
        link: "../../dropdown-pages-html/online-resources/open_access_resources.html",
      },
      {
        label: "E-Resource Usage Policy",
        link: "../../dropdown-pages-html/online-resources/e-resources_usage_policy.html",
      },
    ],
  },
  {
    id: 4,
    label: "Research Support",
    icon: "../../images/menubar/research.png",

    options: [
      {
        label: "About Plagiarism",
        link: "https://www.plagiarism.org/",
      },
      {
        label: "Style Manual",
        link: "index.html",
      },
      {
        label: "Reference Management Tools",
        link: "index.html",
      },
      {
        label: "Data Analysis Tools",
        link: "index.html",
      },
      {
        label: "Research ID Creation",
        link: "index.html",
      },
      {
        label: "Request For",
        link: "index.html",
      },
      {
        label: "Research Databases",
        link: "index.html",
      },
      {
        label: "Grammarly",
        link: "https://www.grammarly.com/",
      },
      {
        label: "Fellowships & Scholarships",
        link: "https://www.iiserb.ac.in/doaa/scholarship",
      },

    ],
  },
  {
    id: 5,
    label: "Usage Stats",
    icon: "../../images/menubar/pie-chart.png",

    options: [
      {
        label: "E-Jourals Usage Stats",
        link: "",
      },
     
    ],
  },
];

var dropDownMenu = document.querySelector(".dropdown_container");
dropDown.forEach((item, index) => {
  const dropDownItem = document.createElement("div");
  dropDownItem.classList.add("dropdown");

  dropDownItem.innerHTML = `
    <span class="flex items-center justify-between cursor-pointer gap-4 border-b" onclick="toggleDropdown(${index})">
      <div class="flex gap-2 items-center">
        <img src="${item.icon}" alt="icon" class="w-5 h-5" />
        ${item.label}
      </div>
      <svg class="w-2.5 h-2.5 ms-3 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
      </svg>
    </span>
    <div class="dropdown-content p-3" id="dropdown-content-${index}">
      ${item.options
        .map(
          (option) =>
            `<a href="${option.link}" target="_blank"><p class="dropdown_option rounded-md flex items-center p-2 hover:underline">${option.label}</p></a>`
        )
        .join("")}
    </div>
  `;
  dropDownMenu.appendChild(dropDownItem);
});

function menubar_toggle(){
  const menubar = document.querySelector('.dropdown_container');
  menubar.classList.toggle('right-0');
}

function toggleDropdown(index) {
  const dropDownContent = document.getElementById(`dropdown-content-${index}`);
  if (dropDownContent.style.display === 'block') {
    dropDownContent.style.display = 'none';
  } else {
    dropDownContent.style.display = 'block';
  }
}