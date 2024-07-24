document.addEventListener("DOMContentLoaded", function () {
  var newsContainer = document.getElementById("news-container");
  var newsData = [
    {
      text: "Library Orientation Program for 24 Batch will be held very soon.",
      link: "#",
      icon: "➤",
    },
    {
      text: "IRINS Project will be launched very soon at IISER Bhopal",
      link: "#",
      icon: "➤",
    },
    {
      text: "MyLOFT (Remote Login Access Software) will be launched very soon at IISER Bhopal",
      link: "#",
      icon: "➤",
    },
    {
      text: "Grammarly Training Session will be held very soon.",
      link: "#",
      icon: "➤",
    },
    {
      text: "QuillBot Training Session will be held very soon.",
      link: "#",
      icon: "➤",
    },
  ];

  newsData = newsData.slice(0, 5);

  var currentIndex = 0;
  var newsLimit = 10; // Display all news items at once
  var interval = 10000; // milliseconds

  function displayNews() {
    var html = "";
    for (var i = 0; i < newsData.length; i++) {
      html += `<div class="news-item text-sm mt-2" onclick=window.location.href=${newsData[i].link}>  ${newsData[i].icon}  ${newsData[i].text} </div>`;
    }
    newsContainer.innerHTML = html;

    // Reset animation for each news item
    var newsItems = newsContainer.querySelectorAll(".news-item");
    newsItems.forEach(function (item, index) {
      item.style.animation = "none";
      void item.offsetHeight; // Trigger reflow
      item.style.animation =
        "newsAnimation 2s ease " + index * 0.2 + "s forwards"; // Delay based on index
    });
  }

  // Initial display
  displayNews();

  // Periodically update news
  setInterval(displayNews, interval);
});

document.addEventListener("DOMContentLoaded", function () {
  var researchData = [
    {
      authors: "Mahanta, N.[et al.]",
      title:
        "Late Miocene to Early Pliocene paleoceanographic evolution of the Central South Pacific: A deep-sea benthic foraminiferal perspective",
      journal: "Palaeogeography Palaeoclimatology Palaeoecology",
      volume: "647",
      year: "2024",
      school: "School of Earth, Ocean and Climate Sciences",
      link: "#",
      icon: "➤",
    },
    {
      authors: "Roushan, A., Biswas, S., Chetan.",
      title:
        "Emerging sustainable techniques in metal cutting to reduce the application of metalworking fluids: A review",
      journal:
        "Proceedings of The Institution of Mechanical Engineers Part E-Journal of Process Mechanical Engineering",
      year: "2024",
      school: "School of Mechanical Sciences",
      link: "#",
      icon: "➤",
    },
    {
      authors: "Bahinipati, S. [et al.]",
      title:
        "Study of azimuthal anisotropy of γ(1S) mesons in pPb collisions at √SNN=8.16 TeV",
      journal: "Physics Letters B",
      volume: "850",
      year: "2024",
      school: "School of Basic Sciences",
      link: "#",
      icon: "➤",
    },
    {
      authors: "Panda, S.[et al.]",
      title:
        "Interplay of Competing Magnetic Interactions in Noncentrosymmetric Nd3Te4 for Enhancing the Magnetocaloric Properties",
      journal: "Chemistry of Materials",
      volume: "36 (12)",
      pages: "5986-5995",
      year: "2024",
      school: "School of Basic Sciences",
      link: "#",
      icon: "➤",
    },
    {
      authors: "Choudhuri, D., Zeng, SD.",
      title:
        "Analysis of solution to an elliptic free boundary value problem equipped with a 'bad' data",
      journal: "Applied Mathematics Letters",
      volume: "156",
      year: "2024",
      school: "School of Basic Sciences",
      link: "#",
      icon: "➤",
    },
  ];
  var researchContainer = document.getElementById("research-container");

  function displayResearchPublications() {
    var html = "";
    for (var i = 0; i < researchData.length; i++) {
      html += `<div class="research-item text-sm mt-2" onclick=window.location.href=${researchData[i].link}> 
       ${researchData[i].icon} 
       ${researchData[i].authors} 
        <a class="text-blue-500 hover:underline">${researchData[i].title}</a>  
        </div>`;
    }
    researchContainer.innerHTML = html;

    // Reset animation for each news item
    var researchItems = newsContainer.querySelectorAll(".research-item");
    researchItems.forEach(function (item, index) {
      item.style.animation = "none";
      void item.offsetHeight; // Trigger reflow
      item.style.animation =
        "newsAnimation 2s ease " + index * 0.2 + "s forwards"; // Delay based on index
    });
  }

  // Initial display
  displayResearchPublications();

  // Periodically update news
  setInterval(displayResearchPublications, interval);
});
