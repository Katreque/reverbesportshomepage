import React, { Component } from 'react';

class ItemMenu extends Component {
  render() {
    return (
      <div>
        <div className="nav-item nav-link item-menu item-menu-text">
          <span>{this.props.nome}</span>
        </div>
      </div>
    );
  }
}

export default ItemMenu;
