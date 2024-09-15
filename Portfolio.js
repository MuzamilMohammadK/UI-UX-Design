const PortfolioComponent: React.VFC = () => {
  return (
    <portfolio>
      <aboutdesigner>
        <Rectangle13Image />
        <WhatsAppImage2024-07-26at00.30.03_b557d48c1Image />
      </aboutdesigner>
      <buttons>
        <HomeText>Home</HomeText>
      </buttons>
      <buttons>
        <HomeText>About</HomeText>
      </buttons>
      <buttons>
        <HomeText>Service</HomeText>
      </buttons>
      <buttons>
        <HomeText>skills</HomeText>
      </buttons>
      <buttons>
        <HomeText>Projects</HomeText>
      </buttons>
      <buttons>
        <HomeText>Contact</HomeText>
      </buttons>
      <buttons>
        <HomeText>Portfolio.</HomeText>
      </buttons>
      <hello>
        <Hello,It’sme,MuzamilKamalapuramText>Hello, It’s me, Muzamil Kamalapuram</Hello,It’sme,MuzamilKamalapuramText>
      </hello>
      <About>
        <UI/UXDesigner|Problemsolving|DataanalysisText>UI/UX Designer | Problem solving | Data analysis</UI/UXDesigner|Problemsolving|DataanalysisText>
      </About>
    </portfolio>
  )
}

const portfolio = styled.View`
  height: 700px;
  width: 1300px;
  background-color: ;
  border: 2px solid #a2a2a2;
`
const aboutdesigner = styled.View`
  height: 255px;
  width: 349px;
`
const WhatsAppImage2024-07-26at00.30.03_b557d48c1Image = styled.View`
  height: 417px;
  width: 324px;
`
const buttons = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 10px;
`

const buttonsSpacer = styled.View`
width: 10px;
`

const HomeText = styled.Text`
  text-align: left;
  vertical-align: top;
  font-family: Source Serif Pro;
  font-weight: regular;
  font-size: 16px;
  line-height: auto;
  color: #fff3f3;
`
const hello = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 10px;
`

const helloSpacer = styled.View`
width: 10px;
`

const Hello,It’sme,MuzamilKamalapuramText = styled.Text`
  text-align: left;
  vertical-align: top;
  font-family: Playfair Display;
  font-weight: semibold;
  font-size: 36px;
  line-height: auto;
`
const About = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 10px;
`

const AboutSpacer = styled.View`
width: 10px;
`

const UI/UXDesigner|Problemsolving|DataanalysisText = styled.Text`
  max-width: 355px;
  text-align: left;
  vertical-align: top;
  font-family: Source Serif Pro;
  font-weight: regular;
  font-size: 16px;
  line-height: auto;
  color: #e4e4e4;
`
