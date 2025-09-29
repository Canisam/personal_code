import React from "react";
import { styled } from "@mui/material";

const FeaturesCard = ({ logo, text, description }) => {
  return (
    <CardContainer>
      <Logo>{logo}</Logo>
      <Content>
        <Heading>{text}</Heading>
        <Description>{description}</Description>
      </Content>
    </CardContainer>
  );
};

export default FeaturesCard;

/* ---------- styled ---------- */

const CardContainer = styled("div")`
  padding: 20px;
  flex: 1 1 250px; /* flexible: min 250px, grow/shrink */
  max-width: 300px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 10px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    flex: 1 1 45%; /* two per row on tablets */
    max-width: 100%;
  }

  @media (max-width: 480px) {
    flex: 1 1 100%; /* full width on mobile */
  }
`;

const Logo = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;

  svg {
    font-size: clamp(40px, 8vw, 70px); /* responsive icon size */
    color: #384b42;
  }
`;

const Content = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Heading = styled("div")`
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  font-weight: 700;
  margin-bottom: 8px;
`;

const Description = styled("div")`
  font-size: clamp(0.85rem, 2.2vw, 0.95rem);
  color: #555;
  line-height: 1.4;
`;
