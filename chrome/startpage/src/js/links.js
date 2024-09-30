function fetchLinks(url) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
}

fetchLinks("../../links.json")
  .catch(() => fetchLinks("../../links_example.json"))
  .then((data) => {
    const linksContainer = document.getElementById("links");
    for (const category in data) {
      const categoryDiv = document.createElement("div");
      categoryDiv.className = "urls";

      const headerDiv = document.createElement("div");
      headerDiv.className = "header";
      headerDiv.textContent = category;
      categoryDiv.appendChild(headerDiv);

      const ul = document.createElement("ul");
      for (const linkText in data[category]) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = data[category][linkText];
        a.textContent = linkText;
        li.appendChild(a);
        ul.appendChild(li);
      }
      categoryDiv.appendChild(ul);
      linksContainer.appendChild(categoryDiv);
    }
  })
  .catch((error) => console.error("Error fetching links:", error));
