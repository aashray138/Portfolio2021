import React from 'react';
import { Link } from 'react-router-dom';
import './WorkCardItem.css'

function WorkCardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link'>
          <div className='cards__item__info'>
            <h4 className='cards__item__text'>{props.text}</h4>
            <h3 className='cards__item__text'>{props.place}</h3>
            <h3 className='cards__item__text'> - {props.responsibilities1}</h3>
            <h3 className='cards__item__text'> - {props.responsibilities2}</h3>
            <h3 className='cards__item__text'> - {props.responsibilities3}</h3>
          </div>
        </Link>
      </li>
    </>
  );
}

export default WorkCardItem;