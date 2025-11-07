import React from 'react'

const AboutMe = () => {
    return (
        <>
            <section className='row p-5'>
                <div className='col-12 d-flex flex-column justify-content-center align-items-center p-5'>
                    <h1 style={{ fontSize: '80px' }} className="text-white">Creating digital solutions that <span className="highlight">matter</span></h1>
                    <div style={{ fontSize: '20px' }} className="text-white">I'm a dedicated full-stack developer who transforms complex challenges into elegant, high-performance web applications. With a keen eye for detail and a passion for innovation, I build robust systems that grow with your business needs.</div>
                </div>
                <div className='col-12 d-flex justify-content-center align-items-center p-2'>
                    <button className="btn-project me-5">My Projects</button>
                    <button className="btn-cv">CV</button>
                </div>
            </section>
        </>
    )
}

export default AboutMe
