import styled from 'styled-components'

export const Container = styled.div`
  height: 60px;
  width: 100%;

  display: flex;
  justify-content: center;

  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
`
