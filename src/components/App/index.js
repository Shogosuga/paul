import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../../stores/index'
import Header from '../Header/index';
import Navigation from '../Navigation/index';
import Main from '../Main/index';
import Test from '../Test/index';
import Footer from '../Footer/index';


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Header />
                <Navigation />
                <Main />

                <span>{this.props.fuga}</span>
                <button onClick={ () => this.props.handleClick() }>増加</button>
                <Footer />
            </Provider>
        )
    }
};

export default App;