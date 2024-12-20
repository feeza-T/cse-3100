const ContactUs = () => {
    return (
        <div>
            <div >
                <h1>Contact us</h1>
                <p>We would love to hear from you. Please fill out the form below to get in touch with us.</p>
            </div>
            <form>
                <div>
                    <label data-for="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" />
                </div>
                <div>
                    <label data-for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" />
                </div>
                <div>
                    <label data-for="phone">Phone:</label>
                    <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default ContactUs;
