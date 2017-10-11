import React, { Component } from 'react';
import { Button } from 'antd';

class Lists extends Component {

  handleClick = (item) => {
    this.props.onClick(item);
  }

  handleDel = (item) => {
    this.props.del(item);
  }

  render() {
    return (
      <ul style={{listStyleType: 'none'}}>
      {
        this.props.lists.map((item, i) => {
          return (
            <li key={i} className="listitem">
              <div>
                <input type="checkbox" checked={item.checked} onChange={this.handleClick.bind(this, item)}/>
                <span style={{fontSize: 20}}>{item.title}</span>
              </div>
              <div><Button type="danger" onClick={this.handleDel.bind(this, item)}>Del</Button></div>
            </li>
          )
        })
      }
      </ul>
    )
  }
}

export default Lists