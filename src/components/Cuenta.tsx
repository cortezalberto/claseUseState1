import { useState } from "react";
import { Button } from "react-bootstrap";




export const Cuenta = () => {

  const [count, setCount] = useState(0)

    const incrementar = (numero:number):void => {setCount(count + numero)}

  return (
    <div>
        <h1> soy el cuenta</h1>
        <span> {count} </span>
 
   

        <Button  onClick = {()=>incrementar(1)} variant="primary" size="lg" >
          +1
        </Button>{' '}

        
        <Button  onClick = {()=>incrementar(2)} variant="primary" size="lg" >
          +2
        </Button>{' '}

        <Button  onClick = {()=>setCount(0)} 
           variant="danger">Resetear</Button>{' '}
        
       

    </div>
  )
}
