const searchQuery = window.location.search;

const res = searchQuery.split("=");
const videoId = res[1];

const iframe = document.getElementsByTagName("iframe")[0];

iframe.setAttribute("src", `https://www.youtube.com/embed/${videoId}`);

console.log(searchQuery);
