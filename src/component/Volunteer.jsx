import React from "react";
import CodeIcon from '@mui/icons-material/Code';
import GroupIcon from '@mui/icons-material/Group';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import LanguageIcon from '@mui/icons-material/Language';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import FeaturesCard from "./FeaturesCard";
import HeroSectionVolunteer from "./HeroSectionVolunteer";
import BgMap from '../assets/bg-map.png'; // 🔥 Background image path
import NavBar from "./NavBar"; // Assuming you have a NavBar component

const Volunteer = () => {
  const skills = [
    { name: "Coding", description: "Proficient in writing clean and efficient code.", icon: <CodeIcon color="primary" fontSize="large" /> },
    { name: "Teamwork", description: "Collaborates well with diverse teams and shares ideas.", icon: <GroupIcon color="secondary" fontSize="large" /> },
    { name: "Creativity", description: "Brings innovative ideas to every project.", icon: <EmojiObjectsIcon color="warning" fontSize="large" /> },
    { name: "Communication", description: "Clear and confident communicator.", icon: <LanguageIcon color="success" fontSize="large" /> },
    { name: "Volunteering", description: "Passionate about social work.", icon: <VolunteerActivismIcon color="error" fontSize="large" /> },
  ];

  const services = [
    { name: "Training Programs", description: "Hands-on learning experiences.", icon: <CodeIcon color="primary" fontSize="large" /> },
    { name: "Mentorship", description: "Guidance from experienced mentors.", icon: <GroupIcon color="secondary" fontSize="large" /> },
    { name: "Workshops", description: "Skill-building events and sessions.", icon: <EmojiObjectsIcon color="warning" fontSize="large" /> },
    { name: "Networking", description: "Connect with professionals and peers.", icon: <LanguageIcon color="success" fontSize="large" /> },
    { name: "Recognition", description: "Certificates and awards.", icon: <VolunteerActivismIcon color="error" fontSize="large" /> },
  ];

  return (
    <PageWrapper>
      <NavBar/>
      <HeroSectionVolunteer />

      <SectionTitle>Volunteer Skills</SectionTitle>
      <HorizontalScroll>
        {skills.map((skill, index) => (
          <FeaturesCard
            key={index}
            logo={skill.icon}
            text={skill.name}
            description={skill.description}
          />
        ))}
      </HorizontalScroll>

      <SectionTitle>What We Offer</SectionTitle>
      <HorizontalScroll>
        {services.map((service, index) => (
          <FeaturesCard
            key={index}
            logo={service.icon}
            text={service.name}
            description={service.description}
          />
        ))}
      </HorizontalScroll>
    </PageWrapper>
  );
};

export default Volunteer;

const PageWrapper = styled(Box)`
  background-image: url(${BgMap});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed; /* optional */
  min-height: 100vh;
  width: 100%;
  padding-bottom: 50px;
`;

const HorizontalScroll = styled(Box)`
  display: flex;
  gap: 20px;
  padding: 20px;
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: #ccc transparent;

  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 10px;
  }
`;

const SectionTitle = styled(Typography)`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-top: 40px;
  color: #222;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.6);
`;
