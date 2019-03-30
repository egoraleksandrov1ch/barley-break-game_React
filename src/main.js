import React from 'react';
import Box from './box';

export default class Main extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11, 12, 13, 14, 15, ''],
        }
    };
    render () {
        let newArr = [...this.state.arr];
        function newSort(a,b) {
            return Math.random() - 0.5;
        }
        newArr.sort(newSort);
        let box = newArr.map( (text, index) => {
            return(
                <Box 
                    key={index}
                    text={text}
                    numb={index}
                />
            )
        });
        console.log(newArr);
        return (
            <main>
                <div className='boxboss'>
                    {box}
                </div>
            </main>
        )
    };
}