import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 5rem;
    font-family: 'Rajdhani', sans-serif;
    color: ${props => props.theme.colors.primary};
    margin-top: 2rem;
  }
  p {
    margin-top: 1rem;
    font-size: 2rem;
    line-height: 32px;
    font-family: 'Rajdhani', sans-serif;
  }
  img {
    width: 100%;
  }
`
