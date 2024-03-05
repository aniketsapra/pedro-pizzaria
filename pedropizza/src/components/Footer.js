import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <InstagramIcon /><FacebookIcon /><LinkedInIcon /><TwitterIcon />
        <p>&copy; 2024 Pizzaria</p>
        
      </div>
    </div>
  )
}

export default Footer
