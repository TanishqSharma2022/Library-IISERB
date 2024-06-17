document.addEventListener("DOMContentLoaded", function() {
    var newsContainer = document.getElementById('news-container');
    var newsData = [
      {
        text: "Library will be closed on May 31st for maintenance.",
        link: "#",
        icon: "➤"
      },
      {
        text: "Join us for a special storytime session this Saturday at 10 AM.",
        link: "#",
        icon: "➤"
      },
      {
        text: "Reminder: Please return overdue books to avoid fines.",
        link: "#",
        icon: "➤"
      },
      {
        text: "Library's website now has a new online reservation system for study rooms.",
        link: "#",
        icon: "➤"
      },
      {
        text: "Author visit event scheduled for next month. Stay tuned for details!",
        link: "#",
        icon: "➤"
      },
      {
        text: "Library's summer reading program starts on June 1st. Register now!",
        link: "#",
        icon: "➤"
      },
      {
        text: "Temporary changes to library hours during the upcoming holidays.",
        link: "#",
        icon: "➤"
      }
    ];


    
    var currentIndex = 0;
    var newsLimit = 10; // Display all news items at once
    var interval = 10000; // milliseconds
  
    function displayNews() {
      var html = '';
      for (var i = 0; i < newsData.length; i++) {
        html += '<div class="news-item" onclick="window.location.href=\'' + newsData[i].link + '\'">' + newsData[i].icon + ' ' + newsData[i].text + '</div>';
      }
      newsContainer.innerHTML = html;
  
      // Reset animation for each news item
      var newsItems = newsContainer.querySelectorAll('.news-item');
      newsItems.forEach(function(item, index) {
        item.style.animation = 'none';
        void item.offsetHeight; // Trigger reflow
        item.style.animation = 'newsAnimation 2s ease ' + (index * 0.2) + 's forwards'; // Delay based on index
      });
    }
  
    // Initial display
    displayNews();
  
    // Periodically update news
    setInterval(displayNews, interval);
  });
