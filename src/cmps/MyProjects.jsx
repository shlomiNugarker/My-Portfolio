import { useState } from 'react'
import { ProjectPreview } from './ProjectPreview'
import { utilService } from '../services/utilService'

export const MyProjects = (props) => {
  const projects = [
    {
      title: 'Travelsdin',
      tags: [
        'Javascript(ES6)',
        'MongoDB',
        'React.js',
        'Redux',
        'Rest API',
        'Node.js',
        'Live chat',
        'Socket.io',
      ],
      imgs: [
        'https://res.cloudinary.com/duajg3ah1/image/upload/v1662386727/ctivc99rxpjymdn0za1n.png',
        // 'https://res.cloudinary.com/duajg3ah1/image/upload/v1662038882/myPortfolio/o0sftmhf0qlilrsvkkqe.png',

        // 'https://res.cloudinary.com/duajg3ah1/image/upload/v1661420457/myPortfolio/asfnijahljr0euwmlcjz.png',
        // 'https://res.cloudinary.com/duajg3ah1/image/upload/v1661369952/myPortfolio/dzknz1bch2afrre2bnud.png',
      ],
      description: 'A social network project.',
      linkDemo: 'https://travelsdin.herokuapp.com/#/home',
      linkGitHub: 'https://github.com/shlomiNugarker/Social-Network-Front-',
    },
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
        'Drag and drop',
        'Node.js',
      ],
      imgs: [
        'https://res.cloudinary.com/duajg3ah1/image/upload/v1661076854/myPortfolio/fzewgnsmyharf6r7la8m.png',
        'https://res.cloudinary.com/duajg3ah1/image/upload/v1660916126/myPortfolio/qdtzolm9ldd5qlquq2aj.png',
        'https://res.cloudinary.com/duajg3ah1/image/upload/v1660916124/myPortfolio/z1stcuqxhfmapn4igopo.png',
        'https://res.cloudinary.com/duajg3ah1/image/upload/v1660916123/myPortfolio/ni1pvrzgoxeu71fr157e.png',
      ],
      description: 'Taskday is a project management system for collaboration.',
      linkDemo: 'https://fast-eyrie-76140.herokuapp.com/',
      linkGitHub: 'https://github.com/shlomiNugarker/sprint-4',
    },

    {
      title: 'Monopoly',
      tags: ['javascript(ES6)', 'Vue.js', 'SCSS', 'vuex', 'MVC'],
      imgs: [
        'https://res.cloudinary.com/duajg3ah1/image/upload/v1660923765/myPortfolio/oxf2ncafrtmiwushbjg2.png',
        'https://res.cloudinary.com/duajg3ah1/image/upload/v1661077030/myPortfolio/ypvbcwolwot13zpj83m1.png',
        'https://res.cloudinary.com/duajg3ah1/image/upload/v1661077094/myPortfolio/lxbklxfub6ar4b1gpuin.png',
      ],
      description: 'The most favorite game.',
      linkDemo: 'https://shlominugarker.github.io/monopoly-demo/#/',
      linkGitHub: 'https://github.com/shlomiNugarker/Monoploly-Vue.js',
    },
    {
      title: 'Chess',
      tags: ['Typescript'],
      imgs: [
        'https://res.cloudinary.com/duajg3ah1/image/upload/v1665134628/myPortfolio/kshsrpezdwtcjvw6kupy.png',
      ],
      description: 'Chess !!',
      linkDemo: 'https://shlominugarker.github.io/Chess/',
      linkGitHub: 'https://github.com/shlomiNugarker/Chess',
    },
    {
      title: 'Minesweeper',
      tags: ['Vannila Javascript(ES6)', '2D Arrays'],
      imgs: [
        'https://res.cloudinary.com/duajg3ah1/image/upload/v1661026713/myPortfolio/jewprayumjkndv8m8mbg.png',
      ],
      description:
        'Select a difficulty level to challenge yourself, and enjoy the game!',
      linkDemo: 'https://shlominugarker.github.io/minesweeper--sprint-1/',
      linkGitHub: 'https://github.com/shlomiNugarker/minesweeper--sprint-1',
    },
    {
      title: 'Snake',
      tags: ['Vannila Javascript(ES6)', '2D array'],
      imgs: [
        'https://res.cloudinary.com/duajg3ah1/image/upload/v1662967686/myPortfolio/fxznj0uz82fykb6whhbi.png',
      ],
      description: 'Try not to get disqualified.',
      linkDemo: 'https://shlominugarker.github.io/Snake-Vannila-JS/',
      linkGitHub: 'https://github.com/shlomiNugarker/Snake-Vannila-JS',
    },
    {
      title: 'Meme-Generator',
      tags: ['Vannila Javascript(ES6)', 'Canvas'],
      imgs: [
        'https://res.cloudinary.com/duajg3ah1/image/upload/v1660924455/myPortfolio/n9xkm3fgtpafoq5hejiu.png',
      ],
      description: ' Easily add text to images or memes.',
      linkDemo:
        'https://shlominugarker.github.io/Ultimate-Meme-Generator-sprint-2/',
      linkGitHub:
        'https://github.com/shlomiNugarker/Ultimate-Meme-Generator-sprint-2',
    },
    {
      title: 'Pacman',
      tags: ['Vannila Javascript(ES6)', '2D array'],
      imgs: [
        'https://res.cloudinary.com/duajg3ah1/image/upload/v1661097436/myPortfolio/xij76xyl0pe8xfdiugrs.png',
      ],
      description: 'Try not to get disqualified.',
      linkDemo: 'https://shlominugarker.github.io/pacman/',
      linkGitHub: 'https://github.com/shlomiNugarker/pacman',
    },

    {
      title: 'Mail-app',
      tags: ['Vue.js', 'Css', 'CRUDL'],
      imgs: [
        'https://res.cloudinary.com/duajg3ah1/image/upload/v1661112741/myPortfolio/up9mom63hxek86yuah1c.png',
      ],
      description: 'My first Vue app in Coding academy bootcamp.',
      linkDemo: 'https://shlominugarker.github.io/appAsusProj/#/mailBox',
      linkGitHub: 'https://github.com/shlomiNugarker/appAsusProj',
    },
  ]

  const [myProjects, setMyProjects] = useState(projects)

  return (
    <section className="my-projects" id="projects-page">
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
