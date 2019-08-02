import React, { Component } from 'react';

class ItemMenu extends Component {
  render() {
    return (
      <div>
        <div className="item-menu header-text">
          <h2>{this.props.nome}</h2>
        </div>
      </div>
    );
  }
}

export default ItemMenu;
