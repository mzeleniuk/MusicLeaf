import React from "react";
import ReactDOM from "react-dom";

import Search from "./components/search.jsx";
import Details from "./components/details.jsx";
import Player from "./components/player.jsx";

class App extends React.Component {
  render() {
    return (
      <div>
        <Search />
        <Details title={"Track Title"} />
        <Player />
      </div>
    );
  }
};

ReactDOM.render(
  <App />,
  document.getElementById("content")
);
