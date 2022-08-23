import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import fraise from "../../images/fraise.png";
export const NavigationIcon = styled.div`
  height: 70px;
  width: 70px;
  background-image: url(${fraise});
  background-repeat: no-repeat;
  background-position: center;
  transition: all 0.2s ease;
  cursor: pointer;
  &:hover {
    // scale: 1.1;
  }
`;

export const NavigationLink = styled(Link)`
  height: 100%;
  padding: 10px 20px;
  margin: 0px 10px;
  cursor: pointer;
  transition: all 0.2s ease;
`;
