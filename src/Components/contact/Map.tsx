import '../../styles/contact/map.css';
const ContactMap = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-map-container">
        <div className="contact-map">
          <div>
            <iframe
              className="gmap-iframe"
              width="100%"
              height="600"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Onifade%20Junction,%208%20Akintan%20Street,%20Luth%20Rd,%20Idi%20Oro%20100253,%20Lagos+(Rocason%20Pharmacy)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.maps.ie/population/">
                Find Population on Map
              </a>
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
