import React from 'react';

export default class Box extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            text: this.props.text,
            numb: this.props.numb,
        };
        this.goFunc = this.goFunc.bind(this);
    };
    goFunc () {};
    render () {
        return (
            <div 
                className='boxchild'
                onClick={this.goFunc}
                id={this.state.numb}
            >
                <span>
                    {this.state.text}
                </span>
            </div>
        )
    };
}