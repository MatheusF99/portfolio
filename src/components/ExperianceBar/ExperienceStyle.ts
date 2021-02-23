import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  max-width: 992px;
  width: 100%;
  height: 80px;

  padding: 0 1.5rem;

  .experience-bar {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;

    span {
      font-size: 1rem;
    }
    > div {
      flex: 1;
      height: 4px;
      border-radius: 4px;
      background: ${props => props.theme.colors.grayLine};
      margin: 0 1.5rem;
      position: relative;
    }
  }
`
