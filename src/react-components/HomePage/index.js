import React from 'react';
import ProductList from '../Product/ProductList';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      productList: [
        {
          id: 1,
          name: 'Codecademy',
          link: 'https://codecademy.com',
          media: '/img/codecademy.jpeg',
          upvote: 169,
          description: 'Code for anyone',
          maker: {
            name: 'CodeAcademy',
            avatar: '/img/codecademy.png'
          }
        },
        {
          id: 2,
          name: 'Tech::Camp',
          link: 'https://tech-camp.in/',
          media: '/img/techcamp.jpg',
          upvote: 278,
          description: 'biggest coding school',
          maker: {
            name: 'TechCamp',
            avatar: '/img/techcamp.png'
          }
        }
      ]
    }
  }

  render() {
    return (
      <section>
        <header>
          <img src="/img/banner.jpeg" width="100%" />
        </header>

        <section>
          <section className="container">
            {
              this.state.productList
              ?
              <ProductList productList={this.state.productList}/>
              :
              null
            }
          </section>
        </section>
      </section>
    );
  }
}

export default HomePage;
