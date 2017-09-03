import React from 'react';
import ProductList from '../Product/ProductList';
import Firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAWjsf11fwPx5mALdupWde9qlMjoCPp9Ng",
  authDomain: "code-hunt-demo-bf57c.firebaseapp.com",
  databaseURL: "https://code-hunt-demo-bf57c.firebaseio.com",
  projectId: "code-hunt-demo-bf57c",
  storageBucket: "code-hunt-demo-bf57c.appspot.com",
  messagingSenderId: "148978170909"
};

Firebase.initializeApp(config);

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      productList: []
    }

    Firebase.database().ref('products').on('value', (snapshot) => {
      var products = snapshot.val();

      this.setState({
        productList: products
      })
    });
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
