import styled from 'styled-components'

export const Container = styled.div`
  height: 60px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 30px;

  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
`
