import React from 'react'

const AboutMe = () => {
    return (
        <>
            <section id="about" className='row my-5'>
                <div className='col-12 d-flex flex-column justify-content-center align-items-center p-5 text-white'>
                    <h1 style={{ fontSize: '80px' }}>Creating digital solutions that <span className="highlight">Matter</span></h1>
                    <div style={{ fontSize: '30px' }} >I'm a dedicated full-stack developer who transforms complex challenges into elegant, high-performance web applications.</div>
                    <div style={{ fontSize: '30px' }}>With a keen eye for detail and a passion for innovation, I build robust systems that grow with your business needs.</div>
                    <div className='my-3'></div>
                    <h2 style={{ fontSize: '50px' }}>About Me</h2>
                    <div style={{ fontSize: '15px' }} >Driven by a passion for technology and web development, I began my career in the commercial and marketing world before discovering programming a field where logic, creativity, and problem-solving come together.</div>
                    <div style={{ fontSize: '15px' }}>That discovery sparked my transition into tech. I completed an intensive training program, working on real-world projects and developing a mindset focused on continuous growth.</div>
                    <div style={{ fontSize: '15px' }}>Today, I'm committed to building a solid career: I adapt quickly to new environments, tackle challenges with determination, and seek a space where I can contribute, learn, and grow every single day.</div>
                </div>
                <div className='col-12 d-flex justify-content-center align-items-center p-2 gap-5'>
                    <a
                        href="https://www.linkedin.com/in/michele-casani-50b7a3328/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-link d-flex align-items-center justify-content-center"
                        style={{ textDecoration: 'none' }}
                    >
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
                            alt="LinkedIn"
                            width="24"
                            height="24"
                            style={{ filter: 'brightness(0) invert(1)' }}
                        />
                    </a>
                    <a
                        href="https://github.com/MicheleCasani"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-link d-flex align-items-center justify-content-center"
                        style={{ textDecoration: 'none' }}
                    >
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                            alt="GitHub"
                            width="24"
                            height="24"
                            style={{ filter: 'invert(1)' }}
                        />
                    </a>
                </div>
                <div className='col-12 d-flex justify-content-center align-items-center p-2'>
                    <button
                        className="btn-cv"
                        onClick={() => {
                            const link = document.createElement('a');
                            link.href = '/CV_dev.pdf';
                            link.download = 'Michele-Casani-CV.pdf';
                            link.click();
                        }}
                    >
                        CV
                    </button>
                </div>
            </section>
        </>
    )
}

export default AboutMe
