import React, {Component} from 'react';


class Navigation extends Component {
    render() {
        return (
            <div>
                <nav className="gnav">
                    <ul className="gnav-list">
                        <li className="gnav-item"><a href="#feature-section">FEATURE</a></li>
                        <li className="gnav-item"><a href="#works-section">WORKS</a></li>
                        <li className="gnav-item"><a href="#about-section">ABOUT</a></li>
                        <li className="gnav-item"><a href="#skill-section">SKILL</a></li>
                        <li className="gnav-item"><a href="#contact-section">CONTACT</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
};

export default Navigation;