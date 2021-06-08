import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component {
  render() {
    return (
      <div>
        {this.props.BeastsData.map((beasts) => {
          return (
            <HornedBeast
              title={beasts.title}
              value={beasts.value}
              images={beasts.image_url}
              description={beasts.description}
              addValueAndModel={this.props.addValueAndModel}
            />
          );
        })}
      </div>
    );
  }
}

export default Main;
