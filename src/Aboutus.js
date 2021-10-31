import React, { useState } from 'react'
import howToUse from './API/howToUse'


const Aboutus = () => {
    const [aboutData, setAboutData] = useState(howToUse);
    return (
        <>
            <section className='common-section our-services'>
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-12 col-lg-5 text-center our-service-leftside-img">
                            <img src="./images/hero3.jpg" alt="aboutus.img" />
                        </div>

                        {/* 1st section side data */}
                        <div className='col-12 col-lg-7 our-services-list'>
                            <h3 className="mini-title">
                                Available on Google Play Store and Apple App Store.
                            </h3>
                            <h1 className='main-heading'>How to use the App?</h1>
                            {aboutData.map((currentEle) => {
                                const { id, title, info } = currentEle
                                return <>
                                    <div className="row our-services-info" key={id}>
                                        <div className="col-1 our-services-number">{id}</div>
                                        <div className="col-10 our-services-data">
                                            <h2>{title}</h2>
                                            <p className="main-hero-para">{info}</p>
                                        </div>
                                    </div>
                                </>
                            })}

                            <br />
                            <button className="btn-style btn-style-border">learn more</button>
                        </div>
                    </div>

                </div>
            </section>

            {/* 2nd section over here */}
            <section className='common-section our-services our-services-rightside'>
                <div className="container mb-5">
                    <div className="row">
                        {/* 2nd section side data */}
                        <div className='col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-items-start flex-column'>
                            <h3 className="mini-title">
                                Support available in all major languages.
                            </h3>
                            <h1 className='main-heading'>World class support<br /> available 24/7</h1>
                            {aboutData.map((currentEle) => {
                                const { id, title, info } = currentEle
                                return <>
                                    <div className="row our-services-info" key={id}>
                                        <div className="col-1 our-services-number">{id}</div>
                                        <div className="col-10 our-services-data">
                                            <h2>{title}</h2>
                                            <p className="main-hero-para">{info}</p>
                                        </div>
                                    </div>
                                </>
                            })}


                            <br />
                            <button className="btn-style btn-style-border">learn more</button>
                        </div>
                        <div className="col-12 col-lg-5 our-service-rightside-img">
                            <img src="./images/callcenter.jpg" alt="aboutus.img" />
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Aboutus
