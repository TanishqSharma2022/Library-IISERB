let url = "http://localhost:3000/api/documents";
const loadingDiv = document.querySelector(".loadingDiv");
const publicationsDiv = document.getElementById("research-publications");
  
let page = 1;
const pageContainer = document.querySelector(".page-number");
const prevButton = document.querySelector(".prev-page");
const nextButton = document.querySelector(".next-page");
loadingDiv.style.display = "grid";

let db = "WOS"

const total_rec_container = document.querySelector('.total_records')


function getSelectedYears() {
  let selectedYears = Array.from(
    document.querySelectorAll("#year-checkboxes input:checked")
  ).map((checkbox) => checkbox.value);
  return selectedYears.join(" OR ");
}

nextButton.addEventListener("click", () => {
  page += 1;

  fetchData();
});
prevButton.addEventListener("click", () => {
  page -= 1;
  fetchData();
});

function fetchData() {
  loadingDiv.style.display = "grid";

  if (page == 1) {
    prevButton.disabled = true;
    prevButton.style.color = "gray";
  } else {
    prevButton.style.color = "black";
    prevButton.disabled = false;
  }

  pageContainer.innerHTML = `Page: ${page}`;

  console.log(`${url}?limit=10&page=${page}&year=(${getSelectedYears()})&db=${db}`);
  fetch(`${url}?limit=30&db=${db}&page=${page}&year=(${getSelectedYears()})`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const total_records = data.metadata.total;
      total_rec_container.innerHTML = `Total: ${total_records}`
      if(total_records == 0){
        publicationsDiv.innerHTML =  `
        <h1 class="text-center">No documents found..</h1>`
      }else{

      const publications = data.hits
        .map((record) => {
          const authors = record.names.authors.map(
            (author) => author.displayName
          );
          const displayAuthors =
            authors.length > 2
              ? `${authors.slice(0, 2).join(", ")}, et al.`
              : authors.join(", ");

          return `
                        <div class="text-sm mb-2">
                            ➤ ${displayAuthors},<br />
                            <a target="_blank" href=${record.links.record} class="text-blue-500 hover:underline">${record.title}</a>
                            ,<a class="lowercase capitalize">${record.source.publishYear}</a>
                        </div>
                    `;
        })
        .join("");
      publicationsDiv.innerHTML = publications;
}
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
// // On Click actions

fetchData();

document.querySelectorAll("#year-checkboxes  input").forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    console.log(getSelectedYears());
    // Change page to 1 when checkboxes changes
    page = 1;
    fetchData();
  });
});


document.querySelectorAll(".db input").forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    db = checkbox.value
    fetchData();
  });
});
