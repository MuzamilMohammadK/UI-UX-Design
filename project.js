const ProjectsComponent: React.VFC = () => {
  return (
    <projects height="700px" width="1300px">
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
        <HomeText>Projects.</HomeText>
      </buttons>
      <Component4 height="200px" width="300px">
        <Rectangle3Image />
      </Component4>
      <Component5 height="200px" width="300px">
        <Rectangle3Image />
      </Component5>
    </projects>
  )
}

const projects = createBox<Theme>();
const buttons = createBox<Theme>();
const HomeText = createText<Theme>();
const Component4 = createBox<Theme>();
const Rectangle3Image = createBox<Theme>();
const Component5 = createBox<Theme>();
