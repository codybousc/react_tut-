import React from "react";

import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "C'est la vie, broskettti"
    };
  }

  changeTitle(title) {
    this.setState({title})
  }
  render() {
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
        <Header title={"It's true"} />

        <Footer />
      </div>
    );
  }
}
