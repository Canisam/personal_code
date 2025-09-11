import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { styled } from '@mui/material';
import NavBar from './NavBar';

export default function Availability() {
  /* price and roomId arrive from Rooms.jsx */
  const location = useLocation();
  const pricePerNight = location.state?.pricePerNight || 0;
  const roomId = location.state?.roomId || 'N/A';

  /* ---------- dates ---------- */
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);

  const [dates, setDates] = useState([
    {
      startDate: today,
      endDate: tomorrow,
      key: 'selection',
    },
  ]);

  const [totalNights, setTotalNights] = useState(1);

  useEffect(() => {
    const { startDate, endDate } = dates[0];
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    const nights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
    setTotalNights(nights);
  }, [dates]);

  /* ---------- guests ---------- */
  const [guests, setGuests] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  });

  const updateGuest = (type, delta) => {
    setGuests((prev) => {
      const updated = Math.max(0, prev[type] + delta);
      return { ...prev, [type]: updated };
    });
  };

  /* ---------- price ---------- */
  const totalPrice = pricePerNight * totalNights;

  return (
    <>
      <NavBar />
      <Container>
        {/* WHEN */}
        <Section>
          <Heading>When?</Heading>
          <DateRange
            editableDateInputs
            onChange={(item) => setDates([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={dates}
            months={1}
            direction="horizontal"
            showDateDisplay={false}
          />
        </Section>

        {/* WHO */}
        <Section>
          <Heading>Who?</Heading>
          <GuestSection>
            {['adults', 'children', 'infants'].map((type) => (
              <GuestRow key={type}>
                <span>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </span>
                <Counter>
                  <Button onClick={() => updateGuest(type, -1)}>-</Button>
                  <Count>{guests[type]}</Count>
                  <Button onClick={() => updateGuest(type, 1)}>+</Button>
                </Counter>
              </GuestRow>
            ))}
          </GuestSection>
        </Section>

        {/* PRICE */}
        <Section>
          <Heading>Price</Heading>
          <PriceRow>
            <div>
              ₹{pricePerNight.toLocaleString()} × {totalNights} night
              {totalNights > 1 ? 's' : ''}
            </div>
            <strong>₹{totalPrice.toLocaleString()}</strong>
          </PriceRow>
        </Section>

        <ContinueBtn>
          Continue {/* wire this to your checkout / confirmation */}
        </ContinueBtn>
      </Container>
    </>
  );
}

/* ---------- styled ---------- */
const Container = styled('div')`
  padding: 24px;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const Section = styled('div')`
  margin-top: 40px;
  width: 50%;
`;

const Heading = styled('h2')`
  font-size: 32px;
  font-weight: 700;
  color: #2d2d2d;
  margin-bottom: 20px;
`;

const GuestSection = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const GuestRow = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Counter = styled('div')`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Button = styled('button')`
  width: 32px;
  height: 32px;
  font-size: 20px;
  border-radius: 50%;
  background: #384b42;
  color: #fff;
  border: none;
  cursor: pointer;
  &:hover {
    background: #2a3a34;
  }
`;

const Count = styled('span')`
  font-size: 18px;
  min-width: 20px;
  text-align: center;
`;

const PriceRow = styled('div')`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  margin-top: 10px;
  padding: 10px 0;
  border-top: 1px solid #ccc;
`;

const ContinueBtn = styled('button')`
 width: 50%;  margin-top: 40px;
  padding: 16px;
  font-size: 20px;
  font-weight: bold;
  background: #384b42;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background: #2a3a34;
  }
`;
