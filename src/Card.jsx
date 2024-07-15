import React from "react";

const Card = ({
  title,
  location,
  googleMapsUrl,
  startDate,
  endDate,
  description,
  imageUrl,
}) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <div className="card-details">
        <h2>{title}</h2>
        <p>
          <strong>Location:</strong> {location}
        </p>
        <p>
          <strong>Dates:</strong> {startDate} - {endDate}
        </p>
        <p>{description}</p>
        <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
          View on Google Maps
        </a>
      </div>
    </div>
  );
};

export default Card;
