import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPlay, FaMicrophone } from "react-icons/fa"; // Using icons for play and mic

const Testimonial = () => {
  return (
    <div className="d-flex justify-content-center py-5">
      <div
        style={{
          backgroundColor: "#f6f0fa", // Light purple shade
          padding: "40px",
          borderRadius: "10px",
          maxWidth: "900px",
          width: "90%", // Responsive width
          textAlign: "left",
          position: "relative",
        }}
      >
        {/* Quote Icon and Title */}
        <div className="d-flex align-items-center mb-3">
          <div
            style={{
              backgroundColor: "#8e5ba5",
              color: "white",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              marginRight: "10px",
            }}
          >
            <span>❝</span>
          </div>
          <h4 className="fw-bold m-0">Testimonials</h4>
        </div>

        {/* Testimonial Text */}
        <p style={{ color: "#6c757d", lineHeight: "1.6" }}>
          In a fast-growing and ever-changing city like Bangalore, it sometimes
          becomes very difficult to find or connect with like-minded people.
          Websites like hobbycue.com is a great service that helps me get in
          touch with, communicate, connect, and exchange ideas with other
          dancers. It also provides the extra benefit of finding products and
          services that I can avail, which I can be assured is going to be of
          great quality as it comes recommended by people of the hobbycue
          community. To have discussions, to get visibility, and to be able to
          safely explore various hobbies and activities in my city, all under
          one roof, is an excellent idea and I highly recommend it.
        </p>

        {/* Custom Audio Player with Play Button & Mic Icon */}
        <div
          className="d-flex align-items-center"
          style={{
            backgroundColor: "#cbb3dd",
            borderRadius: "10px",
            padding: "15px",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            position: "relative",
          }}
        >
          {/* Play Button */}
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <FaPlay color="#8e5ba5" />
          </div>

          {/* Progress Bar */}
          <div
            style={{
              flex: 1,
              marginLeft: "10px",
              marginRight: "10px",
              position: "relative",
            }}
          >
            <div
              style={{
                height: "4px",
                backgroundColor: "white",
                borderRadius: "2px",
                width: "100%",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                top: "-3px",
                left: "0%",
                width: "10px",
                height: "10px",
                backgroundColor: "#8e5ba5",
                borderRadius: "50%",
              }}
            ></div>
          </div>

          {/* Timer */}
          <span style={{ color: "#8e5ba5", fontSize: "14px" }}>0:00</span>

          {/* Small Image inside Player */}
          <div style={{ position: "relative" }}>
            <img
              src="/artworks-000398149563-8x2jj5-t500x500.jpg"
              alt="Shubha Nagarajan"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                border: "3px solid #fff",
              }}
            />

            {/* Mic Icon - Half Inside & Half Outside */}
            <div
              style={{
                position: "absolute",
                bottom: "-5px",
                right: "-5px",
                backgroundColor: "white",
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaMicrophone color="#8e5ba5" size={12} />
            </div>
          </div>
        </div>

        {/* Profile Section (Right Side Image) */}
        <div className="d-flex align-items-center justify-content-end mt-4">
          <div className="text-end me-3">
            <h6 className="fw-bold mb-0" style={{ color: "#5c267c" }}>
              Shubha Nagarajan
            </h6>
            <span style={{ color: "#8e5ba5" }}>Classical Dancer</span>
          </div>
          <img
            src="/artworks-000398149563-8x2jj5-t500x500.jpg"
            alt="Shubha Nagarajan"
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
