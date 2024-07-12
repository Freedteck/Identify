import { useNavigate } from 'react-router-dom';
import '../styles/hero.css'

const Hero = () => {
  const navigate = useNavigate()

  const handleConnect = () => {
    navigate('/dashboard');
  };

  return <section className="hero">
    <h1>Secure <span>Your Identity</span> <br /> with Blockchain Technology</h1>
    <p> Protect your personal data with our decentralized application.</p>
    <button onClick={handleConnect}>Get started</button>
  </section>
}

export default Hero
