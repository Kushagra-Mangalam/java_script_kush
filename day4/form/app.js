const title = document.getElementById("grettings");

const handleUserName = (e) => {
  console.log("User name is handled");
  console.log("-------------------");
  console.log(e);
  const elem = e.target;
  console.log(elem.value);
  title.innerText = `hello ${elem.value}!`;
};
