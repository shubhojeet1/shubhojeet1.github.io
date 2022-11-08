// import { Box, Container, Flex, Heading, Stack } from '@chakra-ui/react'
import GitHubCalendar from 'react-github-calendar';
import React from 'react';
import "./Github.css";


const Github = () => {
  return (
    
     <div className='rdx' >
      <div className='first'>
      <img src="https://github-readme-stats.vercel.app/api?username=shubhojeet1&show_icons=true&locale=en&theme=radical" alt="shubhojeet1" height="139" />
       
       <img src="https://github-readme-streak-stats.herokuapp.com/?user=shubhojeet1&show_icons=true&locale=en&theme=radical" alt="shubhojeet1" />
      </div>
      <div className='second'>
      <GitHubCalendar username="shubhojeet1" year={new Date().getFullYear()} />
      </div>
       
      
    </div>
   

          
    
    
     
  )
}

export default Github