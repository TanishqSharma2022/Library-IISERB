  const dropDown = [
    {
      id: 0,
      label: "Home",
      icon: "../../images/menubar/home.png",
      options: null,
    },
    {
      id: 1,
      label: "About Us",
      icon: "../../../../images/menubar/info-button.png",
      options: [
        {
          label: "About Us",
          link: "../../dropdown/about-us/about-us.html",
        },
        {
          label: "Vision & Mission",
          link: "../../dropdown/about-us/vission-mission.html",
        },
        {
          label: "Library Team",
          link: "../../dropdown/about-us/Library-team.html",
        },
        {
          label: "Library Timings",
          link: "../../dropdown/about-us/library-timings.html",
        },
        {
          label: "Library Rules",
          link: "../../dropdown/about-us/library-rules.html",
        },
        {
          label: "Library Advisory Committee",
          link: "../../dropdown/about-us/Committee.html",
        },
        {
          label: "FAQs",
          link: "../../dropdown/about-us/faq.html",
        }
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
          link: "../../dropdown/services/Borrowing_facilities.html",
        },
        {
          label: "Discussion Room Booking",
          link: "https://web.iiserb.ac.in/crbs/index.php",
        },
        {
          label: "Inter Library Loan",
          link: "../../dropdown/services/Inter_library_loan.html",
        },
        {
          label: "Photocopy Facility",
          link: "../../dropdown/services/Photocopy_facility.html",
        },
        {
          label: "Library Orientation",
          link: "../../dropdown/services/library_orientation.html",
        },
        {
          label: "Recommend A Book",
          link: "Faculty_Book_Recommendation_Form.pdf",
        },
        {
          label: "Faculty Publication Details",
          link: "https://iiserb.irins.org/",
        },
        {
          label: "Arrival of New Books",
          link: "../../dropdown/services/arrival_of_new_books.html",
        },
        {
          label: "MyLOFT - Remote Login Access",
          link: "https://app.myloft.xyz/",
        },
        {
          label: "Video Guides",
          link: "../../dropdown/services/video_guides.html",
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
          label: "List of Archives of Subscribed E-Resources",
          link: "IISERB_Archive_Collection.pdf",
        },
        {
          label: "Full Text Databases",
          link: "../../dropdown/online-resources/full_text_databses.html",
        },
        {
          label: "A-Z List of Subscribed E-Resources",
          link: "../../dropdown/online-resources/az_list_of_subs_e_resources.html",
        },
        {
          label: "Biblographic Resources",
          link: "../../dropdown/online-resources/bibliographic_resources.html",
        },
        {
          label: "Theses & Dissertations",
          link: "../../dropdown/online-resources/thesis_database.html",
        },
        {
          label: "Video Resources",
          link: "../../dropdown/services/video_guides.html",
        },
        {
          label: "CD-ROM Database",
          link: "../../dropdown/online-resources/cd_rom_database.html",
        },
        {
          label: "Open Educational Resources",
          link: "../../dropdown/online-resources/open_access_resources.html",
        },
        {
          label: "Open Textbook Library",
          link: "../../dropdown/online-resources/open_textbooks.html",
        },
        {
          label: "E-Resource Usage Policy",
          link: "../../dropdown/online-resources/e-resources_usage_policy.html",
        },
      ],
    },
    {
      id: 4,
      label: "Research Support",
      icon: "../../images/menubar/research.png",

      options: [
        {
          label: "About Turnitin",
          link: "https://in.turnitin.com/",
        },
        {
          label: "Reference Management Tools",
          link: "../../dropdown/research-support/reference_management_tools.html",
        },
        {
          label: "Data Analysis Tools",
          link: "../../dropdown/research-support/data_analysis.html",
        },
        {
          label: "Research ID Creation",
          link: "../../dropdown/research-support/research_id_creaction.html",
        },
        {
          label: "Grammarly",
          link: "https://www.grammarly.com/",
        },
        {
          label: "QuillBot",
          link: "https://quillbot.com/",
        },
      ],
    },
  ];

  var dropDownMobileViewContainer = document.querySelector(
    ".dropdown_mobile_view_container"
  );
  var dropDownMobileMenu = document.createElement("div");
  dropDownMobileMenu.classList.add("dropdown_mobile_view_option_container");
  dropDownMobileViewContainer.appendChild(dropDownMobileMenu);

  dropDown.forEach((item, index) => {
    const dropDownItem = document.createElement("div");

    dropDownItem.classList.add("dropdown");
    // dropDownItem.classList.add("border");

    dropDownItem.classList.add(`dropdown-${index}`);

    dropDownItem.innerHTML = `
      <span class="flex z-[99999] shadow-sm py-4  w-full border-b border-zinc-400 hover:bg-gray-300 items-center justify-between cursor-pointer  gap-4 " onclick="toggleMobileDropdown(${index})">
        <div class="flex gap-2  items-center text-xl ">
          <img src="${item.icon}" alt="icon" class="w-5 h-5" />
          ${item.label}
        </div>
        <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg>
      </span>
      <div class="dropdown-content " id="dropdown-content-${index}">
        ${item.options !== null ? item.options
          .map(
            (option) =>
              `<a href="${option.link}" target="_blank">
            <li class="dropdown_option rounded-md flex items-center p-2 hover:underline">
            ${option.label}</li></a>`
          )
          .join("")
        : (``)
        }
      </div>
    `;
    dropDownMobileMenu.appendChild(dropDownItem);
  });

  function menubar_toggle() {
    // const menubar = document.querySelector(".dropdown_container");
    dropDownMobileViewContainer.classList.toggle("top-0");
  }

  function toggleMobileDropdown(index) {
    const dropdownnewitem = document.querySelector(`.dropdown-${index}`);
    dropdownnewitem.classList.toggle("active");
  }

  var dropdownWebView = document.querySelector(".dropdown_web_view");

  dropDown.forEach((item, index) => {
    const dropDownWebItem = document.createElement("div");

    dropDownWebItem.classList.add(`dropdown-web-${index}`);

    dropDownWebItem.innerHTML = `
    <div class="relative inline-block text-left group">
    <div>
    ${
      item.options === null
        ? `
      <button type="button" class="inline-flex w-full justify-center gap-x-1.5  px-3 py-2 text-sm font-semibold text-white   hover:text-white/50" 
      id="menu-button" 
      aria-expanded="true" 
      aria-haspopup="true">
      <a href="/">${item.label}</a>
      </button>
      
      `
        : `
      <button type="button" class=" inline-flex w-full justify-center gap-x-1.5  px-3 py-2 text-sm font-semibold text-white   hover:text-white/50" 
      id="menu-button" 
      aria-expanded="true" 
      aria-haspopup="true" >
      <a>${item.label}</a>
        <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
        </svg>
        </button>
        `
    }  
    </div>
      ${
        item.options !== null ?
        `
        <div class="absolute z-[999999]  dropdownWebContent-${index} hidden w-[250px] group-hover:flex top-0 right-0 mt-9 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" >
          <div class="py-1 " role="none">
            ${
              item.options !== null  &&
              item.options
                .map(
                  (option) =>
                    `
                <a href="${option.link}" target="_blank" class="w-[250px] hover:bg-gray-200 block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-2">
                ${option.label}
                </a>
                `
                )
                .join("")
             } 
            
          </div>
        </div>`
      : ``}
  </div>
    `;

    dropdownWebView.appendChild(dropDownWebItem);
  });
