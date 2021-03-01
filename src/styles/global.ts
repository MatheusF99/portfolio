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

        font-family: 'Quicksand', sans-serif;
    }

    body, input, textarea, button{
        font: 400 1.6rem 'Quicksand', sans-serif;
    }

    button{
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

`
