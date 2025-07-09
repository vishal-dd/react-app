import './reuse.css'
export function Reuse(){
    return(
         <section className="business-section">
      <div className="business-container">
        {/* Left Side */}
        <div className="business-left">
          <h1 className="business-heading">
            Let your business thrive <br /> under our supervision
          </h1>
          <p className="business-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the
          </p>

          <div className="business-stats">
            <div className="stat-box">
              <span className="check-icon">✔</span>
              <div>
                <strong>100+</strong>
                <p>Successful Projects</p>
              </div>
            </div>
            <div className="stat-box">
              <span className="check-icon">✔</span>
              <div>
                <strong>978+</strong>
                <p>Clients Today</p>
              </div>
            </div>
          </div>

          <div className="business-buttons">
            <button className="btn-primary">Contact Now</button>
            <button className="btn-outline">Book a Demo Today →</button>
          </div>
        </div>

        {/* Right Side */}
        <div className="business-right">
          <div className="stats-card">
            <p className="card-title">Clients file scanning</p>
            <p className="card-subtitle">Total Clients</p>
            <h2 className="card-amount">$897,543</h2>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '14%' }}></div>
            </div>
            <div className="progress-labels">
              <span>14%</span>
              <span>$5M</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}