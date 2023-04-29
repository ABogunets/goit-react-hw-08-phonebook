import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// export const Link = styled(NavLink)`
//   padding: 8px 16px;
//   border-radius: 4px;
//   text-decoration: none;
//   color: black;
//   font-weight: 500;
//   &.active {
//     color: red;
//     /* background-color: orangered; */
//   }
// `;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;

  &.active {
    color: #e84a5f;
  }
`;
