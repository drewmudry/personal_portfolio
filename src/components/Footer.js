import React from 'react';
import LinkedinIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from '@material-ui/icons/Twitter';
import "../styles/Footer.css";

function Footer() {
  return(
    <div className='footer'>
        <div className='socialMedia'>
            <LinkedinIcon />
            <GitHubIcon />
            <TwitterIcon />
        </div>
        <p>&copy; January 2023</p>
    </div>
  )
}

export default Footer;