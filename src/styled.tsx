import styled from 'styled-components';
import { 
  Form as AntdForm, 
  Input as AntdInput, 
  Button as AntdButton, 
  Steps
} from 'antd';

export const Container = styled.div`
  color: white;
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 50px;
  @media (max-width: 768px) {
    padding: 25px;
    text-align: center;
  }
`;

export const Label = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

export const Input = styled(AntdInput)`
  border-radius: 10px;
`;

export const Button = styled(AntdButton)`
  border-radius: 10px;
  font-weight: bold;
  padding: 25px;
  font-size: 20px;
  align-items: center;
  display: flex;
  margin-top: 16px;
  border-color: #ffe5c0;
  border-width: 5px;
  margin-bottom: 50px;
`;

export const Form = styled(AntdForm)`
  padding-right: 50px;
  padding-left: 50px;
  width: 500px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const Card = styled.div`
  margin-bottom: 50px;
  width: 500px;
  color: black;
  background-color: white;
  border-color: #ffe5c0;
  border-style: solid;
  border-width: 5px;
  border-radius: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 100px;
  
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 16px;
  border-bottom: 1px solid black;
`;

export const Footer = styled.div`
  color: white;
  padding: 16px;
  border-top: 1px solid black;
  text-align: center;
  display: flex;
  justify-content: space-around;
  margin-top: 100px;
`;

export const StyledHeading = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const StyledSubHeading = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const StyledParagraph = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

// Styled component for the notification container
const NotificationContainer = styled.div`
  padding: 10px 20px;
  background-color: #f44336; /* Red background */
  color: white; /* White text color */
  border-radius: 4px;
  margin: 10px 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
`;

// Optional: Styled component for the title of the notification
const NotificationTitle = styled.h4`
  margin: 0;
  padding-bottom: 5px;
  font-weight: bold;
`;

// Optional: Styled component for the message of the notification
const NotificationMessage = styled.p`
  margin: 0;
`;

// The Notification component itself
export const Notification = ({ title, message }: { title: string; message: string }) => (
  <NotificationContainer>
    <NotificationTitle>{title}</NotificationTitle>
    <NotificationMessage>{message}</NotificationMessage>
  </NotificationContainer>
);

export const StyledSteps = styled(Steps)`
  border-color: #ffe5c0;
  border-style: solid;
  border-width: 5px;
  width: 500px;
  text-align: center;
  background-color: white;
  color: black;
  padding: 20px;
  border-radius: 20px;
  margin-bottom: 16px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;


export const StyledInfoCard = styled(Card)`
  text-align: center;
  border-color: #ffe5c0;
  border-width: 2px;
  border-style: solid;
  background: none;
  border-radius: 20px;
  .info-card-image {
    max-width: 200px;
  }
`;

export const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

// export const NewsletterForm = styled(Card)`
//   background: none;
//   background-image: url(${newletterBackground});
//   border-color: #ffe5c0;
//   border-width: 2px;
//   border-style: solid;
//   border-radius: 20px;
//   width: 100%;
//   padding-bottom: 50px;
//   margin-top: 100px;

//   ${Input} {
//     height: 60px;
//     width: 300px;
//     margin-bottom: 10px;
//   }

//   ${Button} {
//     margin: 0;
//     height: 40px;
//     width: 300px;
//     justify-content: center;
//   }
// `;

export const HomePageSection = styled.div`
  .highlight {
    color: '#ffe5c0';
  }

  .sol-logo {
    width: 18px;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center; 
    flex-direction: column;
    align-items: center; 
  }
`;

export const StyledImage = styled.img`
  border-radius: 50%;
  max-width: 500px; // default max-width

  // Media query for smaller screens
  @media (max-width: 768px) {
    max-width: 250px; // smaller max-width for mobile devices
  }
`;

export const CenteredDiv = styled.div`
  display: flex;
  justify-content: center; 
  flex-direction: column;
  align-items: center; 
  margin-top: 150px;
`;

