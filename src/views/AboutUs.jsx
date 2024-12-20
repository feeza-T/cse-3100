import pic1 from "../assets/pic1.jpeg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpeg";

const AboutUs = () => {
    return (
        <div style={{ padding: '20px' }}>
            {/* Our Mission Section */}
            <div>
                <h1>Our Mission</h1>
                <p>
                    At Purrfect Adoption, our mission is to provide loving homes to pets in need.
                    We believe every cat deserves a safe and nurturing environment to thrive in.
                    Join us in making a difference, one adoption at a time.
                </p>
            </div>

            {/* Our History Section */}
            <div>
                <h1>Our History</h1>
                <p>
                    Founded in 2010, Purrfect Adoption started as a small group of volunteers 
                    passionate about rescuing cats. Over the years, we have grown into a 
                    full-fledged organization, finding homes for thousands of cats and educating 
                    the community about responsible pet ownership.
                </p>
            </div>

            {/* Our Team Section */}
            <div>
                <h1>Our Team</h1>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center', 
                        flexWrap: 'wrap',
                        marginTop: '20px',
                        gap: '30px', 
                    }}
                >
                    {/* Team Member 1 */}
                    <div
                        style={{
                            border: '1px solid #ddd',
                            borderRadius: '8px',
                            padding: '10px',
                            textAlign: 'center',
                            width: '250px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        <img
                            src={pic1}
                            alt="Team Member"
                            style={{
                                width: '100%',
                                height: '150px',
                                objectFit: 'cover',
                                borderRadius: '8px 8px 0 0',
                            }}
                        />
                        <div style={{ padding: '10px' }}>
                            <p><strong>Name:</strong> Alice Johnson</p>
                            <p><strong>Designation:</strong> Founder & CEO</p>
                        </div>
                    </div>

                    {/* Team Member 2 */}
                    <div
                        style={{
                            border: '1px solid #ddd',
                            borderRadius: '8px',
                            padding: '10px',
                            textAlign: 'center',
                            width: '250px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        <img
                            src={pic2}
                            alt="Team Member"
                            style={{
                                width: '100%',
                                height: '150px',
                                objectFit: 'cover',
                                borderRadius: '8px 8px 0 0',
                            }}
                        />
                        <div style={{ padding: '10px' }}>
                            <p><strong>Name:</strong> Mark Smith</p>
                            <p><strong>Designation:</strong> Adoption Coordinator</p>
                        </div>
                    </div>

                    {/* Team Member 3 */}
                    <div
                        style={{
                            border: '1px solid #ddd',
                            borderRadius: '8px',
                            padding: '10px',
                            textAlign: 'center',
                            width: '250px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        <img
                            src={pic3}
                            alt="Team Member"
                            style={{
                                width: '100%',
                                height: '150px',
                                objectFit: 'cover',
                                borderRadius: '8px 8px 0 0',
                            }}
                        />
                        <div style={{ padding: '10px' }}>
                            <p><strong>Name:</strong> Sarah Lee</p>
                            <p><strong>Designation:</strong> Volunteer Manager</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
