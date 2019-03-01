import React from 'react';

import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import LandingContainer from '../landing/LandingContainer';

const Routes = () => {
    return (
        <div className="site">
            <Route exact path="/" component={LandingContainer} />
        </div>
    );
};

export default connect(
    null,
    null,
    null,
    { pure: false }
)(Routes);
