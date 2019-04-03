import React from 'react';
import Box from './box';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ''];
export default class Main extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            newArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ''],
            emptyFieldNumb: 0,
            score: 0,
        };
        this.editArr = this.editArr.bind(this);
        this.newScore = 0;
        this.start = this.start.bind(this);
    };
    start () {
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
    editArr (text, numb) {
        let newArrTwo = [...this.state.newArr];
        let newEmptyFieldNumb = this.state.emptyFieldNumb;
        switch(text) {
            case newArrTwo[this.state.emptyFieldNumb - 1]:
                if (numb == 0 || numb == 1 || numb == 2 || numb == 4 || numb == 5 || numb == 6 || numb == 8 || numb == 9 || numb == 10 || numb == 12 || numb == 13 || numb == 14) {
                    newEmptyFieldNumb = this.state.emptyFieldNumb - 1;
                    this.newScore = this.newScore + 1;
                    [newArrTwo[newEmptyFieldNumb], newArrTwo[this.state.emptyFieldNumb]] = 
                    [newArrTwo[this.state.emptyFieldNumb], newArrTwo[newEmptyFieldNumb]];
                }
                break;
            case newArrTwo[this.state.emptyFieldNumb + 1]:
                if (numb == 1 || numb == 2 || numb == 3 || numb == 5 || numb == 6 || numb == 7 || numb == 9 || numb == 10 || numb == 11 || numb == 13 || numb == 14 || numb == 15) {
                    newEmptyFieldNumb = this.state.emptyFieldNumb + 1;
                    this.newScore = this.newScore + 1;
                    [newArrTwo[newEmptyFieldNumb], newArrTwo[this.state.emptyFieldNumb]] = 
                    [newArrTwo[this.state.emptyFieldNumb], newArrTwo[newEmptyFieldNumb]];
                }
                break;
            case newArrTwo[this.state.emptyFieldNumb - 4]:
                newEmptyFieldNumb = this.state.emptyFieldNumb - 4;
                this.newScore = this.newScore + 1;
                [newArrTwo[newEmptyFieldNumb], newArrTwo[this.state.emptyFieldNumb]] = 
                [newArrTwo[this.state.emptyFieldNumb], newArrTwo[newEmptyFieldNumb]];
                break;
            case newArrTwo[this.state.emptyFieldNumb + 4]:
                newEmptyFieldNumb = this.state.emptyFieldNumb + 4;
                this.newScore = this.newScore + 1;
                [newArrTwo[newEmptyFieldNumb], newArrTwo[this.state.emptyFieldNumb]] = 
                [newArrTwo[this.state.emptyFieldNumb], newArrTwo[newEmptyFieldNumb]];
                break;
        }
        this.setState( {
            newArr: newArrTwo,
            emptyFieldNumb: newEmptyFieldNumb,
            score: this.newScore,
        });
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
                <div className='header'>
                    <div className='score'>
                        <span>
                            {this.state.score}
                        </span>
                    </div>
                    <div className='start' onClick={this.start}>
                        <span>
                            START
                        </span>
                    </div>
                </div>
                <div className='boxboss'>
                    {box}
                </div>
            </main>
        )
    };
}