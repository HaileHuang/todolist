import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Counter {
  constructor() {
    this._count = 1;
  }

  up() {
    this._count += 1;
  }

  get count() {
    return this._count;
  }
}
var RunCounter = new Counter();

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {todoLists: []};
  }

  add = (value) => {
    let todoLists = this.state.todoLists;
    todoLists.push({
      type: 0,   // 0 = doing & 1 = did
      content: value,
      id: RunCounter.count,
    })
    RunCounter.up();
    this.setState({
      todoLists
    })
  }

  del = (currentItem) => {
    let todoLists = this.state.todoLists.filter((item) => {
      return item.id !== currentItem.id;
    })
    this.setState({
      todoLists
    })
  }

  changeState = (currentItem) => {
    let todoLists = this.state.todoLists.map((item) => {
      if (item.id === currentItem.id) {
        return {
          ...currentItem,
          type: !currentItem.type,
        }
      } else {
        return item;
      }
    })
    this.setState({
      todoLists
    })
  }

  render() {
    let doingLists = [], didLists = [];
    this.state.todoLists.forEach((item) => {
      if (item.type) {
        didLists.push(item);
      } else {
        doingLists.push(item);
      }
    })
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Add add={this.add} />
        <h4>Doing</h4>
        <Lists 
          lists={doingLists} 
          onClick={this.changeState}
          del={this.del}
        />
        <h4>Did</h4>
        <Lists
          lists={didLists}
          onClick={this.changeState}
          del={this.del}
        />
      </div>
    );
  }
}

class Add extends Component {
  handleClick = () => {
    if(this.refs.content.value) {
      this.props.add(this.refs.content.value);
      this.refs.content.value = "";
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Add</button>
        <input type="text" ref="content"/>
      </div>
    )
  }
}

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
            <li key={i}>
              <input type="checkbox" checked={item.type} onChange={this.handleClick.bind(this, item)}/>
              {item.content}
              <button onClick={this.handleDel.bind(this, item)}>Del</button>
            </li>
          )
        })
      }
      </ul>
    )
  }
}

export default App;
