import * as React from 'react';
import './Projects-styles.sass';

export interface ProjectsProps {
}

const projects = ({}: ProjectsProps) => (
    <div id="projects" className="projects">
        <div className="container">
            <div className="statement">
                <div className="title">What we've been doing</div>
                <div className="description">
                    Through open source contributions we enjoy sharing knowledge, working in the open, building community, learning & improving the way we work.
                </div>
            </div>
            <div className="contributions">
                <a className="contribution" href="https://kloudformation.hexlabs.io">
                    <div className="icon">
                        <i className="fa fa-code" />
                    </div>
                    <div className="heading">KloudFormation</div>
                    <div className="offer">
                        Write type safe AWS CloudFormation templates in Kotlin.
                    </div>
                </a>
                <a className="contribution" href="https://github.com/hexlabsio/kotlin-playground">
                    <div className="icon">
                        <i className="fa fa-play" />
                    </div>
                    <div className="heading">Kotlin Playground</div>
                    <div className="offer">
                        Embed runnable Kotlin with custom dependencies in the browser.
                    </div>
                </a>
                <a className="contribution" href="https://github.com/hexlabsio">
                    <div className="icon">
                        <i className="fa fa-inventory" />
                    </div>
                    <div className="heading">Cloud Inventory </div>
                    <div className="offer">
                        Visibility & insight into your cloud resources & their relationships.
                    </div>
                </a>
            </div>
        </div>
    </div>
);

export default projects;
