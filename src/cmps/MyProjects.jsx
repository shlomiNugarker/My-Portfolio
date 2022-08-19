import { useState } from 'react'
import { ProjectPreview } from './ProjectPreview'
import { utilService } from '../services/utilService'

export const MyProjects = (props) => {
  const projects = [
    {
      title: 'Taskday',
      tags: [
        'mongoDb',
        'javascript(ES6)',
        'Rest API',
        'Socket.io',
        'Vue.js',
        'SCSS',
        'vuex',
        'MVC',
        'Single-Page-Application',
      ],
      imgs: [
        'https://res.cloudinary.com/duajg3ah1/image/upload/v1660916126/myPortfolio/qdtzolm9ldd5qlquq2aj.png',
      ],
      description: 'Full-Stack app',
      linkDemo: 'https://fast-eyrie-76140.herokuapp.com/',
      linkGitHub: 'https://github.com/shlomiNugarker/sprint-4',
    },
    ///////
    {
      title: 'Monopoly',
      tags: [
        'javascript(ES6)',
        'Socket.io',
        'Vue.js',
        'SCSS',
        'vuex',
        'MVC',
        'Single-Page-Application',
      ],
      imgs: [
        'https://res.cloudinary.com/duajg3ah1/image/upload/v1660923765/myPortfolio/oxf2ncafrtmiwushbjg2.png',
      ],
      description: 'monopoly game',
      linkDemo: 'https://shlominugarker.github.io/monopoly-demo/#/',
      linkGitHub: 'https://github.com/shlomiNugarker/Monoploly-Vue.js',
    },
    /////
    {
      title: 'Mine Sweeper',
      tags: ['Vannila Javascript(ES6)', '2D Arrays'],
      imgs: [
        'https://res.cloudinary.com/duajg3ah1/image/upload/v1660924156/myPortfolio/f69gqb2muodmd4fsm57g.png',
      ],
      description: 'Mine Sweeper game',
      linkDemo: 'https://shlominugarker.github.io/minesweeper--sprint-1/',
      linkGitHub: 'https://github.com/shlomiNugarker/minesweeper--sprint-1',
    },
    //
    {
      title: 'Meme-Generator',
      tags: ['Vannila Javascript(ES6)', 'Canvas'],
      imgs: [
        'https://res.cloudinary.com/duajg3ah1/image/upload/v1660924455/myPortfolio/n9xkm3fgtpafoq5hejiu.png',
      ],
      description: 'Meme-Generator',
      linkDemo:
        'https://shlominugarker.github.io/Ultimate-Meme-Generator-sprint-2/',
      linkGitHub:
        'https://github.com/shlomiNugarker/Ultimate-Meme-Generator-sprint-2',
    },
    /////
  ]

  const [myProjects, setMyProjects] = useState(projects)

  return (
    <section className="my-projects">
      <div className="container">
        <div className="title">
          <h1>MY PEOJECTS</h1>
          <p>THIS IS MY STORY</p>
        </div>

        <div className="divider"></div>

        <div className="projectList">
          {myProjects.map((project) => (
            <ProjectPreview key={utilService.makeId()} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
