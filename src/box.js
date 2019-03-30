import React from 'react';

export default class Box extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            text: this.props.text,
            numb: this.props.numb,
        }
    };
    render () {
        return (
            <div className='boxchild'>
                <span>
                    {this.state.text}
                </span>
            </div>
        )
    };
}