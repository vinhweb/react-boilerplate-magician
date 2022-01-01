import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  #app {
    background: linear-gradient(180deg, #01061C 0%, #000B30 26.56%, #010824 59.9%, #020D35 100%);
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    line-height: 1.5em;
  }

  .bg-base {
    background: rgba(0, 19, 88, 0.6);
  }
  .bg-gray {
    background:  rgba(135, 237, 231, 0.06)
  }
  .box-shadow {
    border: 1px solid #87EDE7;
    box-shadow: 0px 0px 10px rgba(217, 255, 253, 0.5);
  }
  .sharePlace .list{
    display: none;
  }
  .sharePlace:hover .list{
    display: block;
  }
  .w-fit {
    width: fit-content;
  }
  .h-fit {
    height: fit-content;
  }


  .check-field [type="checkbox"] {
    position: absolute !important;
    left: -9999px;
  }

  .check-field [type="checkbox"] + label {
    position: relative !important;
    cursor: pointer !important;
  }

    .check-field [type="checkbox"] + label:before {
        content: '';
        position: absolute;
        left: 0;
        top: 8px;
        width: 25px;
        height: 25px;
        border: 1px solid white;
    }

  .check-field [type="checkbox"] + label:after {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    top: 13px;
    left: 5px;
    font-size: 1.3em;
    line-height: 0.8;
    background-color: white;
    transition: all .2s;
  }

  /* Checked */
  .check-field [type="checkbox"]:not(:checked) + label:after {
      opacity: 0;
      transform: scale(0);
  }

  .check-field [type="checkbox"]:checked + label:after {
      opacity: 1;
      transform: scale(1);
  }
  .input-range__label-container{
    display: none;
  }

`;

export default GlobalStyle;
