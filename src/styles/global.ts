import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    :root{
      --white: #fff;
      --background: #F2F3F5;
      --gray-line: #DCDDE0;
      --text: #666666;
      --text-highlight: #B3B9FF
      --title: #2E384D;
      --red: #E83F5B;
      --green: #4CD62B;
      --blue: #5965E0;
      --blue-dark: #4953B8;
      --blue-white: #2AA9E0;
    }F
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
    }

    body, input, textarea, button{
        font: 400 16px 'Inter', sans-serif;
    }

    button{
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`
