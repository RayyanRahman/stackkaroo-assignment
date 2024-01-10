import img1 from "../images/img-1.svg";
import call from "../images/fluent_call-24-filled.svg";
import "../Styles/Digital.css";
const Digital = () => {
  return (
    <>
      <div className="digi-main">
        <div className="digi-heading">
          <p className="wrapper">Diversifying the Designs of Digital World</p>
        </div>
        <div className="para-img">
          <p className="digi-para">
            Explorogent International Services Private Limited (EISPL) is one of
            the most famous companies in the sector of Web and Mobile
            Development. In the market, EISPL has a strong presence in providing
            quality services to its clients.
            <br />
            <br />
            EISPL is convinced that one should diversify the offering, given the
            changing needs of the clients. That is why we engage in multiple
            projects and activities. We also possess knowledge in web
            development, app development, UI/UX design, as well as digital
            marketing.
          </p>
          <img src={img1} alt="img1" className="digi-img" />
        </div>
        <div className="digi-button">
          <div className="call">
            <img src={call} alt="call" />
          </div>
          <div className="digi-text">Book a Call</div>
        </div>
      </div>
      <p className="text-wrappers">
        In the realm of digital solutions, we offer expertise in
      </p>
      <div className="options">
        <div className="rectangle">
          <div className="text-wrap">Website Development</div>
        </div>
        <div className="rectangle">
          <div className="text-wrap">App Development</div>
        </div>
        <div className="rectangle">
          <div className="text-wrap">UI/UX Design</div>
        </div>
        <div className="rectangle">
          <div className="text-wrap">Digital Marketing</div>
        </div>
        <div className="rectangle">
          <div className="text-wrap">SEO Optimization</div>
        </div>
      </div>
      <p className="text-wrappers">
        showcasing our proficiency across various facets of the digital platform
      </p>
      <div className="label">
        <p className="stay">
          Stay Ahead!
          <br />
          Launch Your Next Project with Stackkaroo
        </p>
      </div>
    </>
  );
};
export default Digital;
