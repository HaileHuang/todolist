import React, { Component } from 'react';
import { Button } from 'antd';
import { Input } from 'antd';

class Add extends Component {
  handleClick = () => {
    if(this.refs.content.refs.input.value) {
      this.props.add(this.refs.content.refs.input.value);
      this.refs.content.refs.input.value = "";
    }
  }

  render() {
    return (
      <div className="add">
        <Button type="primary" onClick={this.handleClick}>Add</Button>
        <Input placeholder="want to do" ref="content" style={{width: 200}} />
      </div>
    )
  }
}

export default Add