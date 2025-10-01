import { Box } from '@mui/material';
import NavBar from '../component/NavBar';
import Footer from '../component/Footer';
import HomeContainer from '../component/HomeContainer';
import HomeCard from '../component/HomeCard';
import MainTestimonial from '../component/testimonialCards/MainTestimonial';

// ✅ Import images at the top
import homeTwo from '../assets/home_two.JPEG';
import img1 from '../assets/i1.jpg';
import img2 from '../assets/i2.jpg';
import img3 from '../assets/i3.jpg';
import bgImg from '../assets/bgImg.jpg';

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
        bgImage={homeTwo}
        text="Honest reviews of the most unique & boutique hotels for modern travellers."
      />

      {/* First cards section */}
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
          image={img2}
          title="Hand-picked Unique Locations"
          description="Each accommodation in our collection is hand-picked and unforgettable."
        />
        <HomeCard
          image={img3}
          title="Total Transparency"
          description="We deliver relevant information with honesty."
        />
        <HomeCard
          image={bgImg}
          title="Global Connections"
          description="We connect the modern traveller to unique properties worldwide."
        />
      </Box>

      <HomeContainer
        bgImage={img1}
        text="Dreamy escapes, thoughtful hideaways & one-of-a-kind destinations."
      />

      {/* Second cards section */}
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
          image={img2}
          title="Hand-picked Unique Locations"
          description="Each accommodation in our collection is hand-picked and unforgettable."
        />
        <HomeCard
          image={img3}
          title="Total Transparency"
          description="We deliver relevant information with honesty."
        />
        <HomeCard
          image={bgImg}
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
