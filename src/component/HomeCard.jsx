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
        p: { xs: 2, sm: 3 },
        backgroundColor: '#fff',
        borderRadius: 2,
        boxShadow: { xs: 1, sm: 2 },
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: { xs: 2, sm: 4 },
        },
        maxWidth: { xs: '100%', sm: 320 },
        mx: 'auto',
      }}
    >
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          width: '100%',
          height: { xs: 160, sm: 200 },
          objectFit: 'cover',
          borderRadius: 2,
          mb: 2,
          maxWidth: '100%',
        }}
      />
      <Typography
        variant="h6"
        sx={{
          fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
          fontWeight: 600,
          mb: 1,
          color: '#984216',
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' },
          lineHeight: 1.5,
          mb: 2,
          px: { xs: 1, sm: 2 },
          color: 'text.secondary',
        }}
      >
        {description}
      </Typography>
      {buttonText && (
        <Button
          variant="outlined"
          size="small"
          sx={{
            fontSize: { xs: '0.75rem', sm: '0.85rem' },
            px: { xs: 2, sm: 3 },
            py: { xs: 0.5, sm: 1 },
            borderRadius: 2,
          }}
        >
          {buttonText}
        </Button>
      )}
    </Box>
  );
};

export default HomeCard;
