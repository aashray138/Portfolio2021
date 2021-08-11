import React from 'react';
import './Cards.css';

function Cards() {
  return (
    <div className='cardsMain'>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 100, paddingLeft: "12em" }}>
        <div>
          <img src="../images/aashray.jpg" width="75%" style={{ paddingTop: '1em' }}></img>
        </div>
        <div style={{ marginTop: '8%', marginRight: '5%' }}>
          <br />
          <h2>
            Hello 👋 <br/> <br/>
            <div>
              My name is Aashray and  I am from Nepal 🇳🇵 and currently live in Kalamazoo. I am a senior at
              Western Michigan University majoring in Computer Science. I will be graduating in December 2021. <br/><br/>

              I currently work as a Software Development Intern at SICPA Securink for their Solutions Delivery team.
              I work on the SETS application as a fullstack engineer and help with testing as well. <br/><br/>

              Some of my interests are watching and playing tennis, binging TV shows, researching about new technologies,
              and hanging out with friends. I love travelling and have been to 16 states in the 4 years I have been in the US. <br/><br/>
              
              Click below to learn more about my 💼 Work Experience and 🚧 Projects!!

            </div>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Cards;