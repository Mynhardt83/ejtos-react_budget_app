import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        const value = parseInt(event.target.value, 10);

        if (value > 20000) {
            alert("The value cannot exceed the upper limit of 20,000.");
            return;
        }

        setNewBudget(value);

        if (value >= 0 && value <= 20000) {
            dispatch({
                type: 'SET_BUDGET',
                payload: value,
            });
        }
    };

    return (
        <div className='alert alert-secondary d-flex align-items-center'>
            <span>Budget: {currency}</span>
            <input
                type="number"
                step="10"
                value={newBudget}
                onChange={handleBudgetChange}
                min="0"
                max="20000"
                style={{ marginLeft: '10px' }}
            />
        </div>
    );
};

export default Budget;
