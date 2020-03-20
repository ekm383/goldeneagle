import React, { Component } from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

class NavBarLinks extends Component {
  state = {
    links: [
      {
        id: 0,
        path: "/",
        text: "home",
      },
      {
        id: 1,
        path: "#budget",
        text: "budget",
      },
      {
        id: 2,
        path: "#services",
        text: "services",
      },
      {
        id: 3,
        path: "#features",
        text: "features",
      },
      {
        id: 4,
        path: "#pricing",
        text: "pricing",
      },
      {
        id: 5,
        path: "/contact",
        text: "contact",
      },
      {
        id: 6,
        path: "/sign-up",
        text: "sign up",
      },
    ],
  }
  render() {
    return (
      <LinkWrapper open={this.props.navBarOpen}>
        {this.state.links.map(item => {
          return (
            <li key={item.id}>
              <AniLink fade to={item.path} className="nav-link">
                {item.text}
              </AniLink>
            </li>
          )
        })}
      </LinkWrapper>
    )
  }
}

const LinkWrapper = styled.ul`
  li {
    list-style-type: none;
  }
  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.8rem 1.2rem;
    color: var(--gray);
    font-size: 1rem;
    text-transform: capitalize;
    cursor: pointer;
    transition: all 0.5s linear;
    &:hover {
      background: var(--darkGray);
      color: var(--white);
      padding: 0.8rem 1.5rem;
    }
  }
  li:nth-child(7) {
    background: var(--mainBlue);
  }
  li:nth-child(7) > a {
    color: var(--white);
  }
  height: ${props => (props.open ? "335px" : "0px")};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  @media (min-width: 768px) {
    height: auto;
    display: flex;
    .nav-link {
      padding: 1rem 1.2rem;
      font-size: 1rem;
    }
    .nav-link:hover {
      background: var(--white);
      color: var(--mainBlue);
      padding: 1rem 1.2rem;
    }
    li:nth-child(7) > a:hover {
      color: var(--mainBlue);
    }
  }
`

export default NavBarLinks
