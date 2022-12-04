import { Component } from 'react';
import { PropTypes } from 'prop-types';

export class Filter extends Component {
  static propTypes = {
    filterFnc: PropTypes.func.isRequired,
    filterValue: PropTypes.string.isRequired,
  };

  render() {
    return (
      <input
        type="text"
        name="filter"
        onChange={this.props.filterFnc}
        value={this.props.filterValue}
      ></input>
    );
  }
}
