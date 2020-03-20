import React from "react"
import styled from "styled-components"

const HeaderPage = ({ img, children }) => {
  return <IndexHeader img={img}>{children}</IndexHeader>
}

const IndexHeader = styled.header`
  min-height: calc(20vh);
  background: url(${props => props.img}) center repeat;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export default HeaderPage
