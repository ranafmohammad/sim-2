import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { createHouse } from '../../redux/ducks/houseReducer'


class Wizard extends Component {
  state = {
    name: '',
    adress: '',
    city: '',
    state: '',
    zip: []
  }
  

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    const { name, adress, city, state, zip } = this.state;
    if (name && adress && city && state && zip) {
      this.props.createHouse({ name, adress, city, state, zip });
      this.props.history.replace('/houses');
    }
  };


  render() {
    return (
    <div>
     <form onSubmit={this.onSubmitHandler}>
          <input
            value={this.state.name}
            onChange={this.onChangeHandler}
            name="name"
            placeholder="name"
            type="text"
          />
          <input
            value={this.state.adress}
            onChange={this.onChangeHandler}
            name="adress"
            placeholder="adress"
            type="text"
          />
          <input
            value={this.state.city}
            onChange={this.onChangeHandler}
            name="city"
            placeholder="city"
            type="text"
          />
          <input
            value={this.state.state}
            onChange={this.onChangeHandler}
            name="state"
            placeholder="state"
            type="text"
          />
          <input
            value={this.state.zip}
            onChange={this.onChangeHandler}
            name="zip"
            placeholder="zip"
            type="text"
          />
          </form>
    </div>
    )
  }
}
const mapStateToProps = state => {
  return state;
}
export default connect(
  mapStateToProps,{ createHouse})(Wizard)