
export default function ProjectCard(props) {
  return (
  <div className="card card-custom" style={{"width": "18rem"}}>
      <a href={props.deployed} target="_blank" rel="noreferrer">
        <img
          src={props.img}
          className="card-img-top"
          height="160"
          alt={props.name}
        />
        <div className="card-body">
          <h5 className="card-title text-center">{props.name}</h5>
        </div>
      </a>
    </div>
  );
}
