// HomeContainer.jsx
import { Box, Button, Typography } from '@mui/material';

const HomeContainer = ({
  bgImage,
  text,
  overlayColor = '#7FA89E',   // teal/blue like the reference
  minHeight = '60vh'
}) => {
  return (
    <Box
      sx={{
        minHeight,
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: "no-repeat",
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
      }}
    >
      {/* centered small rectangular box */}
      <Box
        sx={{
          backgroundColor: "#fff",
          color: '#984216',
          borderRadius: 2,
          px: { xs: 3, sm: 6 },
          py: { xs: 2, sm: 3 },
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          maxWidth: 800,
          opacity: '0.8'
        }}
      >
        <Typography variant="h5" sx={{ lineHeight: 1.4, opacity: 'none' }}>
          {text}
        </Typography>


      </Box>
    </Box>
  );
};

export default HomeContainer;
