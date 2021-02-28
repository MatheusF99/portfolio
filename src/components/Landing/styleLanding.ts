import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};

  header{

    background: ${props => props.theme.colors.blueDark};

    width: 100%;
    max-width: 1676px;
    height: 80px;

    display: flex;
    justify-content: space-between;

    flex-direction: row;

    padding: 0 5rem;

    svg{
      margin: auto 0;

      width: 5rem;
      height: 5rem;
    }

    .toggle-Button{
      width: 4rem;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .one, .three{
        background: #000;
        height: 5px;
        width: 100%;
        margin: .1rem 0;
      }

      .two{
        background: #000;
        height: 5px;
        width: 60%;
        margin: .5rem 0 .5rem 1.6rem;

      }
    }
  }
`
