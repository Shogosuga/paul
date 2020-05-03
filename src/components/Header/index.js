import React, {Component} from 'react';


class Header extends Component {
    render() {
        return (
            <div>
                <header className="header">
                    <h1 className="logo">
                        <span className="logo-name">Shogo Suga's</span>
                        <span className="logo-title">PORTFOLIO</span>
                        <span className="logo-desc">Webエンジニア - NeuroScientist　菅 翔吾</span>
                    </h1>
                </header> 
            </div>
        )
    }
};

export default Header