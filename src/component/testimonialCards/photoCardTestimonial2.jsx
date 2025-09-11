import React from 'react';
import { styled } from '@mui/material/styles';
import profileImage from '../../../public/test-img.jpg';

const PhotoCardTestimonial2 = () => {
  return (
    <Wrapper>
      <ContainerPhoto>
        <Photo>
          <StyledImage src={profileImage} alt="Profile" />
        </Photo>
        <Review>
          I'm Khushi, a working professional, and my stay at Stone Heritage Stay was the perfect escape — peaceful, refreshing, and a true break from the chaos of daily life.
        </Review>
      </ContainerPhoto>
    </Wrapper>
  );
};

export default PhotoCardTestimonial2;

// Styled Components
const Wrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '250px',
  backgroundColor: '#f0f0f0',
});

const ContainerPhoto = styled('div')({
  height: '100%',
  width: '400px',
  padding: '10px',
  display: 'flex',
  flexDirection: 'row', // Changed to row
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#ffffff',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  gap: '10px', // Optional spacing between photo and review
});

const Photo = styled('div')({
  flex: '0 0 40%', // Take up 40% of the row
  height: '100%',
    width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'grey',
  overflow: 'hidden', // Ensures image doesn't overflow
});

const Review = styled('div')({
  flex: '1',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  padding: '10px',
  textAlign: 'center',
  fontSize: '14px',
  lineHeight: '1.4',
});

const StyledImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});
