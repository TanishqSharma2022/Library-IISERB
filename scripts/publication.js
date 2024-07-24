document.addEventListener("DOMContentLoaded", function() {
    var publicationContainer = document.getElementById('publication-container');
    var publicationData = [
      {
        text: "Library will be closed on May 31st for maintenance.Library will be closed on May 31st for maintenance.",
        link: "#",
        icon: "📄"
      },
      {
        text: "Join us for a special storytime session this Saturday at 10 AM.",
        link: "#",
        icon: "📄"
      },
      {
        text: "Reminder: Please return overdue books to avoid fines.",
        link: "#",
        icon: "📄"
      },
      {
        text: "Library's website now has a new online reservation system for study rooms.",
        link: "#",
        icon: "📄"
      },
      {
        text: "Author visit event scheduled for next month. Stay tuned for details!",
        link: "#",
        icon: "📄"
      },
      {
        text: "Library's summer reading program starts on June 1st. Register now!",
        link: "#",
        icon: "📄"
      },
      {
        text: "Temporary changes to library hours during the upcoming holidays.",
        link: "#",
        icon: "📄"
      },
      {
        text: "Library's summer reading program starts on June 1st. Register now!",
        link: "#",
        icon: "📄"
      },
      {
        text: "Temporary changes to library hours during the upcoming holidays.",
        link: "#",
        icon: "📄"
      },
      {
        text: "Library's summer reading program starts on June 1st. Register now!",
        link: "#",
        icon: "📄"
      },
      {
        text: "Temporary changes to library hours during the upcoming holidays.",
        link: "#",
        icon: "📄"
      }
    ];
  
    publicationData = publicationData.slice(0, 12);
    
    var currentIndex = 0;
    var interval = 10000; // milliseconds
  
    function displayPublication() {
      var html = '';
      for (var i = 0; i < publicationData.length; i++) {
        html += `<div class="publication-item" onclick="window.location.href='${publicationData[i].link}'">  ${publicationData[i].icon}  ${publicationData[i].text} </div>`;
      }
      publicationContainer.innerHTML = html;
  
      // Reset animation for each publication item
      var publicationItems = publicationContainer.querySelectorAll('.publication-item');
      publicationItems.forEach(function(item, index) {
        item.style.animation = 'none';
        void item.offsetHeight; // Trigger reflow
        item.style.animation = `publicationAnimation 2s ease ${index * 0.2}s forwards`; // Delay based on index
      });
    }
  
    // Initial display
    displayPublication();
  
    // Periodically update publication
    setInterval(displayPublication, interval);
  });
  