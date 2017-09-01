import React from 'react';

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

            <ul className="product-list">
              <li className="product-item">
                <a className="upvote-button" href="#">
                  <span>
                    <i className="fa fa-sort-asc"></i>
                  </span>
                  <br/>
                  {this.state.productList[0].upvote}
                </a>
                <img className="product-item-media" src={this.state.productList[0].media} />
                <section className="product-item-info">
                  <a href="#">
                    <h2>{this.state.productList[0].name}</h2>
                  </a>
                  <p>{this.state.productList[0].description}</p>
                  <a href="#">
                    <img className="small-avatar" src={this.state.productList[0].maker.avatar}/>
                  </a>
                </section>
                <a className="product-item-link" href={this.state.productList[0].link}>
                  <span>
                    <i className="fa fa-external-link"></i>
                  </span>
                </a>
              </li>

              <li className="product-item">
                <a className="upvote-button" href="#">
                  <span>
                    <i className="fa fa-sort-asc"></i>
                  </span>
                  <br/>
                  {this.state.productList[1].upvote}
                </a>
                <img className="product-item-media" src={this.state.productList[1].media} />
                <section className="product-item-info">
                  <a href="#">
                    <h2>{this.state.productList[1].name}</h2>
                  </a>
                  <p>{this.state.productList[1].description}</p>
                  <a href="#">
                    <img className="small-avatar" src={this.state.productList[1].maker.avatar}/>
                  </a>
                </section>
                <a className="product-item-link" href={this.state.productList[1].link}>
                  <span>
                    <i className="fa fa-external-link"></i>
                  </span>
                </a>
              </li>
            </ul>



          </section>
        </section>
      </section>
    );
  }
}

export default HomePage;
