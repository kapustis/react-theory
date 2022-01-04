import React, {Component} from 'react';
import logo from './logo.svg';
import style from './App.module.scss';
import Car from './Car/Car'

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cars: [
                {id: 1, name: 'Ford Mustang GT', year: 1969},
                {id: 2, name: 'Audi A4 RS', year: 2018},
                {id: 3, name: 'Mazda RX7 FD3S', year: 2020}
            ],
            pageTitle: 'React components',
            showCars: false
        }
        // console.log("App constructor")
    }

    toggleCarsHandler = () => {
        this.setState({
            showCars: !this.state.showCars
        })
    }

    changeTitleHandler = (newTitle) => {
        this.setState({
            pageTitle: newTitle
        })
    }

    handelInput = (event) => {
        this.setState({
            pageTitle: event.target.value
        })
    }

    changeNameCar(name, index){
        const car = this.state.cars[index]
        car.name = name

        const cars = [...this.state.cars]
        cars[index] = car

        this.setState({cars})
    }
    deleteCarHandler(index) {
        const cars = this.state.cars.concat()
        cars.splice(index, 1)

        this.setState({cars})

    }

    render() {
        const isShow = this.state.showCars
        return (
            <div className="container">
                <div className="row">
                    <div className={style.App}>
                        <div className={style["App-logo"]}>
                            <img src={logo} alt="logo"/>
                        </div>
                        <h1 className={style.AppH1}>{this.state.pageTitle}</h1>
                        <input className="input-group-sm" type="text" onChange={this.handelInput} value={this.state.pageTitle}/>
                        <button className="btn btn-success" onClick={this.toggleCarsHandler}>
                            Show Cars
                        </button>

                        {isShow
                            ? this.state.cars.map((car,index) => {
                                return (
                                    <Car
                                        key={index}
                                        index={index}
                                        car={car}
                                        onChangeTitle={this.changeTitleHandler.bind(this, car.name)}
                                        onChangeName={event => this.changeNameCar(event.target.value, index)}
                                        onDelete={this.deleteCarHandler.bind(this, index)}
                                    />
                                )
                            })
                            : null
                        }

                    </div>
                </div>
            </div>
        );
    }
}

export default App;
