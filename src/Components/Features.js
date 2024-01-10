import fea1 from "../images/fea1.svg";
import feaicon from "../images/fea-icon.svg";
import serv2 from "../images/serv2.svg";
import serv3 from "../images/serv3.svg";
import serv4 from "../images/serv4.svg";
import serv5 from "../images/serv5.svg";
import serv6 from "../images/serv6.svg";
import "../Styles/feature.css";
const Features = () => {
  return (
    <>
      <div className="fea-cont">
        <div className="inner">
          <div className="item1">
            <div className="items">
              <div>
                <img src={fea1} alt="fea1" />
              </div>
              <div className="name-div">Website Development</div>
            </div>
            <div className="item-para">
              <p className="text-wrappers">
                We specialize in responsive website development, ensuring
                optimal performance across various devices.
              </p>
            </div>
            <div className="fea-icon">
              <img src={feaicon} alt="faeicon" />
            </div>
          </div>
          <div className="item1">
            <div className="items">
              <div>
                <img src={serv2} alt="fea1" />
              </div>
              <div className="name-div">App Development</div>
            </div>
            <div className="item-para">
              <p className="text-wrappers">
                We specialize in creating superior apps for diverse sectors such
                as e-commerce, education, and transportation.
              </p>
            </div>
            <div className="fea-icon">
              <img src={feaicon} alt="faeicon" />
            </div>
          </div>
          <div className="item1">
            <div className="items">
              <div>
                <img src={serv3} alt="fea1" />
              </div>
              <div className="name-div">Software Development</div>
            </div>
            <div className="item-para">
              <p className="text-wrappers">
                We specialize in tailored solutions ensuring business growth and
                efficiency by providing superior software.
              </p>
            </div>
            <div className="fea-icon">
              <img src={feaicon} alt="faeicon" />
            </div>
          </div>
        </div>
        <div className="inner">
          <div className="item1">
            <div className="items">
              <div>
                <img src={serv4} alt="fea1" />
              </div>
              <div className="name-div">UI/UX Design</div>
            </div>
            <div className="item-para">
              <p className="text-wrappers">
                We specialize in creating exemplary designs prioritizing
                user-friendly concepts and aesthetically appealing interfaces.
              </p>
            </div>
            <div className="fea-icon">
              <img src={feaicon} alt="faeicon" />
            </div>
          </div>
          <div className="item1">
            <div className="items">
              <div>
                <img src={serv5} alt="fea1" />
              </div>
              <div className="name-div">Digital Marketing</div>
            </div>
            <div className="item-para">
              <p className="text-wrappers">
                We specialize in tailored digital marketing solutions and ensure
                effective online marketing strategies.
              </p>
            </div>
            <div className="fea-icon">
              <img src={feaicon} alt="faeicon" />
            </div>
          </div>
          <div className="item1">
            <div className="items">
              <div>
                <img src={serv6} alt="fea1" />
              </div>
              <div className="name-div">SEO Optimization</div>
            </div>
            <div className="item-para">
              <p className="text-wrappers">
                We ensure optimal website traffic by addressing factors such as
                user experience, accessibility, product details, and target
                audience.
              </p>
            </div>
            <div className="fea-icon">
              <img src={feaicon} alt="faeicon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Features;
