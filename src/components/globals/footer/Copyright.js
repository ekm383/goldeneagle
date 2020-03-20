import React from "react"
import styled from "styled-components"

const Copyright = () => {
  return (
    <CopyrightWrapper className="copyright">
      &copy; Copyright 2020 | Restaurant Marketing Hawaii
    </CopyrightWrapper>
  )
}

const CopyrightWrapper = styled.div`
  width: 100vw;
  position: fixed;
  bottom: 0;
  text-align: center;
  padding: 1rem 0rem 1rem 0rem;
  font-size: 0.8rem;
  color: var(--white);
  background: var(--mainBlue);
`

export default Copyright
