/* eslint-disable jsx-a11y/anchor-is-valid */
import './home.css'

export default function Home() {
  return (
    <div className='home-container'>
      <h1>Alysson Rychard</h1>
      <span>Veja meus links 👇</span>

      <main className='links'>
        <section className='link-area'>
          <a href="#">
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
      </main>
    </div>
  )
}