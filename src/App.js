import React, {Component} from 'react';
import './App.css';
import Car from './Car/Car'

class App extends Component {

    state = {
        cars: [
            {id:1, name: 'Ford', year: 2018},
            {id:2, name: 'Audi', year: 2016},
            {id:3, name: 'Mazda', year: 2010}
        ],
        pageTitle: 'React components'
    }

    changeTitleHandler = (newTitle) => {
        this.setState({
            pageTitle: newTitle
        })
    }

    handelInput = (event) => {
        // console.log(event.target.value)
        this.setState({
            pageTitle: event.target.value
        })
    }

    render() {
        const divStyle = {
            textAlign: 'center'
        }

        // const cars = this.state.cars

        return (
            <div style={divStyle}>
                <h1>{this.state.pageTitle}</h1>

                <input type="text" onChange={this.handelInput} value={this.state.pageTitle} />

                <button
                    onClick={this.changeTitleHandler.bind(this, 'Changed!')}
                >
                    Change title
                </button>
                {
                    this.state.cars.map((car) =>{
                        return(
                            <Car
                                key={car.id}
                                name={car.name}
                                year={car.year}
                                onChangeTitle={this.changeTitleHandler.bind(this, car.name)}
                            />
                        )
                    })
                }



                {/*<Car*/}
                {/*    name={cars[1].name}*/}
                {/*    year={cars[1].year}*/}
                {/*    onChangeTitle={() => this.changeTitleHandler(cars[1].name)}*/}
                {/*/>*/}

            </div>
        );
    }
}

export default App;
