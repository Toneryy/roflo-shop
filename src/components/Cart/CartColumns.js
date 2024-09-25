import React from 'react';
import { ThemeConsumer } from '../context/ThemeContexts';

export default function CartColumns() {
    return (
        <ThemeConsumer>
        {({ theme }) => (
        <div className="container-fluid text-center d-none d-lg-block">
          <div className="row">
               <div className="col-10 mx-auto col-lg-2">
                   <p className={theme ? "text-uppercase text-light" : "text-uppercase"}>Товары</p>  
               </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className={theme ? "text-uppercase text-light" : "text-uppercase"}>Название продукта</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className={theme ? "text-uppercase text-light" : "text-uppercase"}>Цена</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className={theme ? "text-uppercase text-light" : "text-uppercase"}>Количество</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className={theme ? "text-uppercase text-light" : "text-uppercase"}>Удалить</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className={theme ? "text-uppercase text-light" : "text-uppercase"}>Стоимость</p>
                </div>
          </div>   
        </div>
          )}
          </ThemeConsumer>
    )
}
