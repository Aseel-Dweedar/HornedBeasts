import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./component/Main";
import SelectedBeast from "./component/SelectedBeast";
import BeastsData from "./component/BeastsData.json";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      newSelectedBeast: {},
      show: false,
    };
  }

  renderModel = (newBeastProp) => {
    this.setState({
      newSelectedBeast: newBeastProp,
      show: true,
    });
  };

  close = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    return (
      <div>
        <Header />
        <Main BeastsData={BeastsData}
          renderModel={this.renderModel} />
        <Footer />
        <SelectedBeast
          all = {this.state.newSelectedBeast}
          show={this.state.show}
          close={this.close}/>
      </div>
    );
  }
}

export default App;
