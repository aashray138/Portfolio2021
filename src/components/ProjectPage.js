import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import SimpleSlider from './Carousel/Carousel';

function ProjectPage() {
  return (
    <div className='cards'>
      <SimpleSlider></SimpleSlider>
    </div>
  );
}

export default ProjectPage;