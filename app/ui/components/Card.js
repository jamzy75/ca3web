
const Card = ({ title, description, imageUrl }) => {
    return (
      <div className="card">
        <img src={imageUrl} alt={title} />
        <div className="card-content">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <style jsx>{`
          .card {
            border: 1px solid #ccc;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            max-width: 300px;
            margin: 0 auto;
          }
          .card img {
            width: 100%;
            height: auto;
          }
          .card-content {
            padding: 16px;
          }
          .card-content h2 {
            margin-top: 0;
            font-size: 1.5rem;
          }
        `}</style>
      </div>
    );
  };
  
  export default Card;
  