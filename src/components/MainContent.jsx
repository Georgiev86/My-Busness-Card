import React from 'react'
import './MainContent.css'
import me from './me.jpg'
import facebook from './facebook.svg'
import linkedin from './linkedin.svg'
import github from './github.svg'
import mail from './Mail.svg'
import youtube from './youtube.svg'

export default function MainContent(){
    return (
        
            <div className='container'>
                <div className='img-container'>
                <img className='main-img' src={me} alt="me" />
                </div>
                <div className='sub-container'>
                    <h2 className='name'>Dimitar Georgiev</h2>
                    <h4 className='role'>Full-Stack Developer</h4>
                    {/* <h5 className='web'>Dimitar Georgiev</h5>  */}
                    <div className='connect'>
                        <a className='mail' href="mailto:dimitar.georgiev86@yahoo.com"><img src={mail} alt="mail" /> Email</a>
                        <a className='linkedin' href="https://www.linkedin.com/in/dimitar-georgiev-8425b5228/" target='_blank'><img src={linkedin} alt="" />LinkedIn</a>
                    </div>
                    <div className='about'>
                        <h3>About</h3>
                      <p>I aspire to become a proficient full-stack developer, perpetually engaged in acquiring fresh technologies and expertise pertinent to my forthcoming professional path.</p>
                        {/* <p>I am an aspiring full-stack developer. I am constantly learning new technologies and knowledge related to my future career. </p> */}
                    </div>
                    <div className='interest'>
                        <h3>Interests</h3>
                        <p> Music. Technology. Sport. Health. I love connecting with new people,give me a shout at dimitar.georgiev86@yahoo.com.</p>
                    </div>
                </div>
                <div className='footer'> 
                    <a href="https://www.facebook.com/profile.php?id=100086884437519" target='_blank'><img className='facebook' src={facebook} alt="facebook" /></a>
                    <a href="https://www.youtube.com/channel/UCjKI_s1nPkTPWb3qYPub0qA" target='_blank'><img className='youtube' src={youtube} alt="youtube" /></a>
                    <a href="https://github.com/Georgiev86" target='_blank'><img className='github' src={github} alt="github" /></a>
                </div>
            </div>
        
    )
}
