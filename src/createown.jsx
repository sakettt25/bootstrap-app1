import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPlusCircle } from "react-icons/fa"; // Using FontAwesome for the plus icon

const CreateOwn = () => {
  return (
    <div className="container-fluid py-5" style={{ backgroundColor: "#f8fdff" }}>
      <div className="container">
        <div className="card p-4 border-0 shadow-sm" style={{ borderRadius: "10px" }}>
          <div className="d-flex align-items-center">
            <FaPlusCircle size={30} color="#009CDE" className="me-2" />
            <h4 className="fw-bold mb-0">Add your own</h4>
          </div>
          <p className="mt-3 text-muted">
            Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you
            know someone who should be on hobbycue? Go ahead and Add your Own page
          </p>
          <button className="btn btn-outline-primary px-4" style={{ borderRadius: "8px" }}>Add new</button>
        </div>
      </div>
    </div>
  );
};

export default CreateOwn;