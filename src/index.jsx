import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { AppContainer } from 'react-hot-loader';

document.body.style.margin = '0px';
document.body.style.color = '#444';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('react-app-root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  });
}
