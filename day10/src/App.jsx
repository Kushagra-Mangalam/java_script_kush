import {useState} from 'react';
const FRUITS = [
  {
      name: "Kiwi",
      color: "green",
      price: 600,
  },
  {
      name: "Banana",
      color: "yellow",
      price: 40,
  },
  {
      name: "Apple",
      color: "red",
      price: 200,
  },
  {
      name: "Mango",
      color: "yellow",
      price: 150,
  },
];


const App = () => {

  const [editIndex, setEditIndex] = useState(-1);
  const [fruits, setFruits] = useState(FRUITS);

  const handleSubmit = (e, idx) => {
    e.preventDefault();
    setFruits(prev => {
      const temp = [...prev];
      temp[idx].name = e.target.fruitName.value;
      return temp;
    });
    setEditIndex(-1);
  };

  return (
    <div>
      {fruits.map((elem, idx) => {
        return (
          <div key={idx} style={{ backgroundColor: elem.color }}>
            {editIndex === idx ? (
              <div>
                <form
                  onSubmit={e => handleSubmit(e, idx)}
                  onReset={() => setEditIndex(-1)}
                >
                  <input
                    type="text"
                    name="fruitName"
                    defaultValue={elem.name}
                  />
                  <button type="submit">Update</button>
                  <button type="reset">Cancel</button>
                </form>
              </div>
            ) : (
              <div>
                <h3>{elem.name}</h3>
                <h4>{elem.color}</h4>
                <h3>Rs. {elem.price}</h3>
                <button onClick={() => setEditIndex(idx)}>Edit</button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default App;