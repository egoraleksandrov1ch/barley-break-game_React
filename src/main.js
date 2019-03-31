import React from 'react';
import Box from './box';

export default class Main extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ''],
            newArr: [],
        };
        this.editArr = this.editArr.bind(this);
    };
    componentDidMount () {
        let newArrTwo = [...this.state.arr];
        function newSort(a,b) {
            return Math.random() - 0.5;
        }
        newArrTwo.sort(newSort);
        this.setState( {
            newArr: newArrTwo,
        });
    };
    editArr (numb, text) {
        let newArrTwo = [...this.state.newArr];
        // console.log(newArrTwo);
        switch('') {
            case newArrTwo[numb - 1]:
                [newArrTwo[numb - 1], newArrTwo[numb]] = [newArrTwo[numb], newArrTwo[numb - 1]];
                // console.log(newArrTwo);
                break;
            case newArrTwo[numb + 1]:
                [newArrTwo[numb + 1], newArrTwo[numb]] = [newArrTwo[numb], newArrTwo[numb + 1]];
                // console.log(newArrTwo);
                break;
            case newArrTwo[numb - 4]:
                [newArrTwo[numb - 4], newArrTwo[numb]] = [newArrTwo[numb], newArrTwo[numb - 4]];
                // console.log(newArrTwo);
                break;
            case newArrTwo[numb + 4]:
                [newArrTwo[numb + 4], newArrTwo[numb]] = [newArrTwo[numb], newArrTwo[numb + 4]];
                // console.log(newArrTwo);
                break;
        }
        console.log(newArrTwo);
        this.setState( {
            newArr: newArrTwo,
        }, () => console.log(this.state.newArr));
    };
    render () {
        let box = this.state.newArr.map( (text, index) => {
            return(
                <Box 
                    key={index}
                    text={text}
                    numb={index}
                    editArr={this.editArr}
                />
            )
        });
        return (
            <main>
                <div className='boxboss'>
                    {box}
                </div>
            </main>
        )
    };
}