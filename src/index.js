if (document.readyState !== "loading") {
  console.log("Document is ready!");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document is ready after waiting!");
    initializeCode();
  });
}
function initializeCode() {
  const shows = document.getElementById("body");
  const submitDataButton = document.getElementById("submit-data");

  submitDataButton.addEventListener("click", async function () {
    const queryParameter = document.getElementById("input-show");

    const url = "https://api.tvmaze.com/search/shows?q=" + queryParameter;

    const datasetPromise = await fetch(url);
    const datasetJSON = await datasetPromise.json();

    datasetJSON.forEach((show) => {
      let div1 = document.createElement("div");
      let img = document.createElement("img");
      let div2 = document.createElement("div");
      let h1 = document.createElement("h1");
      let p = document.createElement("p");

      div1.classList = "show-data";
      img.src = show.image.medium;
      div2.classList = "show-info";
      h1.innerText = show.title;
      p.innerText = show.summary;

      div1.appendChild(img);
      div1.appendChild(div2);
      div2.appendChild(h1);
      div2.appendChild(p);
      shows.appendChild(div1);
    });
  });
}
