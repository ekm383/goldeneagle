import React from "react"
import styled from "styled-components"

const Button = ({ children, style }) => {
  return <ButtonWrapper style={style}>{children}</ButtonWrapper>
}

const ButtonWrapper = styled.button`
  width: 10rem;
  display: block;
  color: var(--white);
  background: var(--mainBlue);
  border: 1px solid var(--mainBlue);
  cursor: pointer;
  padding: 1rem 2rem;
  font-size: 1rem;
  letter-spacing: 1px;
  font-weight: 400;
  transition: all 0.2s linear;
  &:hover {
    background: transparent;
    border: 1px solid var(--mainBlue);
    color: var(--mainBlue);
  }
  &:focus {
    outline: none;
  }
`

export default Button
