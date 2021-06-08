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
      BeastsData: BeastsData,
      newSelectedBeast: {},
      show: false,
    };
  }

  addValueAndModel = (title) => {
    let newSelectedBeast = {};
    this.state.BeastsData.forEach((beast) => {
      if (beast.title === title) {
        beast.value++;
        newSelectedBeast = beast;
      }
    });
    this.setState({
      newSelectedBeast: newSelectedBeast,
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
        <Main
          BeastsData={this.state.BeastsData}
          addValueAndModel={this.addValueAndModel}
        />
        <Footer />
        <SelectedBeast
          title={this.state.newSelectedBeast.title}
          images={this.state.newSelectedBeast.image_url}
          description={this.state.newSelectedBeast.description}
          show={this.state.show}
          close={this.close}
        />
      </div>
    );
  }
}

export default App;
