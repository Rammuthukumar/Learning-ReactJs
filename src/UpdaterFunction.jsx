// Updater Function - A function passed as an argument to setState() usually ex. setCount(count => count + 1)
//                    Allows for safer update based on the previous update.
//                    Used with multiple state updates and async functions. Good practice to use updater function in setState()

import React, {useState} from "react"

function UpdaterFunction(){

    const [cars, setCars] = useState([]);
    const [cyear, setYear] = useState(new Date().getFullYear());
    const [cmake, setMake] = useState("");
    const [cmodel, setModel] = useState("");

    function handleAddCar(){
        const newCar = {
            year: cyear,
            make: cmake,
            model: cmodel
        }

        setCars(c => [...c, newCar])
    }

    function handleRemoveCar(index){
        setCars(cars.filter((_,i) => i !== index))
    }

    function handleYearchange(event){
        setYear(event.target.value)
    }

    function handleMakeChange(event){
        setMake(event.target.value)
    }

    function handleModelChange(event){
        setModel(event.target.value)
    }


    return(
        <div>
            <h1>List of Cars</h1>
            <ul>
                {cars.map((car,index) => <li key={index} onClick={() => handleRemoveCar(index)}>
                    {car.year} {car.make} {car.model}</li> )}
            </ul>
            <input type="number" value={cyear} onChange={handleYearchange}/><br/>
            <input type="text" value={cmake} onChange={handleMakeChange}/><br/>
            <input type="text" value={cmodel} onChange={handleModelChange}/><br/>

            <button onClick={handleAddCar}>Add new Car</button>


        </div>
    )

    /*
    const [foods, setFoods] = useState(["Apple","Orange","Banana"]);

    function handleAddFood(){
        const newFood = document.getElementById('inputBox').value;
        document.getElementById('inputBox').value = '';

        setFoods(f => [...f, newFood])
    }

    function handleRemoveFood(index){
        setFoods(foods.filter((_,i) => i !== index))
    }

    return(
        <div>
            <h1>Foods</h1>
            <ul>
                {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>
                    {food}</li>)}
            </ul>
            <input type="text" id="inputBox"/>
            <button onClick={handleAddFood}>Add</button>
        </div>
    )
        */

    /*
    Using updater function with objects.
    const [car, setCar] = useState(
        {
            year: 2025, model: "Fortuner", brand: "Toyota"
        }
    )

    function handleYearChange(event){
        
        setCar({year: event.target.value}) 
        this is not the correct way to update a property of obj, it leads to obj to have only year property
        to solve this issue we have to use spread operator (...car / ...c)

        
       setCar(c => ({...c, year: event.target.value}));
    }

    function handleModelChange(event){
       setCar(c => ({...c, model: event.target.value}));
    }

    function handleBrandChange(event){
        setCar(c => ({...c, brand: event.target.value}));
    }

    return(
        <div>
            <p>Your fav is : {car.year} {car.model} {car.brand}</p>

            <input type="number" value={car.year} onChange={handleYearChange}/> <br/>
            <input type="text" value={car.brand} onChange={handleBrandChange}/> <br/>
            <input type="text" value={car.model} onChange={handleModelChange}/>
        </div>
    )
        */
    
   /* const [count, setCount] = useState(0);

    // Uses the CURRENT state to update the NEXT state.
    // setter function do not trigger an update. React batches together the state update for performance reason.
    // NEXT state becomes current after the update.
            // setCount (count + 1)
            // setCount (count + 1) // this doesnt it inc the count by 2, it batches the update.

    const increment = () => {

        // By using the Updater function 
        // Takes the PENDING state to update the NEXT state.
        // React puts the updater function in a queue (waiting in a line)
        // During the next render , it will call them in a same order.
        setCount(c => c + 1);
        setCount(c => c + 1);
    } 
    const decrement = () => {
        setCount(c => c - 1);
        setCount(c => c - 1);
    }
    const reset = () => setCount(0);


    return(
        <div>
            <p>{count}</p>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    )
    */

}
export default UpdaterFunction