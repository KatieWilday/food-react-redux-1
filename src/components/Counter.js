import React from 'react'


class Counter extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        count: 0
      }
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState(({ count }) => ({
      count: this.state.count + 1
    }));
  };

  render() {
    return <button className="counter-button" onClick={this.handleClick}>Likes:{this.state.count}</button>;
  }
}


export default Counter
