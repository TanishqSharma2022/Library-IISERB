const url = "http://localhost:3000/api/documents";
const loadingDiv = document.querySelector(".loadingDiv");
const publicationsDiv = document.getElementById("research-publications");
const pageContainer = document.querySelector(".page-number");
const prevButton = document.querySelector(".prev-page");
const nextButton = document.querySelector(".next-page");
const pageInput = document.querySelector(".page-number-input");
const totalRecContainer = document.querySelector(".total_records");

let page = 1;
let db = "WOS";

// Event Listeners
function addEventListeners() {
  nextButton.addEventListener("click", handleNextPage);
  prevButton.addEventListener("click", handlePrevPage);
  pageInput.addEventListener("input", handlePageInputChange);
  document.querySelector(".search-button").addEventListener("click", handleSearchButtonClick);
  document.querySelectorAll("#year-checkboxes input").forEach((checkbox) => {
    checkbox.addEventListener("change", handleYearChange);
  });
  document.querySelectorAll(".db input").forEach((checkbox) => {
    checkbox.addEventListener("change", handleDbChange);
  });
}

 



// Handlers
function handleNextPage() {
  page += 1;
  fetchData();
}

function handlePrevPage() {
  page -= 1;
  fetchData();
}

function handlePageInputChange() {
  const inputPage = parseInt(pageInput.value, 10);
  page = isNaN(inputPage) ? 1 : inputPage;
  updatePageNumber();
}

function handleYearChange() {
  page = 1;
}

function handleDbChange(event) {
  db = event.target.value;
}

function handleSearchButtonClick() {
  if (getSelectedYears() === "") {
    alert("Please select at least one year.");
    return;
  }
  page = 1;
  fetchData();
}




// Utility Functions
function getSelectedYears() {
  return Array.from(document.querySelectorAll("#year-checkboxes input:checked"))
    .map((checkbox) => checkbox.value)
    .join(" OR ");
}

function updatePageNumber() {
  pageContainer.textContent = `Page: ${page}`;
}

function updatePrevButtonState() {
  if (page === 1) {
    prevButton.disabled = true;
    prevButton.style.color = "gray";
  } else {
    prevButton.disabled = false;
    prevButton.style.color = "black";
  }
}

function updateTotalRecords(total) {
  totalRecContainer.textContent = `Total: ${total}`;
}

function renderPublications(data) {
  const totalRecords = data.metadata.total;
  updateTotalRecords(totalRecords);

  if (totalRecords === 0) {
    publicationsDiv.innerHTML = `<h1 class="text-center">No documents found..</h1>`;
  } else {
    const publications = data.hits
      .map((record, index) => {
        const displayAuthors = getDisplayAuthors(record);
        return `
          <div class="text-sm mt-3 mb-3 py-2">
            <h1 class="font-bold text-xl">${index + 1}.</h1>
            <a class="italic">${displayAuthors}</a><br />
            <a target="_blank" href=${record.links.record} class="text-blue-500 hover:underline">
              ${record.title}
            </a>,<br />
            <a class="lowercase capitalize">${record.source.sourceTitle}</a>,
            <a class="lowercase capitalize">${record.source.publishYear}</a>
          </div>
        `;
      })
      .join("");
    publicationsDiv.innerHTML = publications;
  }
}

function getDisplayAuthors(record) {
  if (record.names && record.names.authors && record.names.authors.length > 0) {
    const authors = record.names.authors.map((author) => author.displayName);
    return authors.length > 2
      ? `${authors.slice(0, 2).join(", ")}, et al.`
      : authors.join(", ");
  } else {
    return "No Authors fetched";
  }
}

function fetchData() {
  const query = `${url}?limit=30&db=${db}&page=${page}&year=(${getSelectedYears()})`;
  console.log(query);
  loadingDiv.style.display = "grid";
  updatePrevButtonState();
  updatePageNumber();

  fetch(query)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      renderPublications(data);
      loadingDiv.style.display = "none";
      publicationsDiv.style.display = "block";
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      publicationsDiv.innerHTML = `<p>Error fetching data: ${error.message}</p>`;
      loadingDiv.style.display = "none";
      publicationsDiv.style.display = "block";
    });
}

// Initialize
addEventListeners();
fetchData();
