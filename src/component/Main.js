import React from "react";
import HornedBeast from "./HornedBeast";
import FilteringForm from "./FilteringForm";
import CardColumns from "react-bootstrap/CardColumns";

class Main extends React.Component {

  
  constructor (props) {
    super(props)
    this.state = {
    filteredData : this.props.BeastsData,
    }
}

filterResult = (value) => {
    let newFilteredData = [];
    this.props.BeastsData.forEach((beast) => {
        switch(value) {
            case "One":
                if (beast.horns === 1) {
                    newFilteredData.push(beast);
                }
                break;
            case "Tow":
                if (beast.horns === 2) {
                    newFilteredData.push(beast);
                }
                break;
            case "Three":
                if (beast.horns === 3) {
                    newFilteredData.push(beast);
                }
                break;

            case "More":
                if (beast.horns === 100) {
                    newFilteredData.push(beast);
                }
                break;
            default:
                newFilteredData.push(beast);
        }
    })  
    this.setState({
        filteredData : newFilteredData,
      })
}

  render() {
    return (
      <div>
        <FilteringForm filterResult = {this.filterResult} />
        <CardColumns style={{display: 'flex', flexWrap: 'wrap' }}>
          {this.state.filteredData.map((beasts) => {
            return (
              <HornedBeast
                title={beasts.title}
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
