// console.log("Window:", window);
// console.log("Window document:", window.document);
// console.dir(window.document);
// // console.dir(document.children[0].children[1].children[0].innerHTML)

// //1. document.getElement_s_Bytagname --> [] (iterable)(HTML collection)

// const heading=document.getElementsByTagName("h3");
// console.log("headdings:",heading);

// const header=document.getElementsByTagName("header");
// console.log("headdings:",header);

// heading[0].innerText="Hello kushara";
// heading[1].innerText="Hello Mohan"

//2. document.getElement_s_Byclassname --> [] (iterable)(HTML collection)

// const element = document.getElementsByClassName("text-brown");
// console.log("headings:", element[0].innerHTML);
// console.log("headings:", element[1].innerHTML);

// element[0].style.color="brown";
// element[1].style.color="brown";

//3. document.getElementById --> element or null

// const text=document.getElementById('text-1');

// text.style.backgroundColor="lime"

//4. document.querySelectorAll --> [](Node List)

// const titles = document.querySelectorAll("h3");
// const tbrown = document.querySelectorAll(".text-brown"); //class ke liye . use hota hai
// const tpara = document.querySelectorAll("#text-1"); //id ke liye # use hota hai

// console.log(titles);
// console.log(tbrown);
// console.log(tpara);

//5. document.querySelector --> []element or NULL

const title = document.querySelector("h3");
console.dir(title);

const tbrowns = document.querySelector(".text-brown"); //class ke liye . use hota hai
console.dir(tbrowns);
