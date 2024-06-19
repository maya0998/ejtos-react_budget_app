import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Currency=()=>{
    const { dispatch } = useContext(AppContext);
    const [NewCurrency, setNewCurrency] = useState("$");
    const changeCurrency = (event) => {
        //ChangeCurrency
        setNewCurrency(event.target.value);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
        console.log("From Currency"+event.target.value);
    }
return (
<div>
{/* <span>currency: {NewCurrency}</span> */}
<select className='alert list-currency text-white' onChange={changeCurrency}>
    <option value="$">$Dollar</option>
    <option value="£">£Pound</option>
    <option value="€"> €Euro</option>
    <option value="₹">₹Rupee</option>
</select>   
</div> 
    
);

}
export default Currency;