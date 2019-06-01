import React from "react";
import logo from "./logo.svg";
import "./main.scss";

const App = () => {
  return (
    <div className="app">
      <div className="title">Our Sass-BEM app</div>

      <div className="info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed augue ex,
        aliquam pharetra faucibus in, fermentum vel nibh. Ut ipsum velit,
        convallis a cursus ut, pharetra ac purus. Aenean facilisis erat ut
        feugiat eleifend. Vestibulum quis neque nunc. Ut ut suscipit libero, eu
        ultrices eros. Praesent vel dictum nibh, eget gravida leo. Etiam porta
        finibus nisl. Cras pulvinar eros nunc, id varius enim feugiat a. Fusce
        eget mi vitae erat porta pellentesque vitae eget massa. Morbi posuere
        libero lorem, id rhoncus nunc tincidunt sit amet. Quisque bibendum arcu
        efficitur facilisis viverra.
      </div>
      <br />
      <button className="button">button</button>
      <br />
      <span className="link">link</span>
      <br />
      <img src={logo} alt="logo" className="image" />
    </div>
  );
};

export default App;
