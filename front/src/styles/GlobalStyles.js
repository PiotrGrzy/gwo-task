import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
 :root {
    --white: #ffffffff;
    --black: #101010;
    --primary: #ec5800;
    --primary-light: #fbb900;
    --secondary: #d7d7d7;
    --secondary-light: #eaecec;
    --secondary-dark: #686868;
    --error:#961818;
    --box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
 }
 html {
   font-family: 'Lato', sans-serif;
   font-size:10px;
   color:var(--black);
    @media (max-width: 520px) {
       font-size:6px;
   }
        }
*,
*::before,
*::after {
    box-sizing:border-box;
    margin:0;
    padding:0;
    }
a {
    text-decoration:none;
    color:inherit;
    cursor:pointer;
    }
button {
    background-color:transparent;
    color:inherit;
    border-width:0;
    padding:0;
    cursor:pointer;}
figure {
    margin:0;
    }
input::-moz-focus-inner {
    border:0;
    padding:0;
    margin:0;
    }
ul, ol, dd
{
    margin:0;
    padding:0;
    list-style:none;
    }
h1, h2, h3, h4, h5, h6{
    margin:0;
    font-size:inherit;
    font-weight:inherit;}
p {
    margin:0;
}
cite {
    font-style:normal;
}
fieldset { 
    border-width:0;
    padding:0; 
    margin:0;
}

.container {
    max-width:1200px;
    margin: 0 auto;
    padding:1rem;

}
.error-msg {
    color: var(--error);
    margin-top: 1rem;
    font-size:1.4rem;
    text-align:center;
}

`;

export default GlobalStyles;
