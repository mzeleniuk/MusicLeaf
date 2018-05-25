import React from "react";

class Footer extends React.Component {
  render() {
    const currentYear = new Date().getFullYear();

    return (
      <div className="footer">
        <p>Michael Zelenyuk, {currentYear}</p>
      </div>
    )
  };
};

export default Footer;
