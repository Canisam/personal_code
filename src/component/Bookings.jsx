import React, { useEffect, useState } from "react";
import { styled } from "@mui/material";

// Import images if using from /src/assets
import forestImg from "../assets/room1.png";
import mountainImg from "../assets/room2.png";
import mudImg from "../assets/room3.png";

const rooms = [
  {
    id: 1,
    name: "Forest View Room",
    description: "Wake up to birdsong and a view of the forest.",
    image: forestImg,
    link: "/rooms/forest-view",
  },
  {
    id: 2,
    name: "Mountain View Room",
    description: "Enjoy a stunning view of the Himalayas.",
    image: mountainImg,
    link: "/rooms/mountain-view",
  },
  {
    id: 3,
    name: "Heritage Mud Room",
    description: "Stay in an authentic mud house with rustic charm.",
    image: mudImg,
    link: "/rooms/mud-house",
  },
];

const RoomCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const activeRoom = rooms[activeIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(activeIndex);
      setActiveIndex((prev) => (prev + 1) % rooms.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <>
      <Container>
        <Text>
          <Heading>The small details make the difference.</Heading>
          <Description>
            Every room tells a story — of silence, sunrise, and soul-soothing
            moments.
            <br />
            Find your space, your pause, your peace.
          </Description>
        </Text>

        {/* Previous Image for slide-out npm i react-dates moment prop-types
# or yarn add react-dates moment prop-types
*/}
        {prevIndex !== null && (
          <Background
            key={`prev-${rooms[prevIndex].id}`}
            style={{
              backgroundImage: `url(${rooms[prevIndex].image})`,
              transform: "translateX(0%)",
              zIndex: 1,
            }}
            className="slide-out"
          />
        )}
        {/* Active Image for slide-in */}
        <Background
          key={`active-${activeRoom.id}`}
          style={{
            backgroundImage: `url(${activeRoom.image})`,
            transform: "translateX(100%)",
            zIndex: 2,
          }}
          className="slide-in"
        />

        <Overlay>
          {/* <Content>
            <h1>{activeRoom.name}</h1>
            <p>{activeRoom.description}</p>
            <a href={activeRoom.link}>
              <ShowMoreButton>Show More</ShowMoreButton>
            </a>
          </Content> */}

          <ThumbnailRow>
            {rooms.map((room, index) => (
              <Thumbnail
                key={room.id}
                src={room.image}
                alt={room.name}
                active={index === activeIndex}
                onClick={() => {
                  setPrevIndex(activeIndex);
                  setActiveIndex(index);
                }}
              />
            ))}
          </ThumbnailRow>
        </Overlay>
      </Container>
    </>
  );
};

export default RoomCarousel;

// Styled components

const Container = styled("div")`
  position: relative;
  width: 100%;
  height: 40vh;
  overflow: hidden;
`;

const Text = styled("div")`
  position: absolute;
  top: 2vh;
  width: 100%;
  z-index: 4;
  text-align: center;
  color: #fff;
  padding: 0 20px;
`;

const Heading = styled("h2")`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Description = styled("p")`
  font-size: 20px;
  font-weight: 400;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Background = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: transform 1s ease-in-out;
  z-index: 1;

  &.slide-in {
    animation: slideIn 1s forwards;
  }

  &.slide-out {
    animation: slideOut 1s forwards;
  }

  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0%);
    }
  }

  @keyframes slideOut {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-100%);
    }
  }
`;

const Overlay = styled("div")`
  position: relative;
  z-index: 3;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 60px 40px;
  color: white;
`;

const Content = styled("div")`
  margin-left: 5vh;
  text-align: left;
  
  h1 {
    font-size: 32px;
    margin-bottom: 20px;
  }

  p {
    font-size: 20px;
    width: 60%;
    max-width: 600px;
  }
`;

const ThumbnailRow = styled("div")`
  display: flex;
  gap: 20px;
  
  justify-content: center;
`;

const Thumbnail = styled("img")(({ active }) => ({
  width: "160px",
  height: "100px",
  borderRadius: "8px",
  border: active ? "3px solid #fff" : "2px solid transparent",
  cursor: "pointer",
  objectFit: "cover",
  transition: "all 0.3s ease",
  opacity: active ? 1 : 0.6,
  transform: active ? "scale(1.05)" : "scale(1)",
}));

const ShowMoreButton = styled("button")`
  margin-top: 20px;
  padding: 12px 24px;
  background-color: #ff6f61;
  color: white;
  border: none;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
`;
