import {useState} from 'react'


const Counter = () => {
 const [value, setValue] = useState (0);
const handleAdd = () => {
    setValue(prev => prev + 1)
}

const handleSubs = () => {

    if ( value === 0  ){
        return;
    }
    setValue(prev => prev - 1)
}
  
    return (

   <>
   <h1> {value} </h1>
   <button onClick={handleAdd}>Add</button>
   <button onClick={handleSubs}> Subs</button>
   </>
  )
}

export default Counter;