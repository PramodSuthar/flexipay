import React, { useState } from 'react'

const ContactUs = () => {
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        address: '',
        message: '',
    });
    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUserData({ ...userData, [name]: value });
    };

    const submitData = async (event) => {
        event.preventDefault();
        const { firstName,
            lastName,
            phone,
            email,
            address,
            message } = userData;

        if (firstName &&
            lastName &&
            phone &&
            email &&
            address &&
            message) {

            const res = await fetch('https://flexipay-4bf07-default-rtdb.firebaseio.com/userFormData.json',
                {
                    method: "POST",
                    Headers: { 'content-Type': 'application/json', },
                    body: JSON.stringify({
                        firstName,
                        lastName,
                        phone,
                        email,
                        address,
                        message
                    })
                });
            if (res) {
                setUserData({
                    firstName: '',
                    lastName: '',
                    phone: '',
                    email: '',
                    address: '',
                    message: '',
                })
                alert('Data stored');
            } else {
                alert('Please fill the data');
            }

        }
        else {
            alert('Please fill the data');
        }
    }


    return (
        <>
            <section className='contactus-section'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto">
                            <div className="row">
                                <div className="contact-leftside col-12 col-lg-5">
                                    <h1 className="main-heading fw-bold">Connect with Our <br /> Sales team.</h1>
                                    <p className="main-hero-para">
                                        Lorem ipsum dolor sit amet consecteur adisicing elit. Deserunt eaque alias similique.
                                    </p>
                                    <figure>
                                        <img src="./images/hero1.jpg" alt="hero1img" className='img-fluid' />
                                    </figure>
                                </div>
                                <div className="contact-rightside col-12 col-lg-7">
                                    <form method='POST'>
                                        <div className="row">
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="text" name='firstName' placeholder='First Name' value={userData.firstName} onChange={postUserData} className='form-control' />
                                            </div>
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="text" name='lastName' placeholder='Last Name' value={userData.lastName} onChange={postUserData} className='form-control' />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="text" name='phone' placeholder='Phone Number' value={userData.phone} onChange={postUserData} className='form-control' />
                                            </div>
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="text" name='email' placeholder='Email ID' value={userData.email} onChange={postUserData} className='form-control' />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 contact-input-field">
                                                <input type="text" name='address' id='' placeholder='Add Address' value={userData.address} onChange={postUserData} className='form-control' />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <input type="text" name='message' id='' placeholder='Enter Your Message' value={userData.message} onChange={postUserData} className='form-control ' />
                                            </div>
                                        </div>
                                        <div className="form-check form-checkbox-style">
                                            <input class='form-check-input' type='checkbox' value='' id='flexCheckChecked' />
                                            <label class='form-check-label' className='main-hero-para'>I agree that the Flexipay may contact me at the email address or phone number above </label>
                                        </div>
                                        <button type='submit' className='btn btn-style w-100' onClick={submitData}>Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ContactUs