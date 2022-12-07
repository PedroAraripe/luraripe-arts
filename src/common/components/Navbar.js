import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavItem = styled.div`
  text-transform: uppercase;
  // color: ${props => !props.isSecondary ? "white": "gray"};
  text-shadow: 0px 0px 1px white;
  color: white;
  transition: all 0.2s;

  &:hover {
    color: var(--theme-hpurple);
    text-shadow: 0px 0px 3px var(--theme-hpurple);
  }
`;

const routesNav = [
  {
    title: "all",
    url: "/"
  },
  {
    title: "contact",
    is_external: true,
    url: "https://www.linkedin.com/in/luraripe-dev/"
  },
];

export default function Navbar() {

  return (
    <nav className='container py-2 my-4 d-flex justify-content-between align-items-center'>
      <div></div>
      
      <div className='d-flex'>
        {routesNav.map((route, index) => {

          if(route.is_external) {
            return (
              <a
                href={route.url}
                className={`${index ? 'ms-3' : ''}`}
                style={{textDecoration: "none"}}
              >                
                <NavItem className="script-nav">
                  {route.title}
                </NavItem>
              </a>
            )
          } else {
            return (
              <NavLink
                to={{
                  pathname: "/",
                  // search: `?project_name=${script.repositoryName}`,
                  state: { fromDashboard: true }
                }}
                className={`${index ? 'ms-3' : ''}`}
                // className={({ isActive }) => `${isActive ? 'active-route': ''} ${index !== scriptsNav.length -1 ? 'me-2 me-lg-3' : ''}`}
                key={index}
                style={{textDecoration: 'none'}}
              >
                <NavItem className="script-nav">
                  {route.title}
                </NavItem>
              </NavLink>
              
            )
          }
        })}
      </div>

      
      <NavItem isSecondary>
        Categories
      </NavItem>
    </nav>
  )
}