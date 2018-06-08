import React from "react";
import Axios from "axios";
import Sound from "react-sound";

class AppContainer extends React.Component {
  constructor(props) {
    super(props);

    this.client_id = "2f98992c40b8edf17423d93bda2e04ab";

    this.state = {
      track: { stream_url: "", title: "", artwork_url: "" },
      playStatus: Sound.status.STOPPED,
      elapsed: "00:00",
      total: "00:00",
      position: 0,
      playFromPosition: 0
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
  };

  prepareUrl(url) {
    return `${url}?client_id=${this.client_id}`;
  };

  handleSongPlaying(audio) {
    this.setState({
      elapsed: this.formatMilliseconds(audio.position),
      total: this.formatMilliseconds(audio.duration),
      position: audio.position / audio.duration
    });
  };

  formatMilliseconds(milliseconds) {
    const hours = Math.floor(milliseconds / 3600000);
    milliseconds = milliseconds % 3600000;

    const minutes = Math.floor(milliseconds / 60000);
    milliseconds = milliseconds % 60000;

    const seconds = Math.floor(milliseconds / 1000);
    milliseconds = Math.floor(milliseconds % 1000);

    return (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  handleSongFinished() {
    this.randomTrack();
  };

  render () {
    return (
      <div className="music-leaf">
        <Sound
          url={this.prepareUrl(this.state.track.stream_url)}
          playStatus={this.state.playStatus}
          onPlaying={this.handleSongPlaying.bind(this)}
          playFromPosition={this.state.playFromPosition}
          onFinishedPlaying={this.handleSongFinished.bind(this)}
        />
      </div>
    );
  };
};

export default AppContainer;
