import "../Styles/Digital.css";
import img1 from "../images/our.svg";
import call from "../images/currency.svg";
const OurStory = () => {
  return (
    <>
      <div className="digi-main">
        <div className="digi-heading">
          <p className="digi-wrapper">Our Story</p>
        </div>
        <div className="para-img">
          <p className="digi-para">
            Guiding EISPL as Directors, Mr. Sourav Gupta and Mr. Chandan Mishra
            bring their extensive experience to the forefront as industry
            veterans. Our team is fueled by innovation, continually striving to
            exceed customer expectations.
            <br />
            <br />
            Operating from our registered office in Agartala Sadar, Tripura (W),
            our company is officially registered with the Corporate
            Identification Number (CIN). Our active status and an authorized
            share capital of Rs 10.00 lac are a source of pride.
          </p>
          <img src={img1} alt="img1" className="digi-img" />
        </div>
        <div className="digi-button2">
          <div className="calls">
            <img src={call} alt="call2" />
          </div>
          <div className="digi-text2">Get Estimated Project Cost</div>
        </div>
        <div className="news">
          <div className="choose">Why Choose Us?</div>
          <p className="text-wrappers">
            We excel with reliability, innovation and customer-centric approach
            for our quality products.
            <br />
            Our dedicated team ensures that the solutions provided are
            dependable and long-term
          </p>
        </div>
      </div>
    </>
  );
};
export default OurStory;
