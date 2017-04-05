import React, {Component} from 'react';

import Logo from './logo';
import UrlInput from './url/url_input';
import UrlList from './url/url_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <Logo/>
        <UrlInput/>
        <UrlList/>
      </div>
    );
  }
}
