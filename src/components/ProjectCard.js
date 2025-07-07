import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link, imgName }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div
          className="proj-imgbx"
          style={{ height: "400px", justifyContent: "center", display: "flex" }}
        >
          <img
            src={imgUrl}
            alt={title}
            className=""
            style={{
              height: "100%",
              width: "220px",
              objectFit:
                imgName === "vriendly.png" || imgName === "hukuka-uygun.svg"
                  ? "none"
                  : "contain",
            }}
          />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};
