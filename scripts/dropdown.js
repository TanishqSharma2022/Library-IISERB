const dropDown = [
  {
    id: 0,
    label: "About Us",
    icon: "images/menubar/info-button.png",
    options: [
      {
        label: "About Us",
        link: "https://www.google.com",
      },
      {
        label: "Vision",
        link: "dropdown-pages-html/vission.html",
      },
      {
        label: "First 3",
        link: "https://www.google.com",
      },
    ],
  },
  {
    id: 1,
    label: "Services",
    icon: "images/menubar/customer-support.png",

    options: [
      {
        label: "First 1",
        link: "https://www.google.com",
      },
      {
        label: "First 2",
        link: "https://www.google.com",
      },
      {
        label: "First 3",
        link: "https://www.google.com",
      },
    ],
  },
  {
    id: 2,
    label: "Print Resources",
    icon: "images/menubar/printer.png",

    options: [
      {
        label: "First 1",
        link: "https://www.google.com",
      },
      {
        label: "First 2",
        link: "https://www.google.com",
      },
      {
        label: "First 3",
        link: "https://www.google.com",
      },
    ],
  },
  {
    id: 3,
    label: "E-Resources",
    icon: "images/menubar/device.png",

    options: [
      {
        label: "First 1",
        link: "https://www.google.com",
      },
      {
        label: "First 2",
        link: "https://www.google.com",
      },
      {
        label: "First 3",
        link: "https://www.google.com",
      },
    ],
  },
  {
    id: 4,
    label: "Research Support",
    icon: "images/menubar/research.png",

    options: [
      {
        label: "First 1",
        link: "https://www.google.com",
      },
      {
        label: "First 2",
        link: "https://www.google.com",
      },
      {
        label: "First 3",
        link: "https://www.google.com",
      },
    ],
  },
  {
    id: 5,
    label: "Usage Stats",
    icon: "images/menubar/pie-chart.png",

    options: [
      {
        label: "First 1",
        link: "https://www.google.com",
      },
      {
        label: "First 2",
        link: "https://www.google.com",
      },
      {
        label: "First 3",
        link: "https://www.google.com",
      },
    ],
  },
];

var dropDownMenu = document.querySelector(".dropdown_container");
dropDown.forEach((item) => {
  const dropDownItem = document.createElement("div");
  dropDownItem.classList.add("dropdown");

  dropDownItem.innerHTML = `

        <span class="flex items-center justify-between cursor-pointer gap-4 border-b   " >
        <div class="flex gap-2 items-center">
        <img src="${item.icon}" alt="icon" class="w-5 h-5" />
        ${item.label}
</div>


        <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
          </svg>
      </span>
      
  
  
      <div class="dropdown-content   p-3">
      ${item.options
        .map(
          (option) =>
            `<a href="${option.link}"><p  class="dropdown_option rounded-md flex items-center p-2 hover:underline ">${option.label}</p></a>`
        )
        .join("")}
        
      </div>











    `;
  dropDownMenu.appendChild(dropDownItem);
});




function menubar_toggle(){
  const menubar = document.querySelector('.dropdown_container');
  const toggle_btn = document.querySelector('.ham_menu');

  menubar.classList.toggle('right-0');
}