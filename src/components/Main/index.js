import React, {Component} from 'react';
import Feature from './feature';
import Works from './works';


class Main extends Component {
    render() {
        return (
            <div>
                <main className="contents">
                    <Feature />
                    <Works />
                </main>
            </div>
        )
    }
};

export default Main;