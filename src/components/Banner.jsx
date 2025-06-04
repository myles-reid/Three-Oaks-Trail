import Button from './Button';

function Banner() {
  return (
    <section className="banner">
      <div className="bg-contrast">
        <div className="container banner-container grid-center">
          <div className="banner-wrapper">
            <div className="banner-content">
              <h1 className="banner-title">Discover the Path Less Traveled</h1>
              <p className="banner-subtitle">
                Escape the noise and reconnect with nature on a guided horseback ride
                through the serene beauty of Three Oaks Trail.
                Whether you're seeking adventure or peaceful reflection, the trail awaits. 
              </p>
              <p className="tag">Book your ride today and experience the journey.</p>
            </div>
            <div className="banner-buttons">
              <Button type="secondary" />
              <Button type="primary"/>
            </div>
                    </div>
          </div>  
      </div>
    </section>
  );
}

export default Banner;