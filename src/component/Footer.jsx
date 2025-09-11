import { styled } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

const Footer = () => {
  return (
    <FooterWrapper>
      <Overlay>
        <FooterContent>
          {/* Left Side */}
          <FooterColumn>
            <Logo>Tourm</Logo>
            <Tagline>
              Come as a Guest, Leave as a Friend <br /> - The Mountains Are Waiting
            </Tagline>
            <SocialIcons>
              <a href="#"><InstagramIcon /></a>
              <a href="#"><FlightTakeoffIcon size={22} /></a>
            </SocialIcons>
          </FooterColumn>

          {/* Quick Links */}
          <FooterColumn>
            <ColumnTitle>Quick Links</ColumnTitle>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Services</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Your Booking Now</a></li>
            </ul>
          </FooterColumn>

          {/* Contact Info */}
          <FooterColumn>
            <ColumnTitle>Get In Touch</ColumnTitle>
            <p>+01 234 567 890</p>
            <p>support@email.com</p>
            <p>789 Lorem Lane, Holy park, California, USA</p>
          </FooterColumn>

          {/* Instagram Section */}
          <FooterColumn>
            <ColumnTitle>Instagram Posts</ColumnTitle>
            <InstaGrid>
              {/* <img src="https://via.placeholder.com/60" alt="insta" /> */}
              <InstagramIcon />
              <InstagramIcon />
              <InstagramIcon />
              <InstagramIcon />
              {/* <img src="https://via.placeholder.com/60" alt="insta" />
              <img src="https://via.placeholder.com/60" alt="insta" />
              <img src="https://via.placeholder.com/60" alt="insta" /> */}
            </InstaGrid>
          </FooterColumn>
        </FooterContent>

        {/* Bottom strip */}
        <BottomBar>
          <p>© 2025 Stone Heritage. All Rights Reserved.</p>
          <p>We Accept: UPI | Mastercard | Cash</p>
        </BottomBar>
      </Overlay>
    </FooterWrapper>
  );
};

export default Footer;

// ---------------- STYLED COMPONENTS ----------------
    const FooterWrapper = styled('div')`
    width: 100%;
    min-height: 60vh;
    background: url("src/assets/cloud.jpg") center/cover  no-repeat;
    color: white;
    position: relative;
    `;

const Overlay = styled('div')`
  background: rgba(0, 0, 0, 0.6); /* dark overlay */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 200px 60px 20px; /* big top padding */
`;

const FooterContent = styled('div')`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin: 50px,
`;

const FooterColumn = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 10px;

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin: 6px 0;
  }

  a {
    text-decoration: none;
    color: #ddd;
    &:hover {
      color: white;
    }
  }
`;

const Logo = styled('h2')`
  font-size: 22px;
  font-weight: bold;
`;

const Tagline = styled('p')`
  font-size: 14px;
  color: #bbb;
  margin-top: 10px;
`;

const SocialIcons = styled('div')`
  display: flex;
  gap: 15px;
  margin-top: 10px;

  a {
    color: white;
    font-size: 22px;
  }
`;

const ColumnTitle = styled('h4')`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const InstaGrid = styled('div')`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;

  img {
    border-radius: 6px;
    width: 100%;
    height: auto;
  }
`;

const BottomBar = styled('div')`
  margin-top: 40px;
  border-top: 1px solid rgba(255,255,255,0.2);
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #aaa;
`;
