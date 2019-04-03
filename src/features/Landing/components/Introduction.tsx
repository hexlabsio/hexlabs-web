import React from 'react';
import './Introduction-styles.sass';
import {NavHashLink as NavLink} from 'react-router-hash-link'

const introductionImage = require('./../../../assets/images/introduction.png');
const waveImage = require('./../../../assets/images/wave.png');

export interface IntroductionProps {
}

const Introduction: React.FunctionComponent<IntroductionProps> = ({}: IntroductionProps): JSX.Element =>
    <div id="introduction" className="introduction">
        <div className="banner">
            <div className="container">
                <div className="prose">
                    <div className="title">
                        HexLabs provides digital solutions and consultancy
                    </div>
                    <div className="core">
                        Passionate experienced software engineers and
                        designers offering high quality crafted software,
                        supporting innovation & vision fulfilment.
                    </div>
                    <NavLink className="action"
                             to="#contact"
                             smooth
                    >
                        Contact us
                    </NavLink>
                </div>
                <div className="image">
                    <img src={introductionImage} alt="Introduction"/>
                </div>
            </div>
        </div>
        <div className="wave">
            <img src={waveImage} alt="Wave"/>
        </div>
    </div>;

export default Introduction
