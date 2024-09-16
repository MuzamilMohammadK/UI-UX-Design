const ContactComponent: React.VFC = () => {
  return (
    <contact height="700px" width="1300px">
      <buttons flexDirection="row" justifyContent="center" alignItems="center" flex="1" style={{paddingTop:10,paddingBottom:10,paddingLeft:10,paddingRight:10}}>
        <HomeText>Home</HomeText>
      </buttons>
      <buttons flexDirection="row" justifyContent="center" alignItems="center" flex="1" style={{paddingTop:10,paddingBottom:10,paddingLeft:10,paddingRight:10}}>
        <HomeText>About</HomeText>
      </buttons>
      <buttons flexDirection="row" justifyContent="center" alignItems="center" flex="1" style={{paddingTop:10,paddingBottom:10,paddingLeft:10,paddingRight:10}}>
        <HomeText>Service</HomeText>
      </buttons>
      <buttons flexDirection="row" justifyContent="center" alignItems="center" flex="1" style={{paddingTop:10,paddingBottom:10,paddingLeft:10,paddingRight:10}}>
        <HomeText>skills</HomeText>
      </buttons>
      <buttons flexDirection="row" justifyContent="center" alignItems="center" flex="1" style={{paddingTop:10,paddingBottom:10,paddingLeft:10,paddingRight:10}}>
        <HomeText>Projects</HomeText>
      </buttons>
      <buttons flexDirection="row" justifyContent="center" alignItems="center" flex="1" style={{paddingTop:10,paddingBottom:10,paddingLeft:10,paddingRight:10}}>
        <HomeText>Contact</HomeText>
      </buttons>
      <buttons flexDirection="row" justifyContent="center" alignItems="center" flex="1" style={{paddingTop:10,paddingBottom:10,paddingLeft:10,paddingRight:10}}>
        <HomeText>Contact.</HomeText>
      </buttons>
      <headingcont flexDirection="row" justifyContent="center" alignItems="center" flex="1" style={{paddingTop:10,paddingBottom:10,paddingLeft:10,paddingRight:10}}>
        <ContactmeText>Contact me</ContactmeText>
      </headingcont>
      <contact flexDirection="row" justifyContent="center" alignItems="center" flex="1" style={{paddingTop:10,paddingBottom:10,paddingLeft:10,paddingRight:10}}>
        <+917893178596Text>+91 7893178596</+917893178596Text>
      </contact>
      <mail flexDirection="row" justifyContent="center" alignItems="center" flex="1" style={{paddingTop:10,paddingBottom:10,paddingLeft:10,paddingRight:10}}>
        <shaikmuzzu600@gmail.comText>shaikmuzzu600@gmail.com</shaikmuzzu600@gmail.comText>
      </mail>
      <mail flexDirection="row" justifyContent="center" alignItems="center" flex="1" style={{paddingTop:10,paddingBottom:10,paddingLeft:10,paddingRight:10}}>
        <Allrightsreserved2024Text>All rights reserved 2024</Allrightsreserved2024Text>
      </mail>
      <linkedinImage height="24px" width="24px" />
      <instagramImage height="24px" width="24px" />
    </contact>
  )
}

const contact = createBox<Theme>();
const buttons = createBox<Theme>();
const HomeText = createText<Theme>();
const headingcont = createBox<Theme>();
const ContactmeText = createText<Theme>();
const +917893178596Text = createText<Theme>();
const mail = createBox<Theme>();
const shaikmuzzu600@gmail.comText = createText<Theme>();
const Allrightsreserved2024Text = createText<Theme>();
const linkedinImage = createBox<Theme>();
const instagramImage = createBox<Theme>();
