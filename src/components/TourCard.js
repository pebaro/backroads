const Tour = (
  {
    src, 
    date, 
    tour,
    description, 
    location, 
    duration, 
    price
  }
) => { 
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={src} className="tour-img" alt="" />

        <p className="tour-date">{date}</p>
      </div>

      <div className="tour-info">
        <div className="tour-title"><h4>{tour}</h4></div>

        <p>{description}</p>

        <div className="tour-footer">
          <p><span><i className="fas fa-map"></i></span> {location}</p>

          <p>{duration} days</p>

          <p>from ${price}</p>
        </div>
      </div>
    </article>  
  )
}

export default Tour
