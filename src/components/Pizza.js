import React, {useState} from "react";


function Pizza({pizza, setSelectedPizza}) {

  console.log(pizza)


 
function handleClick (e) {
  setSelectedPizza(pizza)


}
  





  return (
    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{pizza.vegetarian ? "Yes" : "No"} </td>
      <td>
        <button type="button" className="btn btn-primary" onClick={handleClick}>
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
