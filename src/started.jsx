import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Started = () => {
  return (
    <div
      style={{
        backgroundColor: "#f8fbff",
        padding: "50px 20px",
        position: "relative",
        textAlign: "left",
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: "1100px",
          margin: "auto",
          position: "relative",
        }}
      >
        {/* "Go to Top" Button (Upper Right Corner) */}
        <div
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            textAlign: "center",
          }}
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              backgroundColor: "white",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              border: "1px solid #ddd",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            ▲
          </button>
          <div
            style={{
              fontSize: "14px",
              color: "#6c757d",
              backgroundColor: "white",
              padding: "5px 10px",
              borderRadius: "10px",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              marginTop: "5px",
              whiteSpace: "nowrap",
            }}
          >
            Go to top (Ctrl+Home)
          </div>
        </div>

        {/* Main Title (Left-Aligned) */}
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}>
          Your{" "}
          <span style={{ color: "#9b59b6", fontStyle: "italic" }}>Hobby</span>, Your{" "}
          <span style={{ color: "#3498db", fontStyle: "italic" }}>Community</span>...
        </h1>

        {/* Get Started Button (Left-Aligned) */}
        <button
          style={{
            backgroundColor: "#9b59b6",
            color: "white",
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Get started
        </button>
      </div>

      {/* Bottom Illustration (Centered) */}
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <img
          src="/Screenshot 2025-02-08 022226.png"
          alt="People enjoying hobbies"
          style={{
            width: "100%",
            maxWidth: "900px",
          }}
        />
      </div>
    </div>
  );
};

export default Started;
