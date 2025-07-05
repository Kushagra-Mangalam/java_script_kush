const fsPromises = require("node:fs/promises");

const main = async () => {
  console.log("----------------start---------------\n");

  const response1 = await fsPromises.readFile("./temp.txt", "utf-8");
  console.log("next->>", response1);

  try {
    const response2 = await fsPromises.readFile("./temp.txt", "utf-8");
    console.log(response2);
  } catch (err) {
    console.log("cannot open file temp.txt-->", err.massage);
  }

  const response = () => {
    const res = fsPromises.readFile("./temp.txt", "utf-8");

    console.log("temp.txt-->", res);
  };

  response();
};

main();
