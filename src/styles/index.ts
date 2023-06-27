import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  *,
  *::before,
  *::after {
  box-sizing: border-box;
  }

  *:not(dialog) {
    margin: 0;
  }

  html { color-scheme: dark; }

  :root {
    /*--color-text: #ede8f8;
    --color-bg: #130b23;
    --color-primary-btn: #d6e6b2;
    --color-secondary-btn: #040208;
    --color-accent: #d6e6b2;*/

    /*--color-text: #faf2e0;
    --color-bg: #0d0a02;
    --color-primary-btn: #46e2b1;
    --color-secondary-btn: #2c2007;
    --color-accent: #7b1aa8;*/

    --color-text: #ffffff;
    --color-bg: #141a15;
    --color-primary-btn: #302f3c;
    --color-secondary-btn: #1d251e;
    --color-accent: #3c302f;

    --fs-300: clamp(1.00rem, calc(0.96rem + 0.22vw), 1.13rem);
    --fs-400: clamp(1.20rem, calc(1.13rem + 0.36vw), 1.41rem);
    --fs-500: clamp(1.44rem, calc(1.33rem + 0.55vw), 1.76rem);
    --fs-600: clamp(1.73rem, calc(1.56rem + 0.82vw), 2.20rem);
    --fs-700: clamp(2.07rem, calc(1.84rem + 1.17vw), 2.75rem);
    --fs-800: clamp(2.49rem, calc(2.16rem + 1.64vw), 3.43rem);

    --ff-base: 'PT Sans', sans-serif;
    --ff-head: 'Nunito', sans-serif;
  }

  body {
    font-family: var(--ff-base);
    font-size: var(--fs-400);
    line-height: 1.5;

    background-color: var(--color-bg);
    color: var(--color-text);
  }

  h1, h2, h3 {
    font-family: var(--ff-head);
    line-height: 1.2;
  }

  h1 {
    font-size: var(--fs-700);
  }

  h2 {
    font-size: var(--fs-600);
  }

  h3 {
    font-size: var(--fs-500);
  }

  button {
    padding: 4px 8px;
    border: none;
    border-radius: 0.25em;

    font-size: 1rem;
    font-weight: bold;

    background-color: var(--color-primary-btn);
    color: var(--color-text);

    cursor: pointer;

    :hover {
      background-color: var(--color-accent);
      color: var(--color-text);
    }
  }

  input {
    padding: 4px 8px;
    border: none;
    border-radius: 0.25em;

    font-size: 1rem;

    background-color: var(--color-primary-btn);
  }
`

export const Main = styled.main`
  width: min(100% - 3rem, 80ch);
  margin-inline: auto;
`

export default EstiloGlobal
