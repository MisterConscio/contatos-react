import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  *,
  *::before,
  *::after {
  box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html { color-scheme: dark; }

  :root {
    --color-text: #ede8f8;
    --color-bg: #130b23;
    --color-primary-btn: #d6e6b2;
    --color-secondary-btn: #040208;
    --color-accent: #d6e6b2;

    --fs-300: clamp(1.00rem, calc(0.96rem + 0.22vw), 1.13rem);
    --fs-400: clamp(1.20rem, calc(1.13rem + 0.36vw), 1.41rem);
    --fs-500: clamp(1.44rem, calc(1.33rem + 0.55vw), 1.76rem);
    --fs-600: clamp(1.73rem, calc(1.56rem + 0.82vw), 2.20rem);
    --fs-700: clamp(2.07rem, calc(1.84rem + 1.17vw), 2.75rem);
    --fs-800: clamp(2.49rem, calc(2.16rem + 1.64vw), 3.43rem);
  }

  body {
    font-family: 'Nunito', sans-serif;
    font-size: var(--fs-400);
    line-height: 1.5;

    background-color: var(--color-bg);
    color: var(--color-text);
  }
`

export const Main = styled.main`
  width: min(100% - 3rem, 80ch);
  margin-inline: auto;
`

export default EstiloGlobal
