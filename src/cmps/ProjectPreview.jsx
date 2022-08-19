import { utilService } from '../services/utilService'

export const ProjectPreview = ({ project }) => {
  return (
    <section className="project-preview">
      <div className="container">
        <div className="title">
          <div className="divider"></div>
          <h4>{project.title}</h4>
          <div className="divider"></div>
        </div>

        <div className="imgs">
          <a href={project.linkDemo} target="_blank">
            <img src={project.imgs[0]} alt="" className="img" />
          </a>
        </div>

        <div className="tags">
          {project.tags.map((tag) => (
            <p key={utilService.makeId()}>{tag}</p>
          ))}
        </div>

        <div className="details">
          {project.linkGitHub && (
            <div className="githun-link">
              <a href={project.linkGitHub}>
                <p>GitHub: {project.linkGitHub}</p>
              </a>
            </div>
          )}

          {project.linkDemo && (
            <div className="Demo-link">
              <a href={project.linkDemo}>
                <p>Demo: {project.linkDemo}</p>
              </a>
            </div>
          )}

          <div className="description">
            description:
            <p>{project.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
