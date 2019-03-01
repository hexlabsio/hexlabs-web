import React from 'react';
import { connect } from 'react-redux';

import Introduction from './components/introduction/Introduction';
import Services from './components/services/Services';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { deriveStickyHeader, toggleNavigation } from './LandingActions';

class LandingContainer extends React.Component {
    handleToggleNavigation = () => this.props.handleToggleNavigation();
    handleScroll = event => this.props.handleScroll(event);

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    render() {
        return (
            <main>
                <Header
                    stickyHeader={this.props.landing.stickyHeader}
                    navigationOpen={this.props.landing.navigationOpen}
                    handleToggleNavigation={this.handleToggleNavigation}
                />
                <Introduction />
                <Services />
                <About />
                <Contact />
                <Footer />
            </main>
        );
    }
}

const mapStateToProps = state => {
    return {
        landing: state.landing,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleScroll: () => {
            dispatch(deriveStickyHeader(window.pageYOffset));
        },
        handleToggleNavigation: () => {
            dispatch(toggleNavigation());
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LandingContainer);
