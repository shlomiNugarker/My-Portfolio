import { SaasLogo } from '../assets/imgs/SaasLogo'
import { HtmlLogo } from '../assets/imgs/HtmlLogo'
import { MongoLogo } from '../assets/imgs/MongoLogo'
import { NodeJsLogo } from '../assets/imgs/NodeJsLogo'
import { ReactLogo } from '../assets/imgs/ReactLogo'
import { ReduxLogo } from '../assets/imgs/ReduxLogo'
import { VueLogo } from '../assets/imgs/VueLogo'
import { CssLogo } from '../assets/imgs/CssLogo'
import vuex from '../assets/imgs/vuex.png'

export const Skills = (props) => {
  return (
    <section className="skills" id="skills-page">
      <div className="title">
        <h1>SKILLS</h1>
        <p>HERE IS MY ARMAMENT</p>
      </div>

      <div className="divider"></div>

      <div className="container">
        <span>
          <NodeJsLogo />
          <p>Node.js</p>
        </span>

        <span>
          <VueLogo />
          <p>Vue.js</p>
        </span>

        <span>
          <ReactLogo />
          <p>React.js</p>
        </span>

        <span>
          <ReduxLogo />
          <p>Redux</p>
        </span>

        <span>
          <MongoLogo />
          <p>MongoDB</p>
        </span>

        <span>
          <HtmlLogo />
          <p>Html</p>
        </span>

        <span>
          <SaasLogo />
          <p>Sass</p>
        </span>

        <span>
          <CssLogo />
          <p>Css</p>
        </span>
        <span>
          <img src={vuex} alt="" />
          <p>Vuex</p>
        </span>
      </div>
    </section>
  )
}
