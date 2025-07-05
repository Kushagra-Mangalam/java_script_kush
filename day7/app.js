// console.log("hello");

// const rootElem = document.getElementById("root");
// const item1 = document.createElement("li");
// item1.innerText = "item1";
// const item2 = document.createElement("li");
// item2.innerText = "item2";

// const unorderedList = document.createElement("ul");

// unorderedList.appendChild(item1);
// unorderedList.appendChild(item2);

// rootElem.appendChild(unorderedList);

// const item1 = React.createElement("li", {}, "item1");
// console.log("item1:", item1);
// const item2 = React.createElement("li", {}, "item2");
// const list = React.createElement("ul", {}, [item1, item2]);
// const rootElem = document.getElementById("parent");
// const reactRoot = ReactDOM.createRoot(rootElem);

// reactRoot.render(list);

// import React from "react";

// const item1 = <li>item1</li>;

// const item2 = <li>item2</li>;
const list = (
  <ul>
    <li>item1</li> <li>item2</li>
  </ul>
);

const rootElem = document.getElementById("parent");
const reactRoot = ReactDOM.createRoot(rootElem);

reactRoot.render(list);
