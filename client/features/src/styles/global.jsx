import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    /*
    1. Use a more-intuitive box-sizing model.
    */
        *, *::before, *::after {
        box-sizing: border-box;
    }

    ::placeholder {
        color: rgba(24, 24, 24, 0.2);
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
        font-family: ${({ theme }) => theme.fonts.Gotham};
        font-size: 14px;
        background-color: ${({ theme }) => theme.colors.mainBkg};
    }

    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }

      /*
    7. Remove built-in form typography styles
    */
    input, button, textarea, select {
        font: inherit;
    }

    /*
        8. Avoid text overflows
    */
    p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
    }

    /*
        9. Create a root stacking context
    */
    #root, #__next {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        isolation: isolate;
    }
`
