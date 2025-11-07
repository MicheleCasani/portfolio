import React from 'react'

const Technologies = () => {
    return (
        <>
            <section id="skills" className='row text-center margin'>
                <h2 className='text-white mb-4'>Technologies I Work With</h2>

                <div className='col-12 mt-2'>
                    <h3 className='text-white'>Frontend</h3>
                    <div className="d-flex flex-wrap justify-content-center gap-5">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" width="80" height="80" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" width="80" height="80" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" width="80" height="80" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="80" height="80" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" width="80" height="80" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" width="80" height="80" />
                    </div>
                </div>

                <div className='col-12 mt-5'>
                    <h3 className='text-white'>Backend</h3>
                    <div className="d-flex flex-wrap justify-content-center gap-4">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" width="80" height="80" />
                        <img src="https://skillicons.dev/icons?i=express" alt="Express.js" width="80" height="80" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" width="80" height="80" />
                    </div>
                </div>

                <div className='col-12 mt-5'>
                    <h3 className='text-white'>Tools</h3>
                    <div className="d-flex flex-wrap justify-content-center gap-4">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" width="80" height="80" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" alt="Jest" width="80" height="80" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" alt="Postman" width="80" height="80" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" alt="Vite" width="80" height="80" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="NPM" width="80" height="80" />
                    </div>
                </div>

            </section>
        </>
    )
}

export default Technologies
