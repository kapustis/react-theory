import React from 'react'
import './Car.scss'

class Car extends React.Component {

    constructor(props) {
        // console.log(props.car);
        super(props);
        this.state = {
            ID: null,
            name: null,
            year: null,
            date: new Date()
        };

    }

    /** This method is deprecated. Don't use it in new code. */
    // UNSAFE_componentWillReceiveProps(nextProps) {
    //     console.log('Car componentWillReceiveProps', nextProps)
    // }


    // componentWillUpdate(nextProps, nextState) {
    //     console.log('Car componentWillUpdate', nextProps, nextState)
    // }

    static getDerivedStateFromProps(props, state) {
        if (props.car.name) {
            return {
                name: props.car.name
            }
        }
        return null;
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);

        this.setState((state, props) => {
            return {
                ID: props.car.id,
                name: props.car.name,
                year: props.car.year
            }
        })
    }

    // getSnapshotBeforeUpdate() {
    //     console.log('Car getSnapshotBeforeUpdate')
    //
    // }


    componentWillUnmount() {
        clearInterval(this.timerID);
        console.log('componentWillUnmount Car')
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }


    render() {
        // console.log(`Car id: ${this.state.ID} render`)
        return (
            <div className='Car'>
                <h3 className={'text-warning'}>Сar name: {this.state.name}</h3>
                <p>Year: <strong>{this.state.year}</strong></p>
                <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>

                <button
                    className={'btn btn-outline-warning'}
                    onClick={this.props.onChangeTitle}
                >
                    Set title name car
                </button>

                <div className={'input-group'}>
                    <input
                        className={'form-control'}
                        type="text"
                        onChange={this.props.onChangeName}
                        value={this.props.car.name}
                    />
                </div>

                <button
                    className={'btn btn-outline-danger'}
                    onClick={this.props.onDelete}
                >
                    Delete Car
                </button>

            </div>
        )
    }
}

export default Car
