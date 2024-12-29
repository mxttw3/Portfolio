import React from "react";
import "./contact.css";
import instagramLogo from '../../components/images/instagramLogo.svg';
import linkedinLogo from '../../components/images/linkedinLogo.svg';
import githubLogo from '../../components/images/githubLogo.svg';

const Contact = () => {
    const handleCopyToClipboard = () => {
        const textToCopy = "mxttw.ac@gmail.com";
        navigator.clipboard.writeText(textToCopy)
          .then(() => {
            alert("Text copied to clipboard");
          })
          .catch(err => {
            console.error("Copy failed: ", err);
          });
      };

    const handleNavigate = (url) => {
        window.open( url, '_blank');
    }



    return (
        <main className="mainGrid3">
            <section className='section1Contact'>
                <div className='contactInfo'>
                    <div className='centerItems' onClick={() => handleNavigate('https://www.instagram.com/the_mxttw/')}>
                        <img src={instagramLogo} alt="instagram logo"/>
                        <p>@the_mxttw</p>
                    </div>
                    <div className='centerItems' onClick={() => handleNavigate('https://www.linkedin.com/in/matthew-angulo-caballero/')}>
                        <img src={linkedinLogo} alt="linkedin logo" />
                        <p>Linkedin</p>
                    </div>
                    <div className='centerItems'>
                    <img src={githubLogo} alt="github logo" onClick={() => handleNavigate('https://github.com/mxttw3')} />
                    <p>Github</p>
                    </div>
                </div>

                <div className="emailContact" onClick={handleCopyToClipboard}>
                    <div>
                        <h3 className='button-front'>EMAIL</h3>
                        <h4 className='button-back' id='textEmail1'>mxttw.ac@gmail.com</h4>
                        <h4 className='button-back' id='textEmail2'>CLICK TO COPY</h4>
                    </div>
                </div>
            </section>
            <section className='section2Contact'/>
            <section className='section3Contact'>
                <h2 className='contactTittle'>CONTACT</h2>
            </section>
        </main>
    )
};

export default Contact;