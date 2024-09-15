const AboutComponent: React.VFC = () => {
  return (
    <about>
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
        <HomeText>About.</HomeText>
      </buttons>
      <About>
        <Iamapassionateproblem-solverwithastrongbackgroundinUI/UXdesignandteamleadership.Withexperienceincreatingintuitiveanduser-centereddesigns,Iexcelatturningcomplexchallengesintosimple,elegantsolutions.MyjourneyindesignisfueledbyadeepcuriosityandadesiretoenhancetheuserexperienceineveryprojectIundertake.Iamalwayseagertotakeonnewchallengesandcontinuelearninginthisever-evolvingfield.Whetherworkingonasoloprojectorleadingateam,mygoalistocreatedesignsthatnotonlymeetuserneedsbutalsoexceedexpectations.Text>          I am a passionate problem-solver with a strong background in UI/UX design and team leadership. With experience in creating intuitive and user-centered designs, I excel at turning complex challenges into simple, elegant solutions. My journey in design is fueled by a deep curiosity and a desire to enhance the user experience in every project I undertake.
          I am always eager to take on new challenges and continue learning in this ever-evolving field. Whether working on a solo project or leading a team, my goal is to create designs that not only meet user needs but also exceed expectations.</Iamapassionateproblem-solverwithastrongbackgroundinUI/UXdesignandteamleadership.Withexperienceincreatingintuitiveanduser-centereddesigns,Iexcelatturningcomplexchallengesintosimple,elegantsolutions.MyjourneyindesignisfueledbyadeepcuriosityandadesiretoenhancetheuserexperienceineveryprojectIundertake.Iamalwayseagertotakeonnewchallengesandcontinuelearninginthisever-evolvingfield.Whetherworkingonasoloprojectorleadingateam,mygoalistocreatedesignsthatnotonlymeetuserneedsbutalsoexceedexpectations.Text>
      </About>
    </about>
  )
}

const about = styled.View`
  height: 700px;
  width: 1300px;
  background-color: #030303;
  border: 2px solid #a2a2a2;
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
  color: #b5a9a9;
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

const Iamapassionateproblem-solverwithastrongbackgroundinUI/UXdesignandteamleadership.Withexperienceincreatingintuitiveanduser-centereddesigns,Iexcelatturningcomplexchallengesintosimple,elegantsolutions.MyjourneyindesignisfueledbyadeepcuriosityandadesiretoenhancetheuserexperienceineveryprojectIundertake.Iamalwayseagertotakeonnewchallengesandcontinuelearninginthisever-evolvingfield.Whetherworkingonasoloprojectorleadingateam,mygoalistocreatedesignsthatnotonlymeetuserneedsbutalsoexceedexpectations.Text = styled.Text`
  max-width: 949px;
  text-align: center;
  vertical-align: top;
  font-family: Source Serif Pro;
  font-weight: regular;
  font-size: 20px;
  line-height: auto;
  color: #ffffff;
`
