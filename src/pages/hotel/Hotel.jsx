import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

const Hotel = () => {
  const photos = [
    {
      src: "https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      src: "https://images.pexels.com/photos/1697076/pexels-photo-1697076.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      src: "https://images.pexels.com/photos/3124079/pexels-photo-3124079.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      src: "https://images.pexels.com/photos/1115225/pexels-photo-1115225.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      src: "https://images.pexels.com/photos/2403017/pexels-photo-2403017.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      src: "https://images.pexels.com/photos/1813467/pexels-photo-1813467.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      src: "https://images.pexels.com/photos/2090651/pexels-photo-2090651.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocation} />
            <span>Elton St 125</span>
          </div>
          <span className="hotelDistance">
            Excellent location 500m from center
          </span>
          <span className="hotelPriceHighLight">
            Book a stay over $114 at this property and get a freee airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, index) => {
              return (
                <div className="hotelImgWrapper" key={index}>
                  <img src={photo.src} alt="" />
                </div>
              );
            })}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of krakow</h1>
              <p className="hotelDesc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Recusandae necessitatibus, beatae vel voluptate nostrum ipsum
                inventore commodi, porro explicabo quia possimus in minus quidem
                cum laborum saepe unde aut vitae, libero maxime corporis
                architecto cumque. Modi ducimus doloremque facilis dolorum
                tenetur quae, porro obcaecati rem vitae dicta unde eum ex.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                located in the real heart of krakow, this property has an
                exellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
