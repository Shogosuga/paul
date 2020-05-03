import React, {Component} from 'react';
import Hoge from'./Hoge';

class Test extends Component {
    render() {
        return (
            <div>
                <Hoge param={1} />
                <Hoge param={2} />
                <Hoge param={3} />
            </div>
        )
    }
}

export default Test;