import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./listing.css"; // Ensure you create a corresponding CSS file

const Listing = () => {
  return (
    <div className="container text-center mt-4">
      <h3 className="mb-4">➕ Add Your Listing</h3>
      <div className="row g-4">
        <div className="col-md-6">
          <div className="listing-block people-block">
            <h5 className="text-purple">👤 People</h5>
            <p>An Individual or Organization. Teacher, Coach, Professional or Online Seller. Company, Business or Association.</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="listing-block place-block">
            <h5 className="text-success">📍 Place</h5>
            <p>An Address. Classroom, Shop, Performance or Event Venue, Sports Arena, Play Area, Studio, School or Campus.</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="listing-block product-block">
            <h5 className="text-danger">🛒 Product</h5>
            <p>An item that you can Book, Buy or Rent. Appointment, Ticket, or Voucher. Equipment, Instrument or Activity Kit.</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="listing-block program-block">
            <h5 className="text-primary">📅 Program</h5>
            <p>An Event with Venue and Date. Meetup, Workshop or Webinar. Exhibition, Performance or Competition.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
