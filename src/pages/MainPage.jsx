import { LandingPage } from '../cmps/LandingPage'
import { About } from '../cmps/About'
import { MyProjects } from '../cmps/MyProjects'
import { Footer } from '../cmps/Footer'
import { Skills } from '../cmps/Skills'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const MainPage = (props) => {
  const [pageIds, setPageIds] = useState([
    '#land-page',
    '#about-page',
    '#skills-page',
    '#projects-page',
    '#Taskday',
    '#Monopoly',
    '#Mine-Sweeper',
    '#Meme-Generator',
    '#Social-Netwotk',
    '#footer-page',
  ])

  let [pageIdx, setPageIdx] = useState(0)

  const onClickNav = (ev, idx) => {
    setPageIdx(idx)
  }
  return (
    <section className="home-page">
      <LandingPage />
      <About />
      <Skills />
      <MyProjects />
      <Footer />

      <div className="nav">
        <div className={'btn '} onClick={(ev) => onClickNav(ev, 0)}>
          <a href={pageIds[pageIdx]}>Home</a>
        </div>
        <div className={'btn '} onClick={(ev) => onClickNav(ev, 1)}>
          <a href={pageIds[pageIdx]}>About</a>
        </div>
        <div className={'btn '} onClick={(ev) => onClickNav(ev, 2)}>
          <a href={pageIds[pageIdx]}>Skills</a>
        </div>
        <div className={'btn '} onClick={(ev) => onClickNav(ev, 3)}>
          <a href={pageIds[pageIdx]}>Projects</a>
        </div>
      </div>
    </section>
  )
}
