import React from 'react';
import { Link } from 'react-router-dom';
import './CardItem.css'
function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
       
        <Link className='cards__item__link' to={props.path} onClick={props.pathway}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='something'
              src={props.src}
            />
          </figure>
          
          <div className='cards__item__info'>
          <h3 className='cards__item__title'>{props.title}</h3> <br/>
            <h5 className='cards__item__text'>{props.text}</h5><br/>
            <h5 className='cards__item__text'>{props.text2}</h5><br/>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;