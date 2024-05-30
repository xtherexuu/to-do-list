import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: white;
  width: 90%;
  margin: 20px auto 40px;
  border-radius: 6px;
`;

export const SectionHeading = styled.h2`
  text-align: center;
  padding: 20px 0;
  margin-bottom: 20px;
  border-bottom: solid 2px #5937ff;
`;

export const AdditionalText = styled.p`
  padding: 20px;
`;

export const AdditionalLink = styled(Link)`
  color: ${({ theme }) => theme.colors.blue};
  &:active {
    color: ${({ theme }) => theme.colors.lightBlue};
  }
`;
