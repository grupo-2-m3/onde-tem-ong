import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

  :root {
  /*Primary Palette*/

  --Color-primary: #6F2A86;
  --Color-primary-50: #AD72C0;
  --Color-secondary: rgb(111,42,134,0.8);

  /*Grey Scale Palette*/

  --Grey100: #1E1E1E;
  --Grey50: #2E2F35;
  --Grey20: #423F44;


  --Withe: #ffff;
  --Black: #000;
  --Black50: rgb(0,0,0,0.5);

  /*Feedback Palette*/

  --Negative: #e60000;
  --Warning: #ffcd07;
  --Sucess: #168821;
  --Information: #155bcb;

}

/* Text sizes */
  .Heading1{
    font-size: 1.625rem;
    font-weight: 700;
    line-height: 34px;
    letter-spacing: 0em;
  }
  .Heading2{
    font-size: 1.3rem;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;

  }
  .Heading3{
  font-size: 1.125rem;
  font-weight: 600;
  letter-spacing: 0em;
  }
  .Heading4{
    font-size: 0.875;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
  }
  .Headline{
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
    letter-spacing: 0em;
  }
  .Caption{
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1rem;
    letter-spacing: 0em;
}
.Simples{
  font-size: 0.875;
  font-weight: 600;
  line-height: 1.5rem;
  letter-spacing: 0em;

}
.App,#root{
  width: 100%;
  height: 100%;
}
.girar {
    animation: App-logo-spin infinite 1s linear;
  }

@keyframes App-logo-spin {
  from { 
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }


  
}


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  }

  .container{
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
  } 

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;
