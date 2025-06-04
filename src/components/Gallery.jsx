function Gallery(props) {
  return (
    <section className="gallery">
      <div className="container gallery-wrapper">
        <div className="gallery-text">
          <h2 className="gallery-title">{props.title}</h2>
          <p>
            Our trails have the best views around. Don't believe us? See for yourself
          </p>
        </div>
        <div className="gallery-grid">
          {props.imgs.map(img => (
            <div className="gallery-image" key={img.key}>
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;