import seo from "../images/seo-icon.svg";
import "../Styles/Seo.css";
const Seo = () => {
  return (
    <>
      <div className="seo-container">
        <div
          style={{ paddingTop: "20px" }}
          className="stay-ahead-launch seo-heading"
        >
          SEO Services
        </div>
        <div className="seo-divs">
          <div className="seo-item1">
            <div className="seo-card">
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={seo} alt="seo" />
                <div className="text-last">Customized SEO Services</div>
              </div>
              <p className="text-wrappers mytext">
                We develop tailored SEO plans for new websites as they consider
                a correct SEO website checklist, as well as strategy, to be
                critical for business.
              </p>
            </div>
            <div className="seo-card">
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={seo} alt="seo" />
                <div className="text-last">Mobile SEO Services</div>
              </div>
              <p className="text-wrappers mytext">
                We stress upon the mobile optimizations since the mobile phone
                use by search is highly prevalent. They are more able to score
                the best SEO rankings and can easily be viewed on mobile
                devices.
              </p>
            </div>
          </div>
          <div className="seo-item1">
            <div className="seo-card">
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={seo} alt="seo" />
                <div className="text-last">
                  Free Website Audit and Strategies
                </div>
              </div>
              <p className="text-wrappers mytext">
                We go beyond essential SEO website development to give out free
                website audits, analysis and SEO strategies for transparent
                business strategies. They target business owners in different
                industries, and these packages include local SEO and e-commerce
                services.
              </p>
            </div>
            <div className="seo-card">
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={seo} alt="seo" />
                <div className="text-last">On-Page SEO Services</div>
              </div>
              <p className="text-wrappers mytext">
                We offer on-page SEO services for content, photos, descriptions,
                and visibility. They follow the design principles for
                SEO-friendly websites in order to provide their customers with
                the best outcomes.
              </p>
            </div>
          </div>
          <div className="seo-item1">
            <div className="seo-card">
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={seo} alt="seo" />
                <div className="text-last">Off-Page SEO Services</div>
              </div>
              <p className="text-wrappers mytext">
                We undertake off-page SEO for better rankings. They mainly
                specialize in handling backlink profiles. Their SEO analysts
                strive to ensure that their websites are listed on some of the
                popular sites in the industry of travel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Seo;
