import React from 'react';
import { styled } from '@mui/material/styles';
import profileImage from '../../../public/test-img.jpg'
const   PhotoCardTestimonial = () => {
    return (
        <Wrapper>
            <ContainerPhoto>
                <Photo>
                    <img src={profileImage} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Photo>

                <Review>
                  

I'm Khushi, a working professional, and my stay at Stone Heritage Stay was a true break from the chaos of daily life.
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
    height: '250px', // Container has fixed height

});

const ContainerPhoto = styled('div')({
    height: '100%', // Fill the Wrapper
    width: '200px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between', // Ensure spacing between Photo and Review
    backgroundColor: '#ffffff',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
});

const Photo = styled('div')({
    flex: 2, // Takes up more space than Review
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
});

const Review = styled('div')({
    flex: .5,
    width: '100%',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 10
});
