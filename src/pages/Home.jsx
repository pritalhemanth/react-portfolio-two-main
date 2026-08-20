import { projectsData } from '../data/projects';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import Hero from '../components/Hero/Hero';
import AboutSection from '../components/AboutSection/AboutSection';
import { SKILLS } from  './About';
import SkillCard from '../components/SkillCard/SkillCard';


function Home() {
  const featured = projectsData.filter(p => p.featured);

  return (
    <div className='home-page'>
      <Hero />
      <AboutSection />

      <section className='featured-section container' id='projects'>
        <h2>Featured Projects</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {featured.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
  
      <section id='skills' className='skills-section' style={{ marginTop: '20px', marginBottom: '30px'}}>
        <h2>Skills</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '50px' }}>
          {SKILLS.map(s => <SkillCard key={s.name} name={s.name} level={s.level} icon={s.icon} />)}
        </div>
      

      </section>
      </section>
    </div>
  );
}
export default Home;