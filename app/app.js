import React from "react";
import ReactDOM from "react-dom";

import Search from "./components/search.jsx";
import Details from "./components/details.jsx";
import Player from "./components/player.jsx";
import Progress from "./components/progress.jsx";

class App extends React.Component {
  render() {
    return (
      <div>
        <Search />
        <Details title={"Track Title"} />
        <Player />
        <Progress position={"0.3"} elapsed={"00:00"} total={"0:40"} />
      </div>
    );
  }
};

ReactDOM.render(
  <App />,
  document.getElementById("content")
);
