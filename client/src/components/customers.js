import React, { Component } from 'react';
import './zoho.css';

class Zoho extends Component {
  constructor() {
    super();
    this.state = {
      ApiDatat: []
    };
  }

  componentDidMount() {
    fetch('/api/callapi')
      .then(res => res.json())
      .then(ApiDatat => this.setState({ApiDatat}, () => console.log('ApiDatat fetched...', ApiDatat)));
  }

  render() {
    return (
      <div>
        <h2>ZOHO API</h2>
        <table id="zoho">

      <tr>

          <th><b>Name</b></th>
          <th><b>Conatct Name</b></th>
          <th><b>Email</b></th>
          <th><b>Country</b></th>
          <th><b>Country Code</b></th>

       </tr>


        {this.state.ApiDatat.map(api => 
        <tr>
          <td>{api.name}</td>
          <td>{api.contact_name}</td>
          <td>{api.email}</td>
          <td>{api.country}</td>
          <td>{api.country_code}</td>
        </tr>

        )}
        </table>
      </div>
    );



  }
}

export default Zoho;
