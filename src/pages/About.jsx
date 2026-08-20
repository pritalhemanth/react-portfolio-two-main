import './AboutPage.css';
import AboutSection from '../components/AboutSection/AboutSection';
import GitHubStats from '../components/GitHubStats/GitHubStats';

export const SKILLS = [
  { name: 'HTML5', level: 'Advanced', icon: '🌐' },
  { name: 'CSS3', level: 'Advanced', icon: '🎨' },
  { name: 'JavaScript', level: 'Advanced', icon: '⚡' },
  { name: 'React', level: 'Intermediate', icon: '⚛️' }
];



function About() {
  return (
    <div className='about-page container'>
      <AboutSection />

      

      <section style={{ marginTop: '40px' }}>
        <h2>GitHub Activity</h2>
        <GitHubStats username='pritalhemanth' />
      </section>
    </div>
  );
}
export default About;