document.addEventListener("DOMContentLoaded", function () {
  var newsContainer = document.getElementById("news-container");
  var newsData = [
    {
      text: "Library website will inaugurated on 5th Sepetember 2024.",
      link: "#",
      icon: "➤",
    },
    {
      text: "Library Orientation Program for 24 Batch will be held very soon.",
      link: "#",
      icon: "➤",
    },
    {
      text: "IRINS Project will be launched on 5th Sepetember 2024 at IISER Bhopal",
      link: "#",
      icon: "➤",
    },
    {
      text: "MyLOFT (Remote Login Access Software) will be launched on 5th Sepetember 2024 at IISER Bhopal",
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
      html += `<div class="text-sm mt-2" > ${newsData[i].icon}  ${newsData[i].text} </div>`;
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
