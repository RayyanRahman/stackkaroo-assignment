import "../Styles/LastComponent.css";
import img1 from "../images/last-icon1.svg";
import img2 from "../images/last-2.svg";
import img3 from "../images/last-3.svg";
import img4 from "../images/last-4.svg";
import img5 from "../images/last-5.svg";
import img6 from "../images/last-6.svg";
const LastComponent = () => {
  return (
    <>
      <div className="last">
        <div className="stay-ahead-launch">
          Stackkaroo’s Talent Hiring & Job Placement Services
        </div>
        <p className="text-wrappers mypara">
          We are a talent searching platform that redesigns how companies hire
          talents. It is a cost-effective solution for industries. We also
          provide global job opportunities with good salaries, support, and
          professional development.
        </p>
      </div>
      <div className="last-div">
        <div className="inner-div">
          <div className="inner-items">
            <img src={img1} alt="meow" />
            <div className="text-lst">Unleashing Top Talent Globally</div>
            <p className="text-wrappers">
              We offer 5% top talents and supports companies hiring from various
              time zones.
            </p>
          </div>
          <div className="inner-items">
            <img src={img2} alt="img2" />
            <div className="text-lst">Securing Success</div>
            <p className="text-wrappers">
              The company has a 30-day replacement policy and high retention
              rate due to competitive payouts and strong brand reputation.
            </p>
          </div>
          <div className="inner-items">
            <img src={img3} alt="meow" />
            <div className="text-lst">Beyond Borders</div>
            <p className="text-wrappers">
              We provide both, flexible full-time and part-time jobs
            </p>
          </div>
        </div>
        <div className="inner-div">
          <div className="inner-items">
            <img src={img4} alt="meow" />
            <div className="text-lst">End-to-End Excellence</div>
            <p className="text-wrappers">
              In our hiring process, a job description is shared, matches are
              reviewed, interviews are conducted, and post-hiring support is
              provided by us.
            </p>
          </div>
          <div className="inner-items">
            <img src={img5} alt="meow" />
            <div className="text-lst">Efficiency Redefined</div>
            <p className="text-wrappers">
              The platform enables fast hiring without waiting for candidates to
              reply. We offer affordable alternatives to traditional recruitment
              methods and provides quality talent.
            </p>
          </div>

          <div className="inner-items">
            <img src={img6} alt="meow" />

            <div className="sim">
              Simplified Contracts
              <br />
              Satisfied Partnerships
            </div>
            <p className="text-wrappers">
              The contracts are good and satisfy both parties. We save time and
              money by providing remote onboarding and IT support.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default LastComponent;
