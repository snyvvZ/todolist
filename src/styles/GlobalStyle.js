import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

header, footer, section, article, aside, nav, hgroup, details, menu, figure, figcaption {
  display: block;
}

html, body, h1, h2, h3, h4, h5, h6, ol, ul, div, li, dl, dt, dd, form, iframe, p, a, span, blockquote, i, figure, fieldset, img, table, th, td, input, textarea, select, caption, button, pre, small {
  margin: 0;
  padding: 0;
}

html, body {
  height: 100%;
}

body {
  font-family: '-apple-system', 'HelveticaNeue', "Roboto", "Noto Sans KR", "helvetica", "Gulim", sans-serif;
  font-size: 20px;
	color: #000;
	line-height: 1.8;
}

h1, h2, h3, h4, h5, h6 {
	font-size: inherit;
}

ol, ul {
  list-style: none;
}

fieldset {
  border: 0 solid transparent;
}

img {
  border: none;
  line-height: 0;
  vertical-align: top;
}

table {
  border-collapse: collapse;
}

table, th, td {
  border-spacing: 0;
}

input,
textarea,
select {
  font-family: inherit;
  color: #000;
  vertical-align: middle;
  border: 0;
  border-radius: 0;
  outline: none;
}

caption {
  visibility: hidden;
  width: 0;
  height: 0;
  font-size: 0;
  line-height: 0;
}

button {
  appearance: none;
  font-family: inherit;
  font-size: inherit;
  border: 0;
  cursor: pointer;
  background: none;
	outline: none;
  line-height: 1.5;
}

button::-moz-focus-inner {
  border: 0;
  padding: 0;
}

em {
  font-style: normal;
}

a {
  text-decoration: none;
  color: inherit;
}
`;

export default GlobalStyle;
