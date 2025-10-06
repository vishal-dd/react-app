import React from 'react';
import './ChooseMe.css'; // Import the stylesheet

const ChooseMe = () => {
  return (
    <section className="choose-me-section">
      <div className="container">
        
        {/* Top Section: Title and Description */}
        <div className="header-content">
          <p className="subtitle">GET TO KNOW MORE ABOUT ME</p>
          <h1 className="title">Why should you choose me?</h1>
          <p className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
          </p>
        </div>

        {/* Bottom Section: Three Columns */}
        <div className="features-grid">
          
          {/* Column 1 */}
          <div className="feature-item">
            <span className="background-number">1</span>
            <div className="content">
              <h2>
                Advocacy and <br />
                Legislative <br />
                Representation <br />
                for our Culture <br />
                and Businesses
              </h2>
              <p>
                Your membership of NHCA supports the representation of hookah interests with legislative bodies, lawmakers, and regulators at the federal, state, and local levels. The hookah sector and culture needs a strong unified voice in defending our businesses. Membership not only supports efforts.
              </p>
            </div>
          </div>
          
          {/* Column 2 */}
          <div className="feature-item">
            <span className="background-number">2</span>
            <div className="content">
              <h2>
                Tools, Resources, <br />
                and Education
              </h2>
              <p>
                NHCA will support its members in reaching out to their political representatives. We will be there for your business whenever it is threatened at the federal, state or municipal level. Members will receive regular updates on pending legislation...
              </p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="feature-item">
            <span className="background-number">3</span>
            <div className="content">
              <h2>
                Unifying <br />
                Voice
              </h2>
              <p>
                We need an ever-present organization that unites the segments of our sector to defend our culture and businesses. NHCA is uniting manufacturers, distributors, store owners, and lounges. Bringing together the industry will not only help defend the future of your business...
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ChooseMe;