import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';

import './sidebar.css';

function Sidebar() {
    return (
      <div className="sidebar-fixed position-fixed elegant-color">
        <MDBListGroup className="list-group-flush elegant-color">
          <div className="title">
            <MDBIcon icon="server" size="lg" className="ml-3" />
            Cockpit
          </div>
          <NavLink exact={true} to="/system" activeClassName="activeClass">
              <MDBListGroupItem hover>
                  System
              </MDBListGroupItem>
          </NavLink>
          <NavLink to="/logs" activeClassName="activeClass">
              <MDBListGroupItem hover>
                  Logs
              </MDBListGroupItem>
          </NavLink>
          <NavLink to="/networking" activeClassName="activeClass">
              <MDBListGroupItem hover>
                  Networking
              </MDBListGroupItem>
          </NavLink>
          <NavLink to="/accounts" activeClassName="activeClass">
              <MDBListGroupItem hover>
                  Accounts
              </MDBListGroupItem>
          </NavLink>
          <NavLink to="/services" activeClassName="activeClass">
              <MDBListGroupItem hover>
                  Services
              </MDBListGroupItem>
          </NavLink>
          <NavLink to="/diagnostic-reports" activeClassName="activeClass">
              <MDBListGroupItem hover>
                  Diagnostic Reports
              </MDBListGroupItem>
          </NavLink>
          <NavLink to="/software-updates" activeClassName="activeClass">
              <MDBListGroupItem hover>
                  Software Updates
              </MDBListGroupItem>
          </NavLink>
          <NavLink to="/terminal" activeClassName="activeClass">
              <MDBListGroupItem hover>
                  Terminal
              </MDBListGroupItem>
          </NavLink>
        </MDBListGroup>
      </div>
    );
}

export default Sidebar;