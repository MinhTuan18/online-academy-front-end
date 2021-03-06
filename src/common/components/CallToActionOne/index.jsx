import React from 'react';
import { Link } from 'react-router-dom';
import './call-to-action-one.css';

const CallToActionOne = () => {
    return (
        <section className="cta-one cta-one__home-one" style={{backgroundImage: `url(/images/teacher-1-1.jpg)`}}>
            <div className="container">
                <h2 className="cta-one__title">Kipso one & only <br />
                    mission is to extend <br />
                    your knowledge base</h2>
                <div className="cta-one__btn-block">
                    <Link className="thm-btn cta-one__btn">Learn More</Link>
                </div>
            </div>
        </section>
    );
};

export default CallToActionOne;
