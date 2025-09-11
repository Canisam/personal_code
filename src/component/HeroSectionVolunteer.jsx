// components/HeroSection.jsx
// components/HeroSection.jsx
import React from 'react';
import { styled, Button, Typography, Box } from '@mui/material';
import MapMask from '../assets/bg-uk.png';   // Transparent map of Uttarakhand
import OverlayImage from '../assets/image1.png'; // Image inside map

const HeroSectionVolunteer = () => {
    return (
        <Container>
            <ContentBox>
                <Title>
                    Be the Change. <br />
                    Start with <span>a Helping Hand</span>
                </Title>
                <Paragraph>
                    Join our mission to uplift communities, empower individuals, and bring lasting change. Whether you give your time, skills, or heart — every act of service counts.
                </Paragraph>
                <CTAButton variant="contained" size="large">
                    Become a Volunteer
                </CTAButton>
            </ContentBox>

            <MapMaskWrapper>
                <MaskedImage src={OverlayImage} alt="Masked Overlay" />
            </MapMaskWrapper>
        </Container>
    );
};

export default HeroSectionVolunteer;

const Container = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 6rem;
  background-color: rgba(255, 255, 255, 0.2); /* light transparent layer */
  backdrop-filter: blur(6px); /* optional: softens bg behind */
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  flex-wrap: wrap;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 2rem;
  }
`;


const ContentBox = styled('div')`
  flex: 1;
  max-width: 520px;
  padding-right: 2rem;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(6px);
  padding: 2rem;
  border-radius: 16px;
  animation: fadeInUp 0.8s ease-out;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    padding-right: 0;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const MapMaskWrapper = styled('div')`
  width: 700px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: zoomIn 1s ease-out;

  @keyframes zoomIn {
    from {
      transform: scale(0.9);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    width: 90%;
  }

  &:hover img {
    transform: scale(1.05);
    filter: drop-shadow(0 12px 25px rgba(25, 118, 210, 0.35));
    transition: all 0.4s ease-in-out;
  }
`;

const MaskedImage = styled('img')`
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: transform 0.4s ease-in-out, filter 0.4s ease-in-out;

  mask-image: url(${MapMask});
  mask-size: cover;
  mask-repeat: no-repeat;
  mask-position: center;

  -webkit-mask-image: url(${MapMask});
  -webkit-mask-size: cover;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
`;

const Title = styled(Typography)`
  font-weight: 800;
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 1.2rem;
  color: #1a1a1a;

  span {
    color: #1976d2;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Paragraph = styled(Typography)`
  font-size: 1.2rem;
  color: #444;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const CTAButton = styled(Button)`
  background-color: #1976d2;
  color: white;
  padding: 12px 32px;
  font-size: 1rem;
  border-radius: 30px;
  text-transform: none;
  box-shadow: 0px 8px 20px rgba(25, 118, 210, 0.3);

  &:hover {
    background-color: #1256a3;
    transform: translateY(-2px);
    box-shadow: 0px 10px 24px rgba(25, 118, 210, 0.4);
  }
`;
