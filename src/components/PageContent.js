import React from 'react'
import ProjectSection from './ProjectSection'
import About from './About'
import Contact from './Contact'
import ImageLocation from './ImageLocation'

const PageContent = () => {
  return (
      
      <div className="w3-content w3-padding" style={{maxWidth: '1564px'}}> 
       <ProjectSection/>
      <About/>
      <Contact/>
      <ImageLocation/>Ï
      
      </div>
     
      
    


  )
}

export default PageContent