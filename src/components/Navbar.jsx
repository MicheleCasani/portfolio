import React from 'react'

const Navbar = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <section className='row' style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            backgroundColor: 'transparent'
        }}>
            <div className='col-12 d-flex justify-content-center align-items-center p-3'>
                <div className="box">
                    <button
                        className="button-nav"
                        onClick={() => scrollToSection('about')}
                    >
                        About me
                    </button>
                    <button
                        className="button-nav"
                        onClick={() => scrollToSection('skills')}
                    >
                        Skills
                    </button>
                    <button
                        className="button-nav"
                        onClick={() => scrollToSection('projects')}
                    >
                        Projects
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Navbar
