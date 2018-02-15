import React, { Component } from 'react';

class Product extends Component {

  constructor(props) {
    super(props);

    this.addToCard = this.addToCard.bind(this);
  }

  addToCard() {
    console.log('Da mua thanh cong' + this.props.name);
  }

  render() {
    return (
      <div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="thumbnail">
            <img width="180" height="180" alt={this.props.name} src={this.props.image}/>
            <div className="caption">
              <h4>{this.props.name}</h4>
              <p>
                {this.props.price} VNĐ
              </p>
              <p>
                <a className="btn btn-primary" onClick={ this.addToCard }>Mua ngay</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
