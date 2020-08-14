import React from 'react';
import './Data.css';
import Item from './Item/Item';

const Data = (props) => {

  return (
    <div className="data">
    <div className="data_type">{props.type.replace('_', ' ')}</div>
    <table>
    <tbody>
    	{
    		props.data.map(item => (
    			<Item item={item} key={item.name} />
    		))
    	}
      </tbody>
    </table>
    </div>
  );
}

export default Data;
