const SkillsComponent: React.VFC = () => {
  return (
    <Skills height="700px" width="1300px">
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
        <HomeText>Skills.</HomeText>
      </buttons>
      <Frame10 flexDirection="row" justifyContent="center" alignItems="center" flex="1" style={{paddingTop:10,paddingBottom:10,paddingLeft:10,paddingRight:10}}>
        <PythonText>Python</PythonText>
      </Frame10>
      <Frame12 flexDirection="row" justifyContent="center" alignItems="center" flex="1" style={{paddingTop:10,paddingBottom:10,paddingLeft:10,paddingRight:10}}>
        <HTMLText>HTML</HTMLText>
      </Frame12>
      <Frame14 flexDirection="row" justifyContent="center" alignItems="center" flex="1" style={{paddingTop:10,paddingBottom:10,paddingLeft:10,paddingRight:10}}>
        <JavascriptText>Java script</JavascriptText>
      </Frame14>
      <Frame11 flexDirection="row" justifyContent="center" alignItems="center" flex="1" style={{paddingTop:10,paddingBottom:10,paddingLeft:10,paddingRight:10}}>
        <JavaText>Java</JavaText>
      </Frame11>
      <Frame13 flexDirection="row" justifyContent="center" alignItems="center" flex="1" style={{paddingTop:10,paddingBottom:10,paddingLeft:10,paddingRight:10}}>
        <CSSText>CSS</CSSText>
      </Frame13>
      <Frame15 flexDirection="row" justifyContent="center" alignItems="center" flex="1" style={{paddingTop:10,paddingBottom:10,paddingLeft:10,paddingRight:10}}>
        <ReactText>React</ReactText>
      </Frame15>
      <Line5Image />
      <Line9Image />
      <Line13Image />
      <Line7Image />
      <Line10Image />
      <Line14Image />
      <Line6Image />
      <Line11Image />
      <Line15Image />
      <Line8Image />
      <Line12Image />
      <Line16Image />
      <Union>
        <Rectangle16 />
        <Vector1Image />
      </Union>
      <Union>
        <Rectangle16 />
        <Vector1Image />
      </Union>
      <Union>
        <Rectangle16 />
        <Vector1Image />
      </Union>
      <Union>
        <Rectangle16 />
        <Vector1Image />
      </Union>
      <Union>
        <Rectangle16 />
        <Vector1Image />
      </Union>
      <Union>
        <Rectangle16 />
        <Vector1Image />
      </Union>
      <60%Text>60%</60%Text>
      <60%Text>60%</60%Text>
      <20%Text>20%</20%Text>
      <30%Text>30%</30%Text>
      <70%Text>70%</70%Text>
      <20%Text>20%</20%Text>
    </Skills>
  )
}

const Skills = createBox<Theme>();
const buttons = createBox<Theme>();
const HomeText = createText<Theme>();
const Frame10 = createBox<Theme>();
const PythonText = createText<Theme>();
const Frame12 = createBox<Theme>();
const HTMLText = createText<Theme>();
const Frame14 = createBox<Theme>();
const JavascriptText = createText<Theme>();
const Frame11 = createBox<Theme>();
const JavaText = createText<Theme>();
const Frame13 = createBox<Theme>();
const CSSText = createText<Theme>();
const Frame15 = createBox<Theme>();
const ReactText = createText<Theme>();
const Rectangle16 = createBox<Theme>();
const 60%Text = createText<Theme>();
const 20%Text = createText<Theme>();
const 30%Text = createText<Theme>();
const 70%Text = createText<Theme>();
