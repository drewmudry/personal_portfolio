import React from 'react'
import LinkedinIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from '@material-ui/icons/Email';
import SouthIcon from '@material-ui/icons/ArrowDownwardRounded';
import "../styles/Home.css"

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, I'm Drew!</h2>
        <div className='promopt'>
          <p>I am a new grad software engineer looking for an entry level software role!</p>
          <SouthIcon />
          <LinkedinIcon />
          <EmailIcon />
          <SouthIcon />
        </div>
      </div>

      <div className='skills'>
        <h1>My Skills</h1>
        <ol className='list'>
          <li className='item'>
          <h2>Back-End</h2>
          <span>C++, Python and Javascript</span>
          </li>
          <li className='item'>
          <h2>Front-End</h2>
          <span>HTML, CSS and React</span>
          </li>
          <li className='item'>
          <h2>Other Skills</h2>
          <span>TCP/IP, GCP, R, Jira, Tensorflow, Keras, Jenkins</span>
          </li>
        </ol>
      </div>
      <div className='contact'>
        <h2>Contact me by email at d.tmudry9@gmail.com or on <a href='https://www.linkedin.com/in/drew-mudry/'>LinkedIn</a>!</h2>
      </div>
    </div>
  );
}

export default Home;