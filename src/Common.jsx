import React from 'react'
import { NavLink } from 'react-router-dom'
const Common = (props) => {
    return (
        <>
          <section id='header' className=' d-flex align-items-center'>
                <div className="container-fluid" >
                    <div className='row' >
                        <div className='col-10 mx-auto' >
                            <div className='row'>
                            {/* means orderlg is large device large device me order 1 */}
                                <div className='col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'> 
                                    <h1>{props.text} <strong className='brand-name' >Sk ENG. Team</strong> </h1>
                                    <h2 className='my-3' >We are the team of talented Engineer to make products </h2>
                                    <div className='mt-3'>
                                        <NavLink className='btn-get-started' to={props.to}> {props.btn} </NavLink>
                                    </div>
                                </div>
                                <div className='col-lg-6 order-1 order-lg-2 header-img' >
                                    <img src={props.img} alt="error" className='img-fluid animated' />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>  
        </>
    )
}

export default Common
