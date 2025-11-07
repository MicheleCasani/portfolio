import React from 'react'

const Navbar = () => {
    return (
        <section className='row'>
            <div className='col-12 d-flex justify-content-center align-items-center p-3'>
                <div className="box">
                    <button className="button-nav">About me</button>
                    <button className="button-nav">Skills</button>
                    <button className="button-nav">Projects</button>
                </div>
            </div>
        </section>
    )
}

export default Navbar
