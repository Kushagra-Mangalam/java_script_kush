const title = document.getElementById("title");
const handleUserName = (e) => {
  // console.log("User Name is handled");
  // console.log("");
  console.log(e);
  const element = e.target;
  console.log("User Name is: " + element.value);
  title.innerText = `Hi ${element.value}`;
};

const handleFormSubmit = (e) => {
  e.preventDefault();
  console.log("Form is submitted");
  const username = e.target[0].value;
  const email = e.target[1].value;
  const password = e.target[2].value;

  const username1 = e.target.usernameTemp.value;
  const email1 = e.target.emailTemp.value;
  const password1 = e.target.passwordTemp.value;

  if (!email1.endsWith("@gmail.com")) {
    alert("Please enter a valid email address");
    return;
  } else if (password1.length < 8) {
    alert("Password must be at least 8 characters long");
    return;
  }
  // console.log(input1.value);
  // console.log(input2.value);
  // console.log(input3.value);
  console.log(e);
};
