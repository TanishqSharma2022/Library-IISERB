const url = "https://library.iiserb.ac.in/api/documents";

fetch(url, {
  method: 'GET',
  credentials: 'include' // Include cookies and other credentials
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    const publicationsDiv = document.getElementById("research-publications");

    const publications = data.hits
      .map(
        (record) => {
          const authors = record.names.authors.map(author => author.displayName);
          const displayAuthors = authors.length > 2
            ? `${authors.slice(0, 2).join(", ")}, et al.`
            : authors.join(", ");

          return `
                    <div class="text-sm mb-2">
                      ➤ ${displayAuthors},<br />
                        <a target="_blank" href=${record.links.record} class="text-blue-500 hover:underline">${record.title}</a>
                  
                         ,<a class="lowercase capitalize">${record.source.publishYear}</a>
                    </div>
                `}
      )
      .join("");
    publicationsDiv.innerHTML = publications;
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
    const publicationsDiv = document.getElementById("publications");
    publicationsDiv.innerHTML = `<p>Error fetching data: ${error.message}</p>`;
  });
  // ,<a class="lowercase capitalize">${record.source.sourceTitle}</a>
