
import styles from "../styles/ProjectCard.module.css"

export default function ProjectCard(props) {
  return (
  <div className={`card ${styles.cardCustom}`} style={{width: "18rem",}}>
      <a href={props.deployed} target="_blank" rel="noreferrer">
        <img
          src={props.img}
          className="card-img-top"
          height="160"
          alt={props.name}
        />
        <div className="card-body">
          <h5 className="card-title text-center text-light">{props.name}</h5>
        </div>
      </a>
    </div>
  );
}
