import React from 'react';
import './Item.css';

const Item = (props) => {

  const classes = [ 'data_item', 'percentage-'+props.item.skill];
  return (
    <tr className={classes.join(' ')}>
    	<td className="item_name">{props.item.name}</td>
    </tr>
  );
}

export default Item;

