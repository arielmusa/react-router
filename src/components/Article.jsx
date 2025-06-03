export default function Article({ title, imgUrl, description }) {
  return (
    <div className="col-md-4">
      <div className="card h-100">
        <img src={imgUrl} className="card-img-top" alt={title}></img>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}
