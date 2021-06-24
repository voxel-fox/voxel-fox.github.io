import React from "react";
import Head from "next/head";
import { css, Global } from "@emotion/react";

const base = css`
  :root {
    --bg-color: #fff;
    --text-color: #000;
    --animate-duration: 0.5s;

    @media (prefers-color-scheme: dark) {
      --bg-color: #000;
      --text-color: #fff;
    }
  }

  html {
    font-family: "Lato", sans-serif;
    line-height: 1.15;

    @media (prefers-color-scheme: dark), (prefers-color-scheme: light) {
      &[data-theme="dark"] {
        --bg-color: #000;
        --text-color: #fff;
      }
      &[data-theme="light"] {
        --bg-color: #fff;
        --text-color: #000;
      }
    }
  }

  body {
    color: var(--text-color);
    background-color: var(--bg-color);
    transition-duration: 0.2s;
    transition-property: background-color, color;
  }

  a,
  a:visited,
  a:hover {
    color: inherit;
    cursor: pointer;
    text-decoration: none;
  }
`;

const GlobalStyles = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Global styles={base} />
    </>
  );
};

export default GlobalStyles;
