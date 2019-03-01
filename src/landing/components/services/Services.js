import React from 'react';
import './styles.sass';

export default props => {
    return (
        <div id="services">
            <div className="container">
                <div className="statement">
                    <div className="title">What we do</div>
                    <div className="description">
                        CodeAim works across a range of technology and
                        industries. Our focus is on empowering and enabling each
                        other and making a difference.
                    </div>
                </div>
                <div className="areas">
                    <div className="area">
                        <div className="icon">
                            <i className="fa fa-laptop-code" />
                        </div>
                        <div className="heading">Software development</div>
                        <div className="offer">
                            Delivering professional, robust, highly-scalable
                            software solutions.
                        </div>
                    </div>
                    <div className="area">
                        <div className="icon">
                            <i className="fa fa-cogs" />
                        </div>
                        <div className="heading">Technical consultancy</div>
                        <div className="offer">
                            Producing effective solutions for technical and
                            business challenges.
                        </div>
                    </div>
                    <div className="area">
                        <div className="icon">
                            <i className="fa fa-chalkboard-teacher" />
                        </div>
                        <div className="heading">Training & mentoring</div>
                        <div className="offer">
                            Expert delivered high quality, end-to-end learning
                            experiences & training.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
