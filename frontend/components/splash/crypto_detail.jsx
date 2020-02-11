import React from 'react'

export const CryptoDetail = ({id, crypto}) => {
  const logo  = crypto.image;
  const name = crypto.name;
  const symbol = crypto.symbol;
  const price = crypto.current_price.toFixed(2);
  const perChange = crypto.price_change_percentage_24h_in_currency.toFixed(2);
  return (
    <tr>
      <td>{id + 1}</td>
      <td><img className='curr-logo-splash' src={`${logo}`} /></td>
      <td>{name}</td>
      <td>{symbol}</td>
      <td>{price}</td>
      <td>{`${perChange} %`}</td>
    </tr>
  )
}