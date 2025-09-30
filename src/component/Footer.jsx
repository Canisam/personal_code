import { styled } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";

const Footer = () => {
  return (
    <FooterWrapper>
      <Overlay>
        <FooterContent>
          {/* Left Side */}
          <FooterColumn>
            <Logo>Tourm</Logo>
            <Tagline>
              Come as a Guest, Leave as a Friend <br /> - The Mountains Are
              Waiting
            </Tagline>
            <SocialIcons>
              <a href="#">
                <InstagramIcon />
              </a>
              <a href="#">
                <FlightTakeoffIcon />
              </a>
            </SocialIcons>
          </FooterColumn>

          {/* Quick Links */}
          <FooterColumn>
            <ColumnTitle>Quick Links</ColumnTitle>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Our Services</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Your Booking Now</a>
              </li>
            </ul>
          </FooterColumn>

          {/* Contact Info */}
          <FooterColumn className="contact-info">
            <ColumnTitle>Get In Touch</ColumnTitle>
            <p>+91 9027844424</p>
            <p>Thestoneheritage@gmail.com</p>
            <p>Sign Board, Stops At Stone Heritage, Bhowali Dhanachuli Rd, Mukteshwar, South Gola Range, Uttarakhand 263138</p>
          </FooterColumn>

          {/* Instagram Section */}
          <FooterColumn className="insta-section">
            <ColumnTitle>Instagram Posts</ColumnTitle>
            <InstaGrid>
              <InstagramIcon />
              <InstagramIcon />
              <InstagramIcon />
              <InstagramIcon />
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
const FooterWrapper = styled("footer")`
  width: 100%;
  min-height: 60vh;
  background: url("src/assets/cloud.jpg") center/cover no-repeat;
  color: white;
  position: relative;
`;

const Overlay = styled("div")`
  background: rgba(0, 0, 0, 0.65);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 100px 50px 20px;

  @media (max-width: 1024px) {
    padding: 80px 30px 20px;
  }

  @media (max-width: 768px) {
    padding: 60px 20px 20px;
  }
`;

const FooterContent = styled("div")`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 25px;
    text-align: center;
  }
`;

const FooterColumn = styled("div")`
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
    font-size: 0.95rem;
    transition: color 0.3s ease;

    &:hover {
      color: #fff;
    }
  }

  p {
    font-size: 0.95rem;
    line-height: 1.5;
    margin: 4px 0;
  }

  /* ✅ Contact info compact on mobile */
  &.contact-info p {
    @media (max-width: 600px) {
      margin: 2px 0;
      line-height: 1.3;
      text-align: center;
    }
  }
`;

const Logo = styled("h2")`
  font-size: clamp(20px, 2.8vw, 26px);
  font-weight: bold;
`;

const Tagline = styled("p")`
  font-size: clamp(13px, 2vw, 15px);
  color: #bbb;
  margin-top: 10px;
`;

const SocialIcons = styled("div")`
  display: flex;
  gap: 15px;
  margin-top: 10px;

  a {
    color: white;
    font-size: 24px;
    transition: color 0.3s ease;

    &:hover {
      color: #dda15e;
    }
  }

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const ColumnTitle = styled("h4")`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const InstaGrid = styled("div")`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;

  svg {
    font-size: 28px;
    background: #fff;
    color: #984216;
    border-radius: 6px;
    padding: 4px;
  }

  /* ✅ Instagram section on mobile */
  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    gap: 12px;

    svg {
      font-size: 26px;
    }
  }
`;

const BottomBar = styled("div")`
  border-top: 1px solid rgba(255, 255, 255, 0.25);
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: clamp(11px, 1.6vw, 13px);
  color: #aaa;
  flex-wrap: wrap;
  gap: 10px;
  text-align: center;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 8px;
  }
`;
