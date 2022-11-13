
import './home.css'
import { Social } from '../../components/Social'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function Home() {
  return (
    <div className='home-container'>
      <h1>Alysson Rychard</h1>
      <span>Veja meus links 👇</span>

      <main className='links'>
        <section className='link-area'>
          <a href="#" >
            <p className='link-text'>Portfólio</p>
          </a>
        </section>

        <section className='link-area'>
          <a href="#">
            <p className='link-text'>Github</p>
          </a>
        </section>

        <section className='link-area'>
          <a href="#">
            <p className='link-text'>Linkedin</p>
          </a>
        </section>

        <footer>
          <Social url="https://www.linkedin.com/in/arcorreiaa/">
            <FaLinkedin size={35} color="#ff3a3a" />
          </Social>

          <Social url="https://www.instagram.com/arcoofc/">
            <FaInstagram size={35} color="#ff3a3a" />
          </Social>
        </footer>
      </main>
    </div>
  )
}