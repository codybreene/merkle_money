import React from 'react'

const CryptoDetail = ({id, crypto}) => {
    const logo  = crypto.image;
    const name = crypto.name;
    const symbol = crypto.symbol;
    const price = crypto.current_price.toFixed(2);
    const perChange = crypto.price_change_percentage_24h.toFixed(2);
    return (
      <tr>
        <td className="col-1-content">{id + 1}</td>
        <td className="col-2-content">
          <div className="col-2-content-inner">
            <img className='curr-logo-splash' src={`${logo}`} />
            <div className="table-crypto-name">{name}</div>
            <div className="table-symbol">{symbol.toUpperCase()}</div>
          </div>
        </td>
        <td className="col-3-content">{price}</td>
        <td className="col-4-content">{`${perChange} %`}</td>
        <td className="col-5-content"></td>
        <td className="col-6-content"></td>
      </tr>
    )
  }

export default CryptoDetail
