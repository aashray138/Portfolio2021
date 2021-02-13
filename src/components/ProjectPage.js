import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function ProjectPage() {
  return (
    <div className='cards'>
      <h1> Software Engineer </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            
            <CardItem
              src='images/Transcript.png'
              text='Online Transcript Portal System for Admin and User Access'
              text2 =' Main purpose of this project was to understand the use of PHP as backend, SQL, and relational database'
              label='HTML5, CSS3, JavaScript, PHP, MySQL'
              github="https://github.com/aashray138/OnlineTranscriptSystem"
              title = "Online Transcript System"
            />
            <CardItem
              src='images/Artville.png'
              text='An e-commerce website built to sell photographs, posters and paintings'
              text2 ='Features such as sorting according to different aspects - price, name, ratings'
              label='HTML5, CSS3, JavaScript, PHP, MySQL'
              github="https://github.com/aashray138/ArtVille"
              title = "ArtVille"
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/LightenUp.png' 
              text='Recognizes facial emotions and display quotes and fun interactions using ARKit to lighten up the user'
              label='Swift, XCode , CreateML, ARKit'
              github="https://github.com/aashray138/LightenUp"
              title = "Lighten Up"
            />
            <CardItem
              src='images/WhereUAtt.png'
              text='Login to your profile and get instant locations from a list of friends to keep track of them during emergency situations'
              label='Swift, XCode , Firebase'
              github="https://github.com/aashray138/WhereUAtt"
              title ="WhereUAtt"
            />
            <CardItem
              src='images/CampusCalendar.png' 
              text='Built this website for Calvin Hacks at Calvin University'
              text2 ='Can be used by administratord to post new events and users to rsvp and add it to their calendar.'
              label='HTML5, CSS3, JavaScript, PHP, MySQL'
              github="https://github.com/aashray138/OnlineTranscriptSystem"
              title = "Campus Calendar"
            />
          </ul>
        </div>
      </div>

     
    </div>
  );
}

export default ProjectPage;