// deklarasi variabel untuk artikel
const articles = [
    {
      title: "Judul Artikel 1",
      content: "Isi artikel 1..."
    },
    {
      title: "Judul Artikel 2",
      content: "Isi artikel 2..."
    },
    {
      title: "Judul Artikel 3",
      content: "Isi artikel 3..."
    },
    {
      title: "Judul Artikel 4",
      content: "Isi artikel 4..."
    }
  ];
  
  // loop untuk menambahkan artikel pada halaman web
  for (let i = 0; i < articles.length; i++) {
    const article = articles[i];
    const articleList = document.querySelector(".related-articles ul");
    const articleItem = document.createElement("li");
    const articleLink = document.createElement("a");
    const articleImage = document.createElement("img");
    const articleTitle = document.createElement("h3");
    articleLink.href = "#";
    articleImage.src = "gambartoraja.jpg.jpg";
    articleImage.alt = "Gambar artikel " + (i+1);
    articleTitle.innerText = article.title;
    articleLink.appendChild(articleImage);
    articleLink.appendChild(articleTitle);
    articleItem.appendChild(articleLink);
    articleList.appendChild(articleItem);
    
    // event listener untuk menampilkan artikel
    articleLink.addEventListener("click", function() {
      const container = document.querySelector(".container");
      container.innerHTML = "";
      const articleTitle = document.createElement("h2");
      const articleContent = document.createElement("p");
      articleTitle.innerText = article.title;
      articleContent.innerText = article.content;
      container.appendChild(articleTitle);
      container.appendChild(articleContent);
    });
  }
  