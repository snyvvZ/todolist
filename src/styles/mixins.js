import { css } from "styled-components";

const blind = css`
  display: block;
  width: 0;
  height: 0;
  visibility: hidden;
  position: absolute;
`;

const mixins = {
  blind,
};

export default mixins;
