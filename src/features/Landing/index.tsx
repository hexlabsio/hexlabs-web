import * as React from 'react';
import { connect } from 'react-redux';

import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Services from './components/Services';

import { RootState } from '../../index-state';
import { IndexState } from './index-state';

import {
    STICKY_HEADER_CHECK,
    stickyHeaderCheck,
    TOGGLE_NAVIGATION,
    toggleNavigation,
} from './index-actions';

interface ActionProps {
  stickyHeaderCheck: (pageYOffset: number) => STICKY_HEADER_CHECK;
  toggleNavigation: () => TOGGLE_NAVIGATION;
}

export interface Props extends IndexState, ActionProps {
}

class Index extends React.Component<Props> {
  public handleScroll = () => this.props.stickyHeaderCheck(window.pageYOffset);

  public componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  public render(): React.ReactNode {
    return (
            <main>
                <Header
                    showStickyHeader={this.props.showStickyHeader}
                    navigationOpen={this.props.navigationOpen}
                    toggleNavigation={this.props.toggleNavigation}
                />
                <Introduction/>
                <Services/>
                <About/>
                <Contact/>
                <Footer/>
            </main>
    );
  }

  public componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}

export const mapStateToProps: (state: RootState) => IndexState = state => ({
  ...state.landing,
});

const mapDispatchToProps: ActionProps = { stickyHeaderCheck, toggleNavigation };

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Index);
