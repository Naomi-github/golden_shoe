import React from "react";

const Explore = () => {
  return (
    <section id="explore">
      <div className="container">
        <div className="row row__column">
          <h2>
            Want to get involved? 
            Show us your shoes!
          </h2>
          <div className="social__links">
              <a href="https://twitter.com/" target="_blank">
                <img className="socail__link" src="../assets/twitter.svg" alt="Twitter" />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <img className="socail__link" src="../assets/instagram.svg" alt="Instagram" />
              </a>
              <a href="https://www.tiktok.com/" target="_blank">
                <img className="socail__link" src="../assets/tiktok.svg" alt="TikTok" />
              </a>
              <a href="https://www.facebook.com/" target="_blank">
                <img className="socail__link" src="../assets/facebook.svg" alt="Facebook" />
              </a>
          </div>
          <p>
            Follow us on social media to share your shoes and get involved!
          </p>

        </div>
      </div>
    </section>
  );
};

export default Explore;
