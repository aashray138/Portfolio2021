import React from 'react'
import '../../App.css'
import Footer from '../Footer'
import ProjectPage from '../ProjectPage'

function Projects(){
    return(
        <>
        <h3 style={{marginTop:'2%',marginLeft:'40%', color:'#2197bf'}}> Check out my Github @<a href="www.github.com/aashray138">aashray138</a> </h3>
          <ProjectPage />
          <Footer/>
          </>
    )
}

export default Projects
