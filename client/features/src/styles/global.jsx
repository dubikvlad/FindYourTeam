import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    /*
    1. Use a more-intuitive box-sizing model.
    */
        *, *::before, *::after {
        box-sizing: border-box;
    }
    /*
    2. Remove default margin
    */
    * {
        margin: 0;
        padding: 0;
    }

    /*
    3. Allow percentage-based heights in the application
    */
    html, body {
        font-family: ${(props) => props.theme.fonts.Gotham};
        font-size: 14px;
    }
`
