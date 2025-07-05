const domRoot = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(domRoot);

const arr = [
  {
    name: "Prabhjot",
    score: 29,
  },
  {
    name: "Rakesh",
    score: 35,
  },
  {
    name: "Rachit",
    score: 10,
  },
  {
    name: "kush",
    score: 40,
  },
  {
    name: "tanmay",
    score: 41,
  },
];

const styleObj = {
  color: "purple",
  fontsize: "1.5rem",
  fontWeight: "600",
};
const Card = (props) => {
  const { name, score } = props;
  return (
    <div className="card">
      <h2 style={{ color: "red" }}>{name}</h2>
      <p style={styleObj}>{score}</p>
    </div>
  );
};

const App = () => {
  return (
    <div className="parent">
      {/* <h1>hello</h1> */}
      {arr.map((elem, key) => {
        return <Card key={key} name={elem.name} score={elem.score} />;
      })}
    </div>
  );
};

reactRoot.render(App());
