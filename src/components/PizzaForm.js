import React, {useState} from "react";

function PizzaForm({selectedPizza}) {
  console.log(selectedPizza)

const [selectedOption, setSelectedOption] = useState(null)

function handleOptionChange(e) {
  setSelectedOption(e.target.value)
}





  return (
    <form onSubmit={null /*handle that submit*/}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value = {selectedPizza ? selectedPizza.topping : "Pizza Topping"}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value = {selectedPizza ? selectedPizza.size : "Size"}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked = {selectedOption === "Vegetarian"}
              onChange = {handleOptionChange}
            />
            <label className="form-check-label" >Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked= {selectedOption === "Not Vegetarian"}
              onChange = {handleOptionChange}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
