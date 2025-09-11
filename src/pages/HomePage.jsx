import HomeContainer from '../component/HomeContainer';
import HomeCard from '../component/HomeCard';
import { Box } from '@mui/material';

import NavBar from '../component/NavBar';
import Footer from '../component/Footer';
import MainTestimonial from '../component/testimonialCards/MainTestimonial';

const HomePage = () => {
  return (
    <Box sx={{marginLeft:'auto', marginRight:'auto'}}>
      <NavBar></NavBar>
      <HomeContainer
        bgImage="./src/assets/home_two.JPEG"
        text="Honest reviews of the most unique & boutique hotels for modern travellers."
       
      />

      <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', p: 4 , backgroundColor: '#fff', color: '#984216'}}>
        <HomeCard
          image="./src/assets/i2.jpg"
          title="Hand-picked Unique Locations"
          description="Each accommodation in our collection is hand-picked and unforgettable."
     
        />
        <HomeCard
          image="./src/assets/i3.jpg"
          title="Total Transparency"
          description="We deliver relevant information with honesty."
      
        />
        <HomeCard
          image="./src/assets/bgImg.jpg"
          title="Global Connections"
          description="We connect the modern traveller to unique properties worldwide."
       
        />
      </Box>

      <HomeContainer
        bgImage="./src/assets/i1.jpg"
        text="Dreamy escapes, thoughtful hideaways & one-of-a-kind destinations."
    
      />

      <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', p: 4 }}>
        {/* Repeat HomeCard for latest travels & reviews */}
         <HomeCard
          image="./src/assets/i2.jpg"
          title="Hand-picked Unique Locations"
          description="Each accommodation in our collection is hand-picked and unforgettable."
      
        />
        <HomeCard
          image="./src/assets/i3.jpg"
          title="Total Transparency"
          description="We deliver relevant information with honesty."
   
        />
        <HomeCard
          image="./src/assets/bgImg.jpg"
          title="Global Connections"
          description="We connect the modern traveller to unique properties worldwide."
        
        />
        <MainTestimonial/>
        <Footer></Footer>
      </Box>
    </Box>
  );
};

export default HomePage;
