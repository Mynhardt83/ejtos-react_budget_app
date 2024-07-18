import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const handleIncreaseBy10 = () => {
        dispatch({
            type: 'ADD_EXPENSE',
            payload: { name: props.name, cost: 10 },
        });
    };

    const handleDecreaseBy10 = () => {
        dispatch({
            type: 'RED_EXPENSE',
            payload: { name: props.name, cost: 10 },
        });
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.currency}{props.cost}</td>
            <td className="text-center">
                <FaPlusCircle size='1.5em' className='mr-3' onClick={handleIncreaseBy10} />
            </td>
            <td className="text-center">
                <FaMinusCircle size='1.5em' className='mr-3' onClick={handleDecreaseBy10} />
            </td>
            <td className="text-center">
                <TiDelete size='1.5em' onClick={handleDeleteExpense} />
            </td>
        </tr>
    );
};

export default ExpenseItem;
