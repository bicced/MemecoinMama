import { Button, Container, Footer, Grid, StyledHeading, StyledParagraph, StyledSubHeading } from "../styled";
import nocodeCardImage from '../assets/nocodeCardImage.svg';
import bigMemecoinCardImage from '../assets/bigMemecoinCardImage.svg';
import { Link, useNavigate } from "react-router-dom";
import { StyledImage, CenteredDiv, StyledInfoCard, StepsGrid, HomePageSection } from '../styled';
import sol from '../assets/sol.png';
import fatmom from '../assets/fatmom.svg';
import logo from '../assets/logo.png';
import textLogo from '../assets/textLogo.svg';

export default function HomePage() {
  const navigate = useNavigate();
  
  const navigateToCreate = () => navigate('/create');

  return (
    <Container>
      <Grid>
        <HomePageSection>
          <StyledHeading>Create your own <span style={{color: '#fcb852'}}>Memecoin!</span></StyledHeading>
          <StyledSubHeading>Simplest way to build your own token without writing any code</StyledSubHeading>
          <Button onClick={navigateToCreate}>Create Memecoin</Button>
          <StyledParagraph style={{color: '#ffe5c0'}}>
            Currently available for <img src={sol} alt="Solana logo" className="sol-logo" /> Solana
          </StyledParagraph>
        </HomePageSection>
        <div>
          <StyledImage src={logo} />
        </div>
      </Grid>
      <a href="https://www.producthunt.com/posts/memecoin-mama?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-memecoin&#0045;mama" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=442450&theme=dark" alt="Memecoin&#0032;Mama - Solana&#0032;Memecoin&#0032;generator&#0032;&#0045;&#0032;build&#0032;a&#0032;Memecoin&#0032;with&#0032;no&#0032;code&#0033; | Product Hunt" style={{width: 250, height: 54, marginTop: 20}} /></a>
      <CenteredDiv style={{marginBottom: 100}}>
        <StyledSubHeading style={{color: '#fcb852'}}>Join over 10000+ Memecoins in the Solana ecosystem!</StyledSubHeading>
      </CenteredDiv>
      
      <Grid>
        <StyledInfoCard>
          <StyledSubHeading>Build the next big Memecoin!</StyledSubHeading>
          <img src={bigMemecoinCardImage} alt="Coins" className="info-card-image" />
          <StyledParagraph style={{color: "#ffe5c0"}}>Become the next $Bonk $Wif or $Popcat. Take your coin to $100 million+ market cap!</StyledParagraph>
        </StyledInfoCard>
        
        <StyledInfoCard>
          <StyledSubHeading>No coding needed!</StyledSubHeading>
          <img src={nocodeCardImage} alt="No Code Needed" className="info-card-image" />
          <StyledParagraph style={{color: "#ffe5c0"}}>Create your without coding! Just connect your wallet, add token options and launch!</StyledParagraph>
        </StyledInfoCard>
      </Grid>
      
      <CenteredDiv>
        <StyledSubHeading  style={{marginBottom: 100}}>4 Step Process to Create Memecoin on Solana</StyledSubHeading>
        <StepsGrid>
          <div style={{backgroundColor: 'rgba(255, 255, 255, 0.2)', textAlign: 'center', padding: 30, borderColor: '#ffe5c0', borderWidth: 2, borderStyle: 'solid', borderRadius: 20}}>
            <StyledSubHeading style={{fontSize: 22}}>1. Create and Mint Your Token</StyledSubHeading>
            <StyledParagraph style={{color: '#ffe5c0', fontSize: 18}}>Begin by crafting your unique Memecoin. Our intuitive interface allows you to easily create and mint your token, offering various customizable options to tailor it to your vision.</StyledParagraph>
          </div>
          <div style={{backgroundColor: 'rgba(255, 255, 255, 0.2)', textAlign: 'center', padding: 30, borderColor: '#ffe5c0', borderWidth: 2, borderStyle: 'solid', borderRadius: 20}}>
            <StyledSubHeading style={{fontSize: 22}}>2. Revoke Mint and Freeze Authority</StyledSubHeading>
            <StyledParagraph style={{color: '#ffe5c0', fontSize: 18}}>To enhance the credibility and stability of your Memecoin, our platform enables you to revoke the mint and freeze authority. This step is crucial for establishing trust and security in your digital currency.</StyledParagraph>
          </div>
          <div style={{backgroundColor: 'rgba(255, 255, 255, 0.2)', textAlign: 'center', padding: 30, borderColor: '#ffe5c0', borderWidth: 2, borderStyle: 'solid', borderRadius: 20}}>
            <StyledSubHeading style={{fontSize: 22}}>3. Create a Liquidity Pool on a Decentralized Exchange</StyledSubHeading>
            <StyledParagraph style={{color: '#ffe5c0', fontSize: 18}}>Increase the accessibility and trading potential of your Memecoin by setting up a liquidity pool on a DEX. This facilitates seamless trading and adds liquidity, vital for your Memecoin’s growth.</StyledParagraph>
          </div>
          <div style={{backgroundColor: 'rgba(255, 255, 255, 0.2)', textAlign: 'center', padding: 30, borderColor: '#ffe5c0', borderWidth: 2, borderStyle: 'solid', borderRadius: 20}}>
            <StyledSubHeading style={{fontSize: 22}}>4. Burn LP Tokens</StyledSubHeading>
            <StyledParagraph style={{color: '#ffe5c0', fontSize: 18}}>As a final step, our platform assists you in burning LP tokens. This action removes your access to the liquidity pool, an important aspect of ensuring the liquidity will not be rugged and obtaining trust from the community</StyledParagraph>
          </div>
        </StepsGrid>
      </CenteredDiv>
      
      <CenteredDiv>
         <Grid>
          <div style={{textAlign: 'center'}}>
            <StyledImage src={fatmom} />
          </div>
          <div style={{textAlign: 'center'}}>
            <StyledSubHeading  style={{marginBottom: 50}}>Why Create a Memecoin on Solana?</StyledSubHeading>
            <StyledParagraph style={{color: '#ffe5c0'}}>Experience the prime benefits of launching your Memecoin on Solana, a network celebrated for its low transaction fees and rapid processing capabilities. Solana stands out as the optimal choice for Memecoin creators due to its cost-effective and swift transaction environment, crucial for the growth and scalability of your digital currency. A multitude of Memecoins have already flourished on Solana, supported by a robust and active community. This combination of affordability, speed, and a vibrant ecosystem makes Solana the ideal platform to build and expand your Memecoin with confidence and ease.</StyledParagraph>
          </div>
        </Grid>
      </CenteredDiv>
      <CenteredDiv>
        <StyledSubHeading>Build your own Memecoin now!</StyledSubHeading>
        <StyledParagraph>Click the button below to get started</StyledParagraph>
        <Button onClick={() => navigate('/create')}>Create Memecoin</Button>
      </CenteredDiv>
      
      <Footer>
        <div>
          <img src={textLogo} style={{maxHeight: 60}} onClick={() => navigate('/')} />
          <div>© 2024 memecoinmama.com</div>
        </div>
        <div>
          <Link style={{color: "white"}} to="/create">Create Memecoin</Link>
          <br/><br/>
          <Link style={{color: "white"}} to="/disclaimer">Disclaimer</Link>
        </div>
      </Footer>
    </Container>
  );
}
