const renderSuggestions = (data) => {
  const { results } = data;
  const rootElem = document.getElementById("search-suggestions");
  rootElem.innerText = "";
  results.forEach((txt) => {
    const newPara = document.createElement("p");
    newPara.innerText = txt;
    rootElem.appendChild(newPara);
  });
};

const handleSearchSuggestion = (e) => {
  const value = e.target.value;

  const request = fetch(
    `https://youtube138.p.rapidapi.com/auto-complete/?q=${value}&hl=en&gl=US`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "6e4af5760bmsha214f7250e00762p165e90jsn25da9b6d8479",
        "x-rapidapi-host": "youtube138.p.rapidapi.com",
      },
    }
  );
  request
    .then((response) => {
      const pr2 = response.json();
      pr2.then((data) => {
        renderSuggestions(data);
      });
    })
    .catch((err) => {
      alert(`error in search autocomplete:${err.message}`);
      console.log(`error in search autocomplete : ${err.massage}`, err);
    });
};

let timeoutID = null;

const handleSearchSuggestionSmart = (event) => {
  clearTimeout(timeoutID);

  timeoutID = setTimeout(() => {
    handleSearchSuggestion(event);
  }, 1000);
};

//--------------------------------------------------------------------------
