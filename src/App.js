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
    BeastsData.forEach((beast) => {
      beast.value = 0;
    });
    this.state = {
      BeastsData : BeastsData,
      newSelectedBeast: {},
      show: false,
    };
  }

  renderModel = (newBeastPropTitle) => {
    let newBeastProp = this.state.BeastsData.filter((beast) => beast.title === newBeastPropTitle)[0];
    newBeastProp.value++;
    this.setState({
      newSelectedBeast: newBeastProp,
      show: true,
      value: this.state.value + 1,
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
        <Main
        BeastsData={BeastsData}
        renderModel={this.renderModel} />
        <Footer />
        <SelectedBeast
          all={this.state.newSelectedBeast}
          show={this.state.show}
          close={this.close}
        />
      </div>
    );
  }
}

export default App;
