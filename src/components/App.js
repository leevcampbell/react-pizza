import React, {useState} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {

const [selectedPizza, setSelectedPizza] = useState(null)




  return (
    <>
      <Header />
      <PizzaForm selectedPizza={selectedPizza}/>
      <PizzaList setSelectedPizza={setSelectedPizza}/>
    </>
  );
}

export default App;
