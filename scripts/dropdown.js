const dropDown = [
  {
    id: 1,
    label: "Home",
    icon: "../../images/menubar/home.png",

    options: [
      {
        label: "HomePage",
        link: "../../index.html",
      },
    ],
  },
  {
    id: 1,
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
        label: "Library Committee",
        link: "../../dropdown-pages-html/about-us/Committee.html",
      },
      {
        label: "Feedback",
        link: "../../dropdown-pages-html/about-us/feedback.html",
      },
      {
        label: "Usage Stats",
        link: "../../dropdown-pages-html/about-us/e-journals_usage_stats.html",
      },
    ],
  },

  {
    id: 2,
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
        link: "../../dropdown-pages-html/services/Photocopy_facility.html",
      },
      {
        label: "Library Orientation",
        link: "../../dropdown-pages-html/services/library_orientation.html",
      },
      // {
      //   label: "Reserve A Book",
      //   link: "",
      // },
      {
        label: "Recommend A Book",
        link: "",
      },
      {
        label: "Faculty Publication Details",
        link: "https://iiserb.irins.org/",
      },
      {
        label: "Arrival of New Books",
        link: "../../dropdown-pages-html/services/arrival_of_new_books.html",
      },
      {
        label: "Remote Access For Resources - MyLOFT",
        link: "https://app.myloft.xyz/",
      },
      {
        label: "Video Guides",
        link: "",
      },
    
    ],
  },
  {
    id: 3,
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
      // {
      //   label: "Print Periodicals",
      //   link: "../../dropdown-pages-html/print-resources/print_periodical.html",
      // },
    ],
  },
  {
    id: 4,
    label: "Online-Resources",
    icon: "../../images/menubar/device.png",

    options: [
      {
        label: "Institutional Repository",
        link: "http://idr.iiserb.ac.in:8080/jspui/",
      },
      {
        label: "Subscribed Archives of e-Resources",
        link: "../../dropdown-pages-html/online-resources/digital_Archives.html",
      },
      {
        label: "Full Text Databases",
        link: "../../dropdown-pages-html/online-resources/full_text_databses.html",
      },
      {
        label: "A-Z List of Text Databases",
        link: "../../dropdown-pages-html/online-resources/e_book_collections.html",
      
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
      // {
      //   label: "Downloaded E-Books",
      //   link: "../../dropdown-pages-html/online-resources/downloaded_e_books.html",
      // },
      // {
      //   label: "Trail Access Detail",
      //   link: "../../dropdown-pages-html/online-resources/trail_accesss_detail.html",
      // },
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
    id: 5,
    label: "Research Support",
    icon: "../../images/menubar/research.png",

    options: [
      {
        label: "About Plagiarism",
        link: "https://www.plagiarism.org/",
      },
      {
        label: "Style Manual",
        link: "../../dropdown-pages-html/research-support/style_manual.html",
      },
      {
        label: "Reference Management Tools",
        link: "../../dropdown-pages-html/research-support/reference_management_tools.html",
      },
      {
        label: "Data Analysis Tools",
        link: "../../dropdown-pages-html/research-support/data_analysis.html",
      },
      {
        label: "Research ID Creation",
        link: "../../dropdown-pages-html/research-support/research_id_creaction.html",
      },
      // {
      //   label: "Request For",
      //   link: "../../dropdown-pages-html/research-support/request_for.html.html",
      // },
      {
        label: "Research Databases",
        link: "../../dropdown-pages-html/research-support/research_database.html",
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

];

var dropDownMobileViewContainer = document.querySelector(".dropdown_mobile_view_container");
var dropDownMobileMenu = document.createElement("div");
dropDownMobileMenu.classList.add("dropdown_mobile_view_option_container");
dropDownMobileViewContainer.appendChild(dropDownMobileMenu)





dropDown.forEach((item, index) => {
  const dropDownItem = document.createElement("div");

  dropDownItem.classList.add("dropdown");  
  // dropDownItem.classList.add("border");  

  dropDownItem.classList.add(`dropdown-${index}`);

  dropDownItem.innerHTML = `
    <span class="flex  shadow-sm hover:border-black border hover:bg-gray-300 transition-all duration-[0.5s] items-center justify-between cursor-pointer  gap-4 " onclick="toggleMobileDropdown(${index})">
      <div class="flex gap-2  items-center">
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
            `<a href="${option.link}" target="_blank">
          <li class="dropdown_option rounded-md flex items-center p-2 hover:underline">${option.label}</li></a>`
        )
        .join("")}
    </div>
  `;
  dropDownMobileMenu.appendChild(dropDownItem);
});

function menubar_toggle() {
  // const menubar = document.querySelector(".dropdown_container");
  dropDownMobileViewContainer.classList.toggle("right-0");
}

function toggleMobileDropdown(index) {
  const dropdownnewitem = document.querySelector(`.dropdown-${index}`);
  dropdownnewitem.classList.toggle("active");
}






var dropdownWebView = document.querySelector('.dropdown_web_view')

dropDown.forEach((item, index) => {
  const dropDownWebItem = document.createElement("div");


  dropDownWebItem.classList.add(`dropdown-web-${index}`);


  dropDownWebItem.innerHTML = `
  <div class="relative inline-block text-left">
  <div>
    <button type="button" class="inline-flex w-full justify-center gap-x-1.5  px-3 py-2 text-sm font-semibold text-white   hover:text-white/50" 
    id="menu-button" 
    aria-expanded="true" 
    aria-haspopup="true" 
    onclick="toggleWebDropdown(${index})">
      ${item.label}
      <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>

  <div class="absolute dropdownWebContent-${index} showHide right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" >
    <div class="py-1" role="none">
       ${item.options
        .map(
          (option) =>
            `
          <a href="${option.link}" target="_blank" class=" hover:bg-gray-200 block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-2">${option.label}</a>
          `
        )
        .join("")}
      
    </div>
  </div>
</div>
  `;


  // dropDownWebItem.innerHTML = `
  //   <span class="flex items-center  justify-between shadow-sm hover:border-black border hover:bg-gray-300 transition-all duration-[1.5s]  cursor-pointer " onclick="toggleWebDropdown(${index})">
  //     <div class="flex items-center text-white  ">
  //       ${item.label}
  //     </div>
       
  //   </span>
  //   <div class="dropdown-content py-2 h-fit rounded-xl text-black bg-white transition-all duration-[1.5s]" id="dropdown-content-${index}">
  //     ${item.options
  //       .map(
  //         (option) =>
  //           `<a href="${option.link}" target="_blank">
  //         <li class="dropdown_option  rounded-md flex  items-center p-2 hover:bg-gray-300">${option.label}</li></a>`
  //       )
  //       .join("")}
  //   </div>
  // `;
  dropdownWebView.appendChild(dropDownWebItem);
});

function toggleWebDropdown(index) {
//  Onclick function for web view drop
var dropDownMenuButton = document.querySelector(`.dropdown-web-${index}`)
var dropDownWebContent = document.querySelector(`.dropdownWebContent-${index}`)

dropDownWebContent.classList.toggle("showHide");


// dropDownMenuButton.addEventListener('click', function(){
//   dropDownWebContent.classList.toggle("hidden");
// })
}

