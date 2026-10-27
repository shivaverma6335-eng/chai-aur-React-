
import Chai from "./chai"
function App() {
  const username = "chai aur code "  //variable inject
    //{} isse variable ko use kr skte h
  return (
      // <Chai /> 
      // <h1>test </h1>   //ek hi element return kr skte h


      /*agar ek se jada element return krna h to div ke 
      andar sare element return kr do ya <> </> iske andar kr do  */
      <>
        <Chai /> 
        <h1>shiva verma {username}</h1>
        <p>test</p>
      </>
        
       /*
       {username} ye h evaulated expreesion evaluatye krke js jo milta h wo h {} iske andr
        */ 

  )
}

export default App
