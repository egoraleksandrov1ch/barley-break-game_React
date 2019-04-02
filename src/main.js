import React from 'react';
import Box from './box';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ''];
export default class Main extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            newArr: [],
            emptyFieldNumb: 0,
        };
        this.editArr = this.editArr.bind(this);
    };
    componentDidMount () {
        let newArrTwo = arr;
        function newSort(a,b) {
            return Math.random() - 0.5;
        }
        newArrTwo.sort(newSort);
        this.setState( {
            newArr: newArrTwo,
            emptyFieldNumb: newArrTwo.indexOf(''),
        });
    };
    editArr (text) {
        let newArrTwo = [...this.state.newArr];
        let newEmptyFieldNumb = this.state.emptyFieldNumb;
        switch(text) {
            case newArrTwo[this.state.emptyFieldNumb - 1]:
                newEmptyFieldNumb = this.state.emptyFieldNumb -1;
                [newArrTwo[newEmptyFieldNumb], newArrTwo[this.state.emptyFieldNumb]] = 
                [newArrTwo[this.state.emptyFieldNumb], newArrTwo[newEmptyFieldNumb]];
                break;
            case newArrTwo[this.state.emptyFieldNumb + 1]:
                newEmptyFieldNumb = this.state.emptyFieldNumb + 1;
                [newArrTwo[newEmptyFieldNumb], newArrTwo[this.state.emptyFieldNumb]] = 
                [newArrTwo[this.state.emptyFieldNumb], newArrTwo[newEmptyFieldNumb]];
                break;
            case newArrTwo[this.state.emptyFieldNumb - 4]:
                newEmptyFieldNumb = this.state.emptyFieldNumb - 4;
                [newArrTwo[newEmptyFieldNumb], newArrTwo[this.state.emptyFieldNumb]] = 
                [newArrTwo[this.state.emptyFieldNumb], newArrTwo[newEmptyFieldNumb]];
                break;
            case newArrTwo[this.state.emptyFieldNumb + 4]:
                newEmptyFieldNumb = this.state.emptyFieldNumb + 4;
                [newArrTwo[newEmptyFieldNumb], newArrTwo[this.state.emptyFieldNumb]] = 
                [newArrTwo[this.state.emptyFieldNumb], newArrTwo[newEmptyFieldNumb]];
                break;
        }
        console.log(newArrTwo);
        this.setState( {
            newArr: newArrTwo,
            emptyFieldNumb: newEmptyFieldNumb,
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