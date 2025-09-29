import React from 'react';
import { styled } from '@mui/material/styles';

const PhotoCardTestimonial2 = () => {
  return (
    <Wrapper>
      <ContainerPhoto>
        <Photo>
          <StyledImage src="/test-img.jpg" alt="Profile" />
        </Photo>
        <Review>
          I'm Khushi, a working professional, and my stay at 
          <strong> Stone Heritage Stay </strong> was the perfect escape — 
          peaceful, refreshing, and a true break from the chaos of daily life.
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
  padding: '10px',
  backgroundColor: '#f9f9f9',
});

const ContainerPhoto = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  backgroundColor: '#ffffff',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  borderRadius: '8px',
  overflow: 'hidden',
  maxWidth: '600px',
  width: '100%',
});

const Photo = styled('div')({
  flex: '0 0 40%',
  minHeight: '200px',
  backgroundColor: '#eee',
  overflow: 'hidden',
});

const Review = styled('div')({
  flex: 1,
  padding: '15px',
  fontSize: '14px',
  lineHeight: 1.5,
  color: '#333',
  textAlign: 'left',
});

const StyledImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});
