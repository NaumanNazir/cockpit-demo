import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import axios from 'axios';

import './serverInfo.css';

class ServerInfo extends Component {
  state = {
    DataStatus: []
  }

  componentDidMount() {
    axios.get('http://127.0.0.1')
    .then(response => {
      console.log(response);
    })
    .catch(error =>{
      console.log(error);
    })
  }

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="4">Server Information </MDBCol>
          <MDBCol md="8">
            Server Status
            <MDBCol md="8"></MDBCol>
            <MDBCol md="8"></MDBCol>
            <MDBCol md="8"></MDBCol>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }
}

export default ServerInfo;
