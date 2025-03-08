
function List(props){
    // const fruits = ['apple','orange','pineapple']

    //fruits.sort((a,b)=> a.name.localeCompare(b.name)) // alphabetical order.
    //fruits.sort((a,b)=> b.name.localeCompare(a.name)) // reverse alphabetical order.
    //fruits.sort((a,b)=> a.calories - b.calories)       // cal in asc.
    //fruits.sort((a,b)=> b.calories - a.calories)      //cal in desc

    const fruits = props.items;
    const category = props.category;

    const filteredFruits = fruits.filter(fruit=> fruit.calories > 10); 
    

    // Every Elem in a list shld hv a key which uniquely identifies the elem.
    const listFruits = filteredFruits.map(fruit => <li key={fruit.id}>      
                                            {fruit.name} : {fruit.calories}
                                            </li>) 

    return ( 
        <>
        <h3>{category}</h3>
        <ol>{listFruits}</ol>
        </>
    )
}
export default List