import React from "react";
import logo from "./logo.svg";
import "./main.scss";

const App = () => {
  return (
    <div className="app">
      <div className="title">Our Sass-BEM app</div>
      <div className="card">
        <div className="card__title">
          <div className="title title--no-margin title--white">
            The First Card of Many
          </div>
        </div>
        <div className="card__content">
          <div className="content">
            <div className="row">
              <div className="row__item info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                augue ex, aliquam pharetra faucibus in, fermentum vel nibh. Ut
                ipsum velit, convallis a cursus ut, pharetra ac purus. Aenean
                facilisis erat ut feugiat eleifend. Vestibulum quis neque nunc.
                Ut ut suscipit libero, eu ultrices eros. Praesent vel dictum
                nibh, eget gravida leo. Etiam porta finibus nisl. Cras pulvinar
                eros nunc, id varius enim feugiat a. Fusce eget mi vitae erat
                porta pellentesque vitae eget massa. Morbi posuere libero lorem,
                id rhoncus nunc tincidunt sit amet. Quisque bibendum arcu
                efficitur facilisis viverra.
              </div>
            </div>
            <div className="row">
              <img src={logo} alt="logo" className="image row__item" />
              <div className="button-group row__item">
                <button className="button">cancel</button>
                <button className="button">go!</button>
              </div>
            </div>
            <div className="row">
              <div className="row__item">
                <span className="link">home</span>
              </div>
              <div className="row__item">
                <span className="link">about</span>
              </div>
              <div className="row__item">
                <span className="link">contact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
