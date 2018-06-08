import React from "react";
import Axios from "axios";

class AppContainer extends React.Component {
  constructor(props) {
    super(props);

    this.client_id = "2f98992c40b8edf17423d93bda2e04ab";

    this.state = {
      track: { stream_url: "", title: "", artwork_url: "" }
    }
  };

  componentDidMount() {
    this.randomTrack();
  };

  randomTrack() {
    let _this = this;

    Axios.get(`https://api.soundcloud.com/playlists/209262931?client_id=${this.client_id}`)
      .then(function (response) {
        const trackLength = response.data.tracks.length;
        const randomNumber = Math.floor((Math.random() * trackLength) + 1);

        _this.setState({ track: response.data.tracks[randomNumber] });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render () {
    return (
      <div className="music-leaf"></div>
    );
  };
};

export default AppContainer;
