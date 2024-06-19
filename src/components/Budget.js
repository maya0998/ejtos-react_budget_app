import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget,currency} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        //show alert if newvalue lessthan remaining
        if(newBudget < totalExpenses) {
            alert("You cant reduce budget to be lower than the spending");
        }
        setNewBudget(event.target.value);
    }

    //£
    return (
<div className='alert alert-secondary'>
    
<span>Budget: {currency}{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
