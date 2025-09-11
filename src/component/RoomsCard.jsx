import React from 'react';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

/**
 * Props
 *   data = [
 *     {
 *       id: '1',
 *       imageBackgroundUrl: 'home.jpg',
 *       price: 2567.01,
 *       heading: 'Master Suite',
 *       description: '…',
 *       roomUrl: '/Rooms/1'
 *     },
 *     …
 *   ]
 */
const RoomsCard = ({ data = [] }) => {
  return (
    <>
      {data.map((room) => (
        <Container
          key={room.id}
          style={{
            backgroundImage: `url(${room.imageBackgroundUrl})`,
            marginBottom: '60px',
          }}
        >
          <InnerOverlay>
            <Content>
              <Price>₹{room.price.toLocaleString()} / night</Price>

              <ContentHeading>{room.heading}</ContentHeading>

              <Description>{room.description}</Description>

              {/* Link sends the nightly rate via location.state */}
              <Link
                to={room.roomUrl}
                state={{ price: room.price }}   /* 👈 pass price here */
                style={{ textDecoration: 'none' }}
              >
                <ContentButton>
                  <span>Book&nbsp;Now</span>
                  <span>&rarr;</span>
                </ContentButton>
              </Link>
            </Content>
          </InnerOverlay>
        </Container>
      ))}
    </>
  );
};

export default RoomsCard;

/* ---------- styled components ---------- */

const Container = styled('div')`
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 60%;
  height: 60vh;
  margin: 2rem auto;
`;

const InnerOverlay = styled('div')`
  background-color: rgba(0, 0, 0, 0.69);
  width: 45%;
  height: 40vh;
  margin-right: 8%;
  display: flex;
  align-items: center;
  color: #fff;
`;

const Content = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

const Price = styled('div')`
  font-weight: 600;
  font-size: 18px;
`;

const ContentHeading = styled('div')`
  font-weight: 700;
  font-size: 25px;
`;

const Description = styled('div')`
  line-height: 1.4;
`;

const ContentButton = styled('button')`
  background-color: brown;
  color: #fff;
  border: none;
  padding: 10px 16px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  border-radius: 4px;

  &:hover {
    background-color: #7a1e1e;
  }
`;
