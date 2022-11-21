import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
  --gray-100: #E1E1E6;
  --gray-300: #C4C4CC;
  --gray-400: #8D8D99;
  --gray-500: #7C7C8A;
  --gray-600: #323238;
  --gray-700: #29292E;
  --gray-800: #202024;
  --gray-900: #121214;

  --green-300: #00B37E;
  --green-400: #00966e;
  --green-500: #00875F;
  --green-700: #015F43;

  --red-500: #AB222E;
  --red-700: #7A1921;
  --red-1000: #E52E40;

  --yellow-500: #FBA94C;
  --yellow-700: #edf413;

  --background: #f8f2f5;

  
  --blue: #5429CC;
  --green: #33CC95;

  --blue-light: #6933FF;

  --text-title: #363F5F;
  --text-body: #969CB3;

  --shape: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;

    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 8px;
    }

  .react-modal-close {
    position: absolute;
    border: 0;
    background: transparent;
    top: 0;
    right: 0;
    padding: 1rem 1rem 0 0;
  }
  
`