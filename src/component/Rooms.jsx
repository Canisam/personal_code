import React from 'react';
import { styled } from '@mui/material';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

import NavBar from './NavBar';
import Bookings from './Bookings';
import FeaturesCard from './FeaturesCard';

import SignalWifi4BarIcon from '@mui/icons-material/SignalWifi4Bar';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ConnectedTvIcon from '@mui/icons-material/ConnectedTv';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import LocalParkingIcon from '@mui/icons-material/LocalParking';

const Rooms = () => {
  const navigate   = useNavigate();
  const location   = useLocation();
  const { id: roomId } = useParams();

  /* nightly price can arrive under two possible keys */
  const pricePerNight =
    Number(location.state?.pricePerNight) ||    // ← if Rooms sent this key
    Number(location.state?.price)        ||     // ← if RoomsCard sent {price}
    0;

  /* ---- page copy / amenities ---- */
  const amenities = [
    { logo: <SignalWifi4BarIcon sx={{ fontSize: 70, color: '#384b42' }} />, text: 'Free Wi‑Fi',
      description: 'High‑speed wireless internet available 24/7.' },
    { logo: <AcUnitIcon        sx={{ fontSize: 70, color: '#384b42' }} />, text: 'Air‑Conditioning',
      description: 'Stay cool and comfortable all year round.' },
    { logo: <ConnectedTvIcon   sx={{ fontSize: 70, color: '#384b42' }} />, text: 'Smart TV',
      description: 'Watch your favourites on a 42‑inch smart TV.' },
    { logo: <RoomServiceIcon   sx={{ fontSize: 70, color: '#384b42' }} />, text: 'Room Service',
      description: 'On‑demand food and beverage delivery.' },
    { logo: <LocalParkingIcon  sx={{ fontSize: 50, color: '#384b42' }} />, text: 'Free Parking',
      description: 'Secure, on‑site parking is included.' },
  ];

  const description = [
    { subheading: 'Guest Access',
      content: "You'll have full access to the apartment, balcony and kitchen—make yourself at home!" },
    { subheading: 'Other Things to Note',
      content: 'Fresh linens, toiletries and a welcome kit provided. Please respect the house rules.' },
    { subheading: 'Neighborhood',
      content: 'Quiet residential area just 5 min from the city centre. Cafés and shops are within walking distance.' },
  ];

  const goToAvailability = () =>
    navigate('/Availability', {
      state: { pricePerNight, roomId },
    });

  /* ---- render ---- */
  return (
    <>
      <NavBar />
      <Wrapper>
        <Container>
          <ImageSlider>
            <Bookings />
          </ImageSlider>

          <Description>
            <Heading>About this space</Heading>
            <Paragraph>
              Welcome to your home away from home. This modern and cosy space is perfect for solo travellers,
              couples or small families. Fast Wi‑Fi, AC and comfort‑focused design ensure your stay is memorable.
            </Paragraph>

            {description.map(({ subheading, content }, i) => (
              <Section key={i}>
                <Subheading>{subheading}</Subheading>
                <Paragraph>{content}</Paragraph>
              </Section>
            ))}
          </Description>

          <Features>
            {amenities.map(({ logo, text, description }, i) => (
              <FeaturesCard key={i} logo={logo} text={text} description={description} />
            ))}
          </Features>

          <CheckAvailability>
            <Nightly>
              {pricePerNight
                ? `₹${pricePerNight.toLocaleString()} / night`
                : 'Price on request'}
            </Nightly>
            <AvailabilityBtn onClick={goToAvailability}>
              Check Availability
            </AvailabilityBtn>
          </CheckAvailability>
        </Container>
      </Wrapper>
    </>
  );
};

export default Rooms;

/* ---------- styled ---------- */
const Wrapper = styled('div')`
  width: 95vw;
  min-height: 100vh;
  overflow-y: auto;
  display: flex;
  margin: auto;
  flex-direction: column;
`;

const Container = styled('div')`
  display: flex;
  flex-direction: column;
`;

const ImageSlider = styled('div')`
  flex: 0 0 40%;
  width: 100%;
  margin-top: 10px;
`;

const Features = styled('div')`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 20px;
  margin-bottom: 10vh;
  align-items: center;
`;

const Description = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 95%;
  margin-top: 30px;
  padding: 30px 20px 120px;
`;

const Heading = styled('h2')`
  font-size: 36px;
  font-weight: 700;
  color: #2d2d2d;
  margin-bottom: 20px;
`;

const Subheading = styled('h3')`
  font-size: 24px;
  font-weight: 600;
  color: #384b42;
  margin-top: 20px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Paragraph = styled('p')`
  font-size: 18px;
  line-height: 1.6;
  color: #444;
  margin-bottom: 10px;
`;

const Section = styled('div')`
  margin-bottom: 15px;
`;

const CheckAvailability = styled('div')`
  width: 95%;
  height: 10vh;
  position: fixed;
  bottom: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  background: #fff;
  box-shadow: 0 -2px 6px rgba(0, 0, 0, 0.06);
  padding-right: 8px;
`;

const Nightly = styled('span')`
  font-size: 18px;
  font-weight: 600;
  color: #2d2d2d;
`;

const AvailabilityBtn = styled('button')`
  margin: 10px;
  padding: 12px 24px;
  background-color: #384b42;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background-color: #2a3a34;
  }
`;
