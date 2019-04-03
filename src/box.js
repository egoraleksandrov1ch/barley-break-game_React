import React from 'react';

export default class Box extends React.Component {
    constructor (props) {
        super(props);
        this.goFunc = this.goFunc.bind(this);
    };
    goFunc () {
        this.props.editArr(this.props.text, this.props.numb);
    };
    shouldComponentUpdate (nextProps) {
      return this.props.text !== nextProps.text;  
    };
    render () {
        return (
            <div 
                className='boxchild'
                onClick={this.goFunc}
            >
                <span>
                    {this.props.text}
                </span>
            </div>
        )
    };
}