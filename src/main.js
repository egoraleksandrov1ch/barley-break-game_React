import React from 'react';
import Box from './box';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ''];
export default class Main extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            newArr: [],
            emptyFieldNumb: 0,
            score: 0,
        };
        this.editArr = this.editArr.bind(this);
        this.newScore = 0;
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
                newEmptyFieldNumb = this.state.emptyFieldNumb - 1;
                this.newScore = this.newScore + 1;
                [newArrTwo[newEmptyFieldNumb], newArrTwo[this.state.emptyFieldNumb]] = 
                [newArrTwo[this.state.emptyFieldNumb], newArrTwo[newEmptyFieldNumb]];
                break;
            case newArrTwo[this.state.emptyFieldNumb + 1]:
                newEmptyFieldNumb = this.state.emptyFieldNumb + 1;
                this.newScore = this.newScore + 1;
                [newArrTwo[newEmptyFieldNumb], newArrTwo[this.state.emptyFieldNumb]] = 
                [newArrTwo[this.state.emptyFieldNumb], newArrTwo[newEmptyFieldNumb]];
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
        }, () => console.log(this.state.score));
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
                <div className='score'>
                    <span>
                        {this.state.score}
                    </span>
                </div>
                <div className='boxboss'>
                    {box}
                </div>
            </main>
        )
    };
}