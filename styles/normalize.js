import React from "react";
import { css, Global } from "@emotion/react";

/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
/*! modified by Kara Todd */
const html = css`
  *,
  *:before,
  *:after {
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -webkit-overflow-scrolling: touch;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -webkit-overflow-scrolling: touch;
  }
`;

const sections = css`
  body {
    margin: 0;
  }
  main {
    display: block;
  }
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
`;

// const groupings = css`
//   hr {
//     box-sizing: content-box;
//     height: 0;
//     overflow: visible;
//   }
//   pre {
//     font-family: monospace, monospace;
//     font-size: 1em;
//   }
// `;

const textSemantics = css`
  a {
    background-color: transparent;
  }
  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }
  b,
  strong {
    font-weight: 700;
  }
  small {
    font-size: 80%;
  }
`;

// const textCode = css`
//   code,
//   kbd,
//   samp {
//     font-family: monospace, monospace;
//     font-size: 1em;
//   }
// `;

// const textSubSup = css`
//   sub,
//   sup {
//     font-size: 75%;
//     line-height: 0;
//     position: relative;
//     vertical-align: baseline;
//   }

//   sub {
//     bottom: -0.25em;
//   }

//   sup {
//     top: -0.5em;
//   }
// `;

const img = css`
  img {
    display: block;
    border-style: none;
  }
`;

// const forms = css`
//   button,
//   input,
//   optgroup,
//   select,
//   textarea {
//     font-family: inherit;
//     font-size: 100%;
//     line-height: 1.15;
//     margin: 0;
//   }

//   button,
//   input {
//     /* 1 */
//     overflow: visible;
//   }

//   button,
//   select {
//     /* 1 */
//     text-transform: none;
//   }

//   button,
//   [type="button"],
//   [type="reset"],
//   [type="submit"] {
//     -webkit-appearance: button;
//   }

//   button::-moz-focus-inner,
//   [type="button"]::-moz-focus-inner,
//   [type="reset"]::-moz-focus-inner,
//   [type="submit"]::-moz-focus-inner {
//     border-style: none;
//     padding: 0;
//   }

//   button:-moz-focusring,
//   [type="button"]:-moz-focusring,
//   [type="reset"]:-moz-focusring,
//   [type="submit"]:-moz-focusring {
//     outline: 1px dotted ButtonText;
//   }

//   fieldset {
//     padding: 0.35em 0.75em 0.625em;
//   }

//   legend {
//     box-sizing: border-box;
//     color: inherit;
//     display: table;
//     max-width: 100%;
//     padding: 0; /* 3 */
//     white-space: normal;
//   }

//   progress {
//     vertical-align: baseline;
//   }

//   textarea {
//     overflow: auto;
//   }

//   [type="checkbox"],
//   [type="radio"] {
//     box-sizing: border-box;
//     padding: 0;
//   }

//   [type="number"]::-webkit-inner-spin-button,
//   [type="number"]::-webkit-outer-spin-button {
//     height: auto;
//   }

//   [type="search"] {
//     -webkit-appearance: textfield;
//     outline-offset: -2px;
//   }

//   [type="search"]::-webkit-search-decoration {
//     -webkit-appearance: none;
//   }

//   [hidden] {
//     display: none;
//   }
// `;

export const NormalizeCSS = () => (
  <>
    <Global
      styles={css`
        ${html};
        ${sections};
        ${textSemantics};
        ${img};
      `}
    />
  </>
);

export default NormalizeCSS;
