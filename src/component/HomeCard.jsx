// HomeCard.jsx
import { Box, Button, Typography } from '@mui/material';

const HomeCard = ({ image, title, description, buttonText }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        p: 2,
       backgroundColor: '#fff',
      }}
    >
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          width: '100%',
          height: 200,
          objectFit: 'cover',
          borderRadius: 2,
          mb: 2
        }}
      />
      <Typography variant="h6" sx={{ mb: 1 }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        {description}
      </Typography>
      <Button variant="outlined">{buttonText}</Button>
    </Box>
  );
};

export default HomeCard;
