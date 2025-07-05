const request = window.fetch("https://dummyjson.com/products");
console.log("request:", request);
console.log("request:", request);

const successCb = (response) => {
  console.log("Result", response);
  const pr2 = response.json();

  pr2.then((data) => {
    // console.log("Data", data);
    renderUI(data);
  });
};

const errorCb = (err) => {
  alert("unable to get response", err.message);
};
request.then(successCb).catch(errorCb);

const dataUI=(data)=>{
    const{recipies}=data;
}
// request.then(()=>{}).catch(()=>{});
