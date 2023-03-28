import React from "react";
import Pizza from "./Pizza";
import{useState, useEffect } from 'react'

function PizzaList({setSelectedPizza}) {

const [pizzaList, setPizzaList] = useState([])

useEffect(()=> {
  fetch('http://localhost:3001/pizzas')
  .then(res => res.json())
  .then(pizzas => setPizzaList(pizzas))
}, [])

const renderPizzas = pizzaList.map((pizza => {
  return <Pizza key = {pizza.id} pizza = {pizza} setSelectedPizza = {setSelectedPizza} />
}))


  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {
         renderPizzas
        }
      </tbody>
    </table>
  );
}

export default PizzaList;
