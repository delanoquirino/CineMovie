
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0px;
    box-sizing: border-box;
    a {
      text-decoration: none;
    }
  }

  :root {
  /* Your default theme */
  --background: white;
  --foreground: black;
  }

  [data-theme='dark'] {
  --background: black;
  --foreground: white;
  }


  .loader {
    width: 48px;
    height: 48px;
    border: 5px solid #FFF;
    border-bottom-color: #FF3D00;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 
  
    .loader_container {
      display: flex;
  justify-content: center;
  margin-top: 10px;
    }

`
