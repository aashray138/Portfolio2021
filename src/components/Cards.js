import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1> Software Engineer </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            
            <CardItem
              src='images/aboutme.png'
              text='Learn more about me'
              label='Who is Aashray?'
              path='/learnmore'
            />
            <CardItem
              src='images/ArtVille.png'
              text="Here's some Projects I have worked on"
              label='Projects'
              path='/projects'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/work.png'
              text='My Work Experiences '
              label='Career'
              path='/aboutme'
            />
            <CardItem
              src='images/skills.png'
              text='Check out my skills - what attributes make me who I am'
              label='Skills'
              path='/learnmore'
            />
            <CardItem
              src='images/comingsoon.png'
              text='Personal Blog - College and Career'
              label='Coming Soon!'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;