import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

type Props = {
  title: string;
  description: string;
  imgPath: string;
  githubLink: string;
  demoLink: string;
  isBlog?: boolean;
};

function ProjectCard(props: Props) {
  const { title, description, imgPath, githubLink, demoLink, isBlog } = props;

  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={imgPath}
        alt="card-img"
        style={{ maxHeight: 215 }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>
        <div className="d-flex flex-column justify-content-between h-100">
          <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>
          <div>
            <Button variant="primary" href={githubLink} target="_blank">
              <BsGithub /> &nbsp;
              {isBlog ? "Blog" : "GitHub"}
            </Button>

            <Button
              variant="primary"
              href={demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCard;
