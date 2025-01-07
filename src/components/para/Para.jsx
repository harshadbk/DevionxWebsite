import React from 'react';
import "./Para.css";
import { FaCircleCheck } from "react-icons/fa6";

function Para() {
    return (
        <div className='main'>
            <div>
                <div className='first'>
                    <h2>Our Story</h2>
                    <p>
                        Founded with a vision to revolutionize the digital landscape, DevionX Technologies has emerged as a leading force in software development and technological innovation. Our journey began with a commitment to delivering exceptional value through cutting-edge solutions.
                    </p>
                </div>

                
                <div className='second'>
                    <h2>Our Mission</h2>
                    <p>
                        To empower businesses with innovative digital solutions that drive growth, efficiency, and success in the modern technological landscape. We strive to be at the forefront of technological advancement, particularly in AI and ML applications.
                    </p>
                </div>

                {/* Stats Section */}
                <div className='third'>
                    <div className='fourth'>
                        <h1>200+</h1>
                        <p>Projects Completed</p>
                    </div>
                    <div className='fifth'>
                        <h1>50+</h1>
                        <p>Expert Team Members</p>
                    </div>
                </div>
            </div>


            <div className='men'>
                <div className='ten'>
                    <div className='checkbox'>
                        <h1>Why Choose Us</h1>


                        <div className='color'>
                            <div>
                                <FaCircleCheck
                                    style={{
                                        color: "#5C9DF6",
                                        backgroundColor: "#E9F2FE",
                                        padding: "10px",
                                        borderRadius: "8px",
                                        fontSize: "24px"
                                    }}
                                />
                            </div>
                            <div className='pen'>
                                <h3>Expert Team</h3>
                                <p>Highly skilled professionals with extensive industry experience</p>
                            </div>
                        </div>


                        <div className='color'>
                            <div>
                                <FaCircleCheck
                                    style={{
                                        color: "#9C6ADE",
                                        backgroundColor: "#F5EBFF",
                                        padding: "10px",
                                        borderRadius: "8px",
                                        fontSize: "24px"
                                    }}
                                />
                            </div>
                            <div className='pen'>
                                <h3>Innovation First</h3>
                                <p>Cutting-edge solutions using the latest technologies</p>
                            </div>
                        </div>


                        <div className='color'>
                            <div>
                                <FaCircleCheck
                                    style={{
                                        color: "#48C774",
                                        backgroundColor: "#E6FCEB",
                                        padding: "10px",
                                        borderRadius: "8px",
                                        fontSize: "24px"
                                    }}
                                />
                            </div>
                            <div className='pen'>
                                <h3>Timely Delivery</h3>
                                <p>Commitment to meeting deadlines without compromising quality</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='vision'>
                    <h2> Our Vision </h2>
                    <p>To be the global leader in delivering innovative technological solutions that shape the future of digital transformation and empower businesses worldwide.</p>
                    <button> Join Our Team </button>
                </div>

            </div>

        </div>
    );
}

export default Para;
