import HomeContainer from '../component/HomeContainer';
import HomeCard from '../component/HomeCard';
import { Box } from '@mui/material';

import NavBar from '../component/NavBar';
import Footer from '../component/Footer';
import MainTestimonial from '../component/testimonialCards/MainTestimonial';

const HomePage = () => {
  return (
    <Box
      sx={{
        mx: 'auto',
        width: '100%',
        maxWidth: 'full',
        overflowX: 'hidden',
      }}
    >
      <NavBar />

      <HomeContainer
        bgImage="./src/assets/home_two.JPEG"
        text="Honest reviews of the most unique & boutique hotels for modern travellers."
      />

      <Box
        sx={{
          display: 'grid',
          gap: { xs: 2, sm: 3, md: 4 },
          gridTemplateColumns: {
            xs: '1fr',
            sm: '1fr 1fr',
            md: '1fr 1fr 1fr',
          },
          p: { xs: 2, sm: 3, md: 4 },
          backgroundColor: '#fff',
          color: '#984216',
          textAlign: 'center',
        }}
      >
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

      <Box
        sx={{
          display: 'grid',
          gap: { xs: 2, sm: 3, md: 4 },
          gridTemplateColumns: {
            xs: '1fr',
            sm: '1fr 1fr',
            md: '1fr 1fr 1fr',
          },
          p: { xs: 2, sm: 3, md: 4 },
          textAlign: 'center',
        }}
      >
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

      <Box
        sx={{
          px: { xs: 2, sm: 4, md: 6 },
          py: { xs: 3, sm: 4, md: 6 },
        }}
      >
        <MainTestimonial />
      </Box>

      <Footer />
    </Box>
  );
};

export default HomePage;
