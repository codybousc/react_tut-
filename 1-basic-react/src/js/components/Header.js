import React from "react";

import Title from "./Header/Title";

export default class Header extends React.Component {
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle();
  }

  render() {
    this.props.changeTitle("newTitle");
    return (
      <div>
        <Title title={this.props.title} />
        <input onChange={this.handleChange.bind(this)} />
      </div>

    );
  }
}
