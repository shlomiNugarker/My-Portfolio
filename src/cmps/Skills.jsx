import { HtmlLogo } from '../assets/imgs/HtmlLogo'
import { MongoLogo } from '../assets/imgs/MongoLogo'
import { NodeJsLogo } from '../assets/imgs/NodeJsLogo'
import { ReactLogo } from '../assets/imgs/ReactLogo'
import { ReduxLogo } from '../assets/imgs/ReduxLogo'
import { VueLogo } from '../assets/imgs/VueLogo'

export const Skills = (props) => {
  return (
    <section className="skills">
      <div className="title">
        <h1>SKILLS</h1>
        <p>HERE IS MY ARMAMENT</p>
      </div>

      <div className="divider"></div>

      <div className="container">
        <NodeJsLogo />
        <VueLogo />
        <ReactLogo />
        <ReduxLogo />
        <MongoLogo />
        <HtmlLogo />
      </div>
    </section>
  )
}
