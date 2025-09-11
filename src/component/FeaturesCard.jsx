import React from 'react';
import { styled } from '@mui/material';

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

// Styled components

const CardContainer = styled("div")`
  padding: 20px;
  width: 250px;
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
`;

const Logo = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
`;

const Content = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Heading = styled("div")`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 8px;
`;

const Description = styled("div")`
  font-size: 0.95rem;
  color: #555;
`;
