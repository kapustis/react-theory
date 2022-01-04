import React from 'react'
import './Car.scss'

function Car(props) {
    return (
        <div className='Car'>
            <h3 className={'text-warning'}>Сar name: {props.name}</h3>
            <p>Year: <strong>{props.year}</strong></p>

            <button
                className={'btn btn-outline-warning'}
                onClick={props.onChangeTitle}
            >
                Set title name car
            </button>

            <div className={'input-group'}>
                <input
                    className={'form-control'}
                    type="text"
                    onChange={props.onChangeName}
                    value={props.name}
                />
            </div>

            <button
                className={'btn btn-outline-danger'}
                onClick={props.onDelete}
            >
                Delete Car
            </button>

        </div>
    )
}

export default Car
