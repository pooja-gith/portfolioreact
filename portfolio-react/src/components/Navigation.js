import React from 'react'
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import avatar from './images/image4.jpg'

function Navigation() {
    return (
        <NavigationStyled>
      <div className="avatar">
          <img src={avatar} alt=""/>
      </div>
      <ul className="nav-item">
          <li className="nav-items">
              <NavLink to="/home"activeClassName="active-class">Home</NavLink>
          </li>
          <li className="nav-items">
              <NavLink to="/about"activeClassName="active-class">About</NavLink>
          </li>
          <li className="nav-items">
              <NavLink to="/resume"activeClassName="active-class">Resume</NavLink>
          </li>
          <li className="nav-items">
              <NavLink to="/portfolios"activeClassName="active-class">Portfolios</NavLink>
          </li>
          <li className="nav-items">
              <NavLink to="/blogs"activeClassName="active-class">Blogs</NavLink>
          </li>
          <li className="nav-items">
              <NavLink to="/contact"active-className="active-class">Contact</NavLink>
          </li>
      </ul>
     <footer className="footer">
         <p>@2021 My Portfolio Website</p>
     </footer>

        </NavigationStyled>
    )
}
const NavigationStyled = styled.nav`
display: flex;
justify-content: space-between;
flex-direction: column;
align-items: center;
height: 100%;
width: 100%;
.avatar{
    width: 80%;
    img{
        width: 100%;
        border-radius: 50%;
        border: 8px solid var(--border-color);
    }
}


`;
export default Navigation
