import React from "react";
import { styled } from "@mui/material/styles";
import { Card, CardContent, Typography, Avatar } from "@mui/material";

const ReviewCard = styled(Card)(({ theme }) => ({
  width: 400,
  borderRadius: "16px",
  padding: theme.spacing(3),
  position: "relative",
  boxShadow: theme.shadows[4],
  overflow: "visible", // make sure avatar shows outside
  display: "flex",
  alignItems: "center",
}));

const AvatarWrapper = styled("div")(({ theme }) => ({
  position: "absolute",
  right: -40, // half outside
  top: "50%",
  transform: "translateY(-50%)",
}));

export default function TestimonialCard2() {
  return (
    <ReviewCard>
      <CardContent sx={{ pr: 8 }}>
        <Typography variant="h5" sx={{ fontSize: "2rem", lineHeight: 1 }}>
          ❝
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          Design is not just what it looks like and feels like. Design is how it
          works.
        </Typography>
        <Typography variant="subtitle1" fontWeight="bold">
          John Doe
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Product Designer · Tech Studio
        </Typography>
      </CardContent>

      <AvatarWrapper>
        <Avatar
          src="https://via.placeholder.com/100"
          alt="Reviewer"
          sx={{
            right:15,
            width: 80,
            height: 80,
            border: "4px solid white",
            boxShadow: 3,
          }}
        />
      </AvatarWrapper>
    </ReviewCard>
  );
}
