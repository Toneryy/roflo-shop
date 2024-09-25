import React from 'react';
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../context';
import { ThemeConsumer } from './context/ThemeContexts';

class ProductList extends React.Component {
  render() {
    return (
      <ThemeConsumer>
        {({ theme }) => (
          <ProductConsumer>
            {(value) => (
              value.products.length > 0 ?
                <div className={theme ? 'py-5 bg-slate-900' : 'py-5 bg-slate-200'}>
                  <div className="container">
                    <div>
                      <Title className="text-light" name="Наша" title="продукция" />
                      <div className="row">
                        {value.products.map((product) => {
                          return <Product key={product.id} product={product} />;
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                :
                <div className={theme ? 'py-5 bg-slate-900' : 'py-5 bg-slate-200'}>
                  <div className="row">
                    <div className="col-10 mx-auto text-center text-title text-primary">
                      <text style={{
                        color: 'red'
                      }}>Простите, но по Вашему запросу ничего не найдено!</text>
                    </div>
                    <div className="col-10 mx-auto text-center text-title text-primary">
                      <text style={{
                        color: 'black'
                      }}>Проверьте правильность написания или попробуйте поискать что-то другое.</text>
                    </div>
                  </div>
                </div>

            )
            }
          </ProductConsumer>
        )}
      </ThemeConsumer>
    );
  }
}

export default ProductList;