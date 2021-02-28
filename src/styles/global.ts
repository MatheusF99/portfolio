import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
      font-size: 62.5%;
    }

    body{
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
    }

    body, input, textarea, button{
        font: 400 1.6rem 'Rajdhani', sans-serif;
    }

    button{
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

`
