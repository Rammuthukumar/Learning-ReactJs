import Student from "./Student.jsx"

function App() {
  return (
    <>
      <Student name="ram" age={21} isStudent={true}/>
      <Student age={22} isStudent={false}/>
      <Student />
    </>
  )
}

export default App
