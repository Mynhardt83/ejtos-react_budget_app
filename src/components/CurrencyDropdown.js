import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropdown = () => {
    const { currency, dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    };

    return (
        <div className='alert alert-success p-2 d-flex align-items-center justify-content-between'>
            <label htmlFor='currency' className='mb-0'>Currency</label>
            <select
                id='currency'
                value={currency}
                onChange={handleCurrencyChange}
                className='form-select currency-select'
            >
                <option value='$'>$ Dollar</option>
                <option value='£'>£ Pound</option>
                <option value='€'>€ Euro</option>
                <option value='₹'>₹ Rupee</option>
                <option value='R'>R Rand</option>
            </select>
        </div>
    );
};

export default CurrencyDropdown;
