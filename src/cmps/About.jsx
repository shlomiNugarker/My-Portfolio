import { GitHubLogo } from '../assets/imgs/GitHubLogo'
import { LinkedinLogo } from '../assets/imgs/LinkedinLogo'

export const About = (props) => {
  return (
    <section className="about">
      <div className="container">
        <div className="title">
          <h2>ABOUT ME</h2>
          <p>HOPE TO KNOW YOU AFTER</p>
        </div>

        <div className="divider"></div>

        <div className="img-container">
          <img
            src="https://res.cloudinary.com/duajg3ah1/image/upload/v1660763357/shlomiN_mewit4.jpg"
            alt=""
            className="img"
          />
        </div>

        <div className="details-container">
          <div className="description">
            <div className="subtitle">
              <h3>WHO AM I ?</h3>
            </div>

            <p>
              I'm a Full-Stack Developer student. Actually, I have a Licence
              BAC+3 in IT and I just started a computer science Master
              specialized in artificial intelligence and collaborative systems.
              IT is not only my professional background. It is also and above
              all a passion that has grown since I was 16 years old.
            </p>

            <p>
              I always liked to get into projects using the skills that I did
              not have or were even spare pure programming like web design, 3D
              modeling ect... This allowed me to learn to be autonomous and to
              learn on my own, certainly not without difficulties far from it,
              but I always managed to overcome the obstacles and solve the
              problems I encountered !
            </p>
          </div>

          <div className="my-details">
            <div className="fullname">
              <h2>Shlomi Nugarker</h2>
            </div>

            <div className="email">
              <a href="mailto: shlomin1231@gmail.com" target="_blank">
                <p>E-mail: shlomin1231@gmail.com</p>
              </a>
            </div>

            <div className="phone">
              <p>Phone: 0529526762</p>
            </div>

            <div className="social-bar">
              <span className="linkedin logo">
                <a
                  href="https://www.linkedin.com/in/shlomi-nugarker-b89777155/"
                  target="_blank"
                >
                  <LinkedinLogo />
                </a>
              </span>

              <span className="github logo">
                <a href="https://github.com/shlomiNugarker" target="_blank">
                  <GitHubLogo />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
