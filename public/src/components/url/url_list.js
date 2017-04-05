import React, {Component} from 'react';

import UrlRow from './url_row';

class UrlList extends Component {
  render() {
    return (
      <div>
        <table className="table table-hover">
          <thead>
          <tr>
            <th>Original URL</th>
            <th>Created On</th>
            <th>Times Used</th>
            <th>Short URL</th>
          </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>
    )
  }
}

export default UrlList;