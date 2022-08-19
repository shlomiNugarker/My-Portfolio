import { LandingPage } from '../cmps/LandingPage'
import { About } from '../cmps/About'
import { MyProjects } from '../cmps/MyProjects'
import { Footer } from '../cmps/Footer'
import { Skills } from '../cmps/Skills'

export const MainPage = (props) => {
  return (
    <section className="home-page">
      <LandingPage />
      <About />
      <Skills />
      <MyProjects />
      <Footer />
    </section>
  )
}
