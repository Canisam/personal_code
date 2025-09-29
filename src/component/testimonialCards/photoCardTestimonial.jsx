import React from 'react';
import { styled } from '@mui/material/styles';

// ✅ If the file is inside public folder, just use "/test-img.jpg"
const PhotoCardTestimonial = () => {
  return (
    <Wrapper>
      <ContainerPhoto>
        <Photo>
          <img 
            src="/test-img.jpg" 
            alt="Profile" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '6px' }} 
          />
        </Photo>

        <Review>
          I'm Khushi, a working professional, and my stay at 
          <strong> Stone Heritage Stay </strong> was a true break from the chaos of daily life.
        </Review>
      </ContainerPhoto>
    </Wrapper>
  );
};

export default PhotoCardTestimonial;

// Styled Components
const Wrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%', 
  padding: '10px',
});

const ContainerPhoto = styled('div')({
  width: '220px',
  minHeight: '250px',
  padding: '12px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#ffffff',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  borderRadius: '8px',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
});

const Photo = styled('div')({
  flex: 2,
  width: '100%',
  borderRadius: '6px',
  overflow: 'hidden',
  backgroundColor: '#eee',
});

const Review = styled('div')({
  flex: 1,
  marginTop: '10px',
  width: '100%',
  fontSize: '12px',
  lineHeight: 1.4,
  color: '#333',
  textAlign: 'center',
});
