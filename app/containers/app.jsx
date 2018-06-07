import React from "react";
import Axios from "axios";

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    this.randomTrack();
  };

  render () {
    return (
      <div className="music-leaf"></div>
    );
  };
};

export default AppContainer;
