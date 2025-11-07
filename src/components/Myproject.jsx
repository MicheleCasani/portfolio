const projectdata = [
    {
        id: 1,
        name: "Cane Ideale",
        image: "/comparatore.png",
        description: "Frontend development of Ideal Dog, platform for search, wishlist and comparison of dog breeds.",
        githubLink: "https://github.com/MicheleCasani/progetto-finale-spec-frontend-front"
    },
    {
        id: 2,
        name: "Weather App",
        image: "/meteo.png",
        description: "Personal project of a web application to search cities and display current weather and 5-day forecasts.",
        githubLink: "https://github.com/MicheleCasani/meteo_app"
    },
    {
        id: 3,
        name: "Travel Agency Management MVP",
        image: "/mvp.png",
        description: "Team realization of a Minimum Viable Product to demonstrate to the client the potential of a complete travel management system.",
        githubLink: "https://github.com/MicheleCasani/boolroad_gruppo_5"
    },
    {
        id: 4,
        name: "Manifesti POP",
        image: "/manifesti-pop.png",
        description: "Team-developed full-stack e-commerce platform dedicated to selling artistic posters inspired by Italian pop music.",
        frontendRepo: "https://github.com/FrancescoPalazzo97/manifesti-pop-frontend",
        backendRepo: "https://github.com/FrancescoPalazzo97/manifesti-pop-backend"
    },
    {
        id: 5,
        name: "Coccole Canine",
        image: "/toelettatura.png",
        description: "Developed a professional full-stack management system dedicated to pet grooming management. (Work in progress...)",
        frontendRepo: "https://github.com/MicheleCasani/gestionale_toilettatura_frontend",
        backendRepo: "https://github.com/MicheleCasani/gestionale_toilettatura_backend"

    },
]
const Myproject = () => {
    return (
        <section id="projects" className='row mb-5'>
            <div className='col-12 text-center mb-2'>
                <h2 className='text-white' style={{ fontSize: '60px' }}>My Projects</h2>
            </div>
            <div className='col-12'>
                <div className='row  d-flex justify-content-center'>
                    {projectdata.map(project => (
                        <div key={project.id} className='col-lg-4 col-md-6 col-12 mb-4 d-flex justify-content-center'>
                            <div className='box h-100 flex-column p-3' style={{ width: '600px', height: '600px' }}>
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className='img mb-4'
                                    style={{ height: '200px', objectFit: 'cover', width: '100%' }}
                                />
                                <h5 className='text-white mb-3'>{project.name}</h5>
                                <p className='text-white flex-grow-1' style={{ fontSize: '14px' }}>
                                    {project.description}
                                </p>

                                {/* Logica condizionale per i bottoni repository */}
                                {project.frontendRepo && project.backendRepo ? (
                                    // Se ha frontend e backend separati
                                    <div className="d-flex gap-2">
                                        <a
                                            href={project.frontendRepo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className='btn-link btn-outline-light mt-2 flex-fill d-flex align-items-center justify-content-center gap-1'
                                            style={{ textDecoration: 'none' }}
                                        >
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" width="16" height="16" style={{ filter: 'invert(1)' }} />
                                            Frontend
                                        </a>
                                        <a
                                            href={project.backendRepo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className='btn-link btn-outline-light mt-2 flex-fill d-flex align-items-center justify-content-center gap-1'
                                            style={{ textDecoration: 'none' }}
                                        >
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" width="16" height="16" style={{ filter: 'invert(1)' }} />
                                            Backend
                                        </a>
                                    </div>
                                ) : (
                                    // Se ha un solo repository
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='btn-link mt-2 d-flex align-items-center justify-content-center gap-2'
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" width="18" height="18" style={{ filter: 'invert(1)' }} />
                                        View on GitHub
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Myproject
