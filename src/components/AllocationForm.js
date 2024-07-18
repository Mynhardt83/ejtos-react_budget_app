import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = () => {
    const { dispatch, currency } = useContext(AppContext);
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('Add');

    const submitEvent = () => {
        const expense = {
            name: name,
            cost: parseInt(cost),
        };

        if (action === 'Add') {
            dispatch({
                type: 'ADD_EXPENSE',
                payload: expense,
            });
        } else {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        }
    };

    return (
        <div>
            <div className='row'>
                <div className='col-sm'>
                    <label htmlFor='name'>Department</label>
                    <select
                        required
                        className='form-select'
                        id='name'
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    >
                        <option value='' disabled>Choose...</option>
                        <option value='Marketing'>Marketing</option>
                        <option value='Finance'>Finance</option>
                        <option value='Sales'>Sales</option>
                        <option value='Human Resource'>Human Resource</option>
                        <option value='IT'>IT</option>
                    </select>
                </div>
                <div className='col-sm'>
                    <label htmlFor='action'>Allocation</label>
                    <select
                        required
                        className='form-select'
                        id='action'
                        value={action}
                        onChange={(event) => setAction(event.target.value)}
                    >
                        <option value='Add'>Add</option>
                        <option value='Reduce'>Reduce</option>
                    </select>
                </div>
                <div className='col-sm'>
                    <label htmlFor='cost'>Amount</label>
                    <div className='input-group'>
                        <span className='input-group-text'>{currency}</span>
                        <input
                            required
                            type='number'
                            className='form-control'
                            id='cost'
                            value={cost}
                            onChange={(event) => setCost(event.target.value)}
                        />
                    </div>
                </div>
                <div className='col-sm'>
                    <button
                        type='button'
                        className='btn btn-primary mt-4'
                        onClick={submitEvent}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllocationForm;
