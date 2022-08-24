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
                <a className="contribution" href="https://github.com/hexlabsio">
                    <div className="icon">
                        <i className="fa fa-inventory" />
                    </div>
                    <div className="heading">klouds.io</div>
                    <div className="offer">
                        Visibility & insight into your cloud resources & their relationships.
                    </div>
                </a>
                <a className="contribution" href="https://github.com/hexlabsio/dynamo-ts">
                    <div className="icon">
                        <i className="fa fa-database" />
                    </div>
                    <div className="heading">Dynamo TS</div>
                    <div className="offer">
                        Makes interacting with DynamoDb simpler with a typed interface.
                    </div>
                </a>
                <a className="contribution" href="https://github.com/hexlabsio/kloudformation-ts">
                    <div className="icon">
                        <i className="fa fa-code" />
                    </div>
                    <div className="heading">
                        KloudFormation TS
                    </div>
                    <div className="offer">
                      Library allowing users to write type safe stacks in TypeScript.
                    </div>
                </a>
            </div>
        </div>
    </div>
);

export default projects;
