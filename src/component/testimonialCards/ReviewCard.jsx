import { styled } from "@mui/material/styles";
import { Card, CardContent, Typography, Avatar } from "@mui/material";

// Styled Components
const ReviewCard = styled(Card)(({ theme }) => ({  
  width: 320,
  borderRadius: "16px",
  paddingTop: theme.spacing(6), // space for avatar
  position: "relative",
  textAlign: "center",
  boxShadow: theme.shadows[4],
  overflow: "visible",
}));

const AvatarWrapper = styled("div")(({ theme }) => ({
  position: "absolute",
  top: -40,        // moves avatar up → half outside card
  left: "50%",
  transform: "translateX(-50%)",
}));

export default function TestimonialCard() {
  return (
    <ReviewCard>
      <AvatarWrapper>
        <Avatar
          src="https://via.placeholder.com/100"
          alt="Reviewer"
          sx={{
            width: 80,
            height: 80,
            border: "4px solid white",
            boxShadow: 3,
          }}
        />
      </AvatarWrapper>

      <CardContent>
        <Typography variant="h6" component="div">
          Sara Doe
        </Typography>
        <Typography sx={{ color: "#fbc02d" }}>⭐⭐⭐⭐⭐</Typography>
        <Typography variant="body2" color="text.secondary">
          Great insights and clear communication. Would definitely recommend!
        </Typography>
      </CardContent>
    </ReviewCard>
  );
}
