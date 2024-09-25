import React, { Component } from 'react'

export default class Default extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title">
                        <h1>Ошибка</h1>
                        <h1 className="display-3">404</h1>
                        <h2>Страница не найдена</h2>
                        <h3>Запрашиваемый адрес 
                            <span className="text-danger">
                              {this.props.location.pathname}
                            </span>{""}
                            не найден</h3>
                    </div>
                </div>
            </div>
        )
    }
}
