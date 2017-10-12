import React, { Component } from 'react';
import './App.css';
import { connect } from 'dva';
import { Spin } from 'antd';
import Add from './components/Add';
import Lists from './components/Lists';
import { Button } from 'antd';

class App extends Component {

  constructor(props) {
    super(props);
  }

  add = (value) => {
    this.props.dispatch({
      type: 'todoitems/create',
      payload: {
        title: value,
        checked: false,
      }
    })
  }

  del = (currentItem) => {
    this.props.dispatch({
      type: 'todoitems/remove',
      payload: currentItem._id,
    });
  }

  changeState = (currentItem) => {
    this.props.dispatch({
      type: 'todoitems/update',
      payload: {
        id: currentItem._id,
        title: currentItem.title,
        checked: !currentItem.checked,
      }
    });
  }

  render() {
    let doingLists = [], doneLists = [];
    this.props.list.forEach((item) => {
      if (item.checked) {
        doneLists.push(item);
      } else {
        doingLists.push(item);
      }
    })
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        {
          this.props.loading ? 
          <div className="spain-load">
            <Spin />
          </div> :
          <div className="content">
            <Add add={this.add} />
            <h1 style={{textAlign: "left", marginTop: 30}}>Doing</h1>
            <Lists 
              lists={doingLists} 
              onClick={this.changeState}
              del={this.del}
            />
            <h1 style={{textAlign: "left", marginTop: 30}}>Done</h1>
            <Lists
              lists={doneLists}
              onClick={this.changeState}
              del={this.del}
            />
          </div>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { list } = state.todoitems;
  return {
    loading: state.loading.models.todoitems,
    list,
  };
}

function mapDispatchToProps(dispatch) {
  return {dispatch,};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
