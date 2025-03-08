import List from './List.jsx'

function App() {
  const fruits = [
    {
      id : 1,
      name : "orange",
      calories : 97
  
  },{
      id : 2,
      name : "apple",
      calories : 100
  },{
      id : 3,
      name : "banana",
      calories : 180
  }  
]

  return (
    <>
      {fruits.length > 0 && <List items = {fruits} category="fruit"/>}
    </>
  )
}

export default App
