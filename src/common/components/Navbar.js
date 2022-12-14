import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavItem = styled.div`
  text-transform: uppercase;
  color: var(--theme-hpurple);
  transition: all 0.2s;
  font-size: 1.1rem;
  letter-spacing: 0.1rem;

  color: ${props => props.isCurrent ? 'var(--theme-hpurple)' : 'white'};
  transition: all 0.2s;
  font-size: ${props => props.isCurrent ? '1.1rem' : '0.9rem'};

  &:hover {
    color: ${props => props.isCurrent ? 'white' : 'var(--theme-hpurple)'};
    text-shadow: 0px 0px 0.1rem var(--theme-hpurple);
  }
`;

// const LogoLuraripeSweep = styled.div`
//   text-transform: uppercase;
//   text-shadow: 0px 0px ${props => props.isCurrent ? '3px var(--theme-hpurple)' : '1px white'};
//   color: ${props => props.isCurrent ? 'var(--theme-hpurple)' : 'white'};
//   transition: all 0.2s;
//   font-size: 0.9rem;

//   &:hover {
//     color: var(--theme-hpurple);
//     text-shadow: 0px 0px 3px var(--theme-hpurple);
//   }
// `;

const routesNav = [
  {
    title: "all",
    url: "/"
  },
  {
    title: "contact",
    is_external: true,
    url: "https://www.linkedin.com/in/Showcase-dev/"
  },
  {
    title: "dev-portfolio",
    is_external: true,
    url: "https://pedroararipe.github.io/portfolio/"
  },
];

const routesNavExternal = routesNav.filter(route => route.is_external);
const routesNavLocal = routesNav.filter(route => !route.is_external);

export default function Navbar() {

  return (
    <nav className='container py-2 my-4 d-flex flex-column-reverse flex-lg-row justify-content-lg-between align-items-lg-center'>
      {/* <div className='d-none d-lg-block'></div> */}

      <div className='d-flex'>
        {/* <LogoLuraripeSweep>Luraripe Showcase</LogoLuraripeSweep> */}

        {routesNavLocal.map((route, index) => (
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
            <NavItem isCurrent className="fw-bold script-nav">
              {route.title}
            </NavItem>
          </NavLink>
          ))
        }
      </div>

      <div className="d-flex flex-column-reverse flex-lg-row">
        {routesNavExternal.map((route, index) => (
          <a
            key={index}
            href={route.url}
            className={index ? 'ms-lg-3' : 'my-3 my-lg-0'}
            // className={`${index ? 'ms-3' : ''}`}
            style={{textDecoration: "none"}}
          >                
            <NavItem className="fw-bold script-nav">
              {route.title}
            </NavItem>
          </a>
        ))}
      </div>
      {/* <NavItem>
        Categories
      </NavItem> */}
    </nav>
  )
}