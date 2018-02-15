import React, { Component } from 'react';
import Product from './components/Product';

class App extends Component {
  constructor(props) {
    super(props);

    // Dump data
    this.state = {
      products: [
        {
          id: 1,
          name: 'Apple Iphone 6plus 32GB',
          price: '15.000.000',
          image: 'https://assets.mspcdn.net/t_c-desktop-normal,f_auto,q_auto,d_c:noimage.jpg/c/12176-65-4.jpg',
          status: true
        },
        {
          id: 2,
          name: 'Samsung galaxy s7',
          price: '18.000.000',
          image: 'https://www.att.com/catalog/en/skus/Samsung/Samsung%20Galaxy%20S7%20edge/overview/304969-pdp-overview-samsung-gs7_edge-tile_06.jpg',
          status: true
        },
        {
          id: 3,
          name: 'Oppo F1s',
          price: '6.000.000',
          image: 'data:image/jpeg;base64,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',
          status: true
        }
      ],
      isActive: true
    }

    // Binding action
    this.onToggleActive = this.onToggleActive.bind(this);
  }

  onToggleActive() {
    this.setState({
      isActive: !this.state.isActive
    });
  }

  render() {
    let elements = this.state.products.map((product, index) => {
      let result = '';
      if (product.status) {
        result = <tr key={index}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>
                    <span className="label label-success">{product.price}</span>
                  </td>
                </tr>
      }
      return result;
    });
    return (
      <div>

        <nav className="navbar navbar-inverse">
          <a className="navbar-brand">State</a>
        </nav>
        <div className="container">
          <div className="row">
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên sản phẩm</th>
                  <th>Giá</th>
                </tr>
              </thead>
              <tbody>
                { this.state.isActive ? elements : <tr></tr>}
              </tbody>
            </table>
            
            <button type="button" className="btn btn-primary" onClick={ this.onToggleActive }>
              Active { this.state.isActive ? 'true' : 'false'}
            </button>
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
