<script>
fetch("news.json")
  .then(response => response.json())
  .then(newsArticles => {
    const container = document.getElementById("news-container");
    container.innerHTML = "";

    newsArticles.forEach(article => {
      const articleDiv = document.createElement("div");
      articleDiv.classList.add("news-article");
      articleDiv.innerHTML = `
        <h3 class="news-title">${article.title}</h3>
        <p class="news-date">${article.date}</p>
        <p class="news-summary">${article.summary}</p>
        ${
          article.mediaType === "image"
            ? `<img class="news-media" src="${article.mediaSrc}" alt="${article.title}">`
            : `<iframe class="news-media" src="${article.mediaSrc}" frameborder="0" allowfullscreen></iframe>`
        }
      `;
      container.appendChild(articleDiv);
    });
  })
  .catch(error => console.error("Error loading news:", error));
  {
  title: "Your New Headline",
  date: "October 10, 2025",
  summary: "Write your short news here...",
  mediaType: "image",
  mediaSrc: "https://yourimageurl.jpg"
},

</script>
