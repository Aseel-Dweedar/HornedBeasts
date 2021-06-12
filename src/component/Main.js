import React from "react";
import HornedBeast from "./HornedBeast";
import FilteringForm from "./FilteringForm";
import CardColumns from "react-bootstrap/CardColumns";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredData: this.props.BeastsData,
    };
  }

  filterResult = (value) => {
    if (value === "All") {
      this.setState({
        filteredData: this.props.BeastsData,
      });
    } else {
      let newFilteredData = this.props.BeastsData.filter(
        (beast) => beast.horns === Number(value)
      );
      this.setState({
        filteredData: newFilteredData,
      });
    }
  };

  render() {
    return (
      <div>
        <FilteringForm filterResult={this.filterResult} />
        <CardColumns style={{ display: "flex", flexWrap: "wrap" }}>
          {this.state.filteredData.map((beasts, i) => {
            return (
              <HornedBeast
                key={i}
                title={beasts.title}
                value={beasts.value}
                images={beasts.image_url}
                description={beasts.description}
                renderModel={this.props.renderModel}
              />
            );
          })}
        </CardColumns>
      </div>
    );
  }
}

export default Main;
