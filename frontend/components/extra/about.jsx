import React from 'react';
import Footer from '../footer/footer_container';

class About extends React.Component {

    render() {
        return(
            <>
            <Footer />
            <h1 className="about-main">About BrainFlash</h1>
            <h2 className="about-mini1">Our team is committed to improving how the
                world studies, using the latest cognitive
                science research
            </h2>
            </>
        )
    }

}

export default About;