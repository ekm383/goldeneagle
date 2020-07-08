import React, { Component } from "react"
import styled from "styled-components"
import map from "../../../images/bg/golden-eagle-honolulu-map.png"
import { FaInstagram, FaFacebook, FaGoogle } from "react-icons/fa"

class Footer extends Component {
  state = {
    icons: [
      {
        id: 2,
        icon: <FaInstagram className="icon facebook-instagram" />,
        path: "https://www.instagram.com/restaurantmarketinghawaii",
      },
      {
        id: 3,
        icon: <FaGoogle className="icon google-icon" />,
        path: "https://www.google.com/restaurantmarketinghawaii",
      },
      {
        id: 1,
        icon: <FaFacebook className="icon facebook-icon" />,
        path: "https://www.facebook.com/restaurantmarketinghawaii",
      },
    ],
  }
  render() {
    return (
      <FooterWrapper>
        <div className="box contact">
          <h4>Contact Information</h4>
          <p>
            2334 S King St,
            <br />
            Honolulu, HI 96826
          </p>
          <p className="phone">(808) 955-5080</p>
          <p>Open Daily 10:30am - 9:00pm</p>
          {this.state.icons.map(item => (
            <a
              href={item.path}
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </FooterWrapper>
    )
  }
}

const FooterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 100%;
  background: var(--gray);
  color: var(--white);
  p,
  .phone {
    font-size: 0.8rem;
  }
  .box {
    flex-basis: 100%;
    padding: 2rem;
    text-align: center;
  }
  .map {
    background: lightgray;
    padding: 0;
  }
  a {
    color: var(--white);
    font-size: 2rem;
    line-height: 6rem;
    margin-right: 5px;
  }
  @media (max-width: 768px) {
    .box {
      flex-basis: 100%;
    }
    .phone {
      font-size: 0.8rem;
    }
  }
`

export default Footer
