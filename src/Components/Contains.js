import "../Styles/Contains.css";
import user from "../images/usercentric.svg";
import cust from "../images/customer.svg";
import feed from "../images/feedback.svg";
import prod from "../images/products.svg";
import del from "../images/ontime.svg";
const Contains = () => {
  return (
    <>
      <div className="div-con">
        <div className="container-div">
          <div className="items">
            <div className="img-div">
              <img src={user} alt="user" />
            </div>
            <div className="name-div">User-Centric Approach</div>
          </div>
          <div className="items">
            <div className="img-div">
              <img src={cust} alt="cust" />
            </div>
            <div className="name-div">Customer Satisfaction</div>
          </div>
          <div className="items">
            <div className="img-div">
              <img src={feed} alt="feed" />
            </div>
            <div className="name-div">Integrating Feedback</div>
          </div>
        </div>
        <div className="container-div second">
          <div className="items">
            <div className="img-div">
              <img src={prod} alt="prod" />
            </div>
            <div className="name-div">High Quality Products</div>
          </div>
          <div className="items">
            <div className="img-div">
              <img src={del} alt="del" />
            </div>
            <div className="name-div">On-Time Product Delivery</div>
          </div>
        </div>
      </div>
      <div className="stay-ahead-launch">Stackkaroo’s Digital Services</div>
      <p className="text-wrappers">
        We excel with reliability, innovation and customer-centric approach for
        our quality products.
        <br />
        Our dedicated team ensures that the solutions provided are dependable
        and long-term
      </p>
    </>
  );
};
export default Contains;
