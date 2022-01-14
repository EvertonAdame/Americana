import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import ImageSlider from '../components/Carousel';
import Hero from '../components/Hero/Hero';
import ProjectsTeam from '../components/ProjetcsTeam/ProjectsTeam';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';


const Home = () => {




  return (
    <Layout>
      <ImageSlider />
      <Section >

        <Hero />
      <Timeline />
      <ProjectsTeam />
      </Section>
      <Technologies />
    
     
      <Acomplishments />
    </Layout>
  );
};

export default Home;
