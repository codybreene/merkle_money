import React from 'react';
import CurrSelector from './curr_selector';

const CurrSelectorItem = ({currency}) => {
    return (
        <li>{currency.name}</li>
    )
}

export default CurrSelectorItem