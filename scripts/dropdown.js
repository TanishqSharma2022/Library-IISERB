const dropDown = [
  {
    id: 0,
    label: "About Us",
    options: [
      {
        label: "About Us",
        link: "https://www.google.com",
      },
      {
        label: "Vision",
        link: "https://www.google.com",
      },
      {
        label: "First 3",
        link: "https://www.google.com",
      },
    ],
  },
  {
    id: 1,
    label: "Second",
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
  dropDownItem.classList.add("bg-black/50");
  dropDownItem.innerHTML = `

        <span class="flex items-center gap-2 justify-between p-2">
        
        
        ${item.label}



        <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
          </svg>
      </span>
      
  
  
      <div class="dropdown-content">
      ${item.options
        .map(
          (option) =>
            `<a href="${option.link}"><p  class="dropdown_option flex items-center p-2 hover:bg-black/70">${option.label}</p></a>`
        )
        .join("")}
        
      </div>











    `;
  dropDownMenu.appendChild(dropDownItem);
});
