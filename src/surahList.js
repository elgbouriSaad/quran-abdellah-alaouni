import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap import
import "./SurahList.css"; // Custom CSS
import pic from "./pic.jpg"; // Image
import salam from "./salam.png"; // Image

const SurahList = () => {
  const [showModal, setShowModal] = useState(true); // Modal visibility state
  const [isFadingOut, setIsFadingOut] = useState(false); // Animation state

  // Automatically close the modal after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => setIsFadingOut(true), 10000); // Start fade-out after 10s
    const removeModal = setTimeout(() => setShowModal(false), 10500); // Remove modal after fade-out

    return () => {
      clearTimeout(timer);
      clearTimeout(removeModal);
    };
  }, []);

  return (
    <div className="">
      {showModal && (
        <div className={`modal-overlay ${isFadingOut ? "fade-out" : "fade-in"}`}>
          <div className="modal-dialog modal-dialog-centered scale-up">
            <div className="modal-content p-4">
              <img src={salam} alt="salam" className="img-fluid shadow-sm" />
              <div className="modal-header">
                <button
                  type="button"
                  className="close-button"
                  onClick={() => setShowModal(false)}
                  style={{
                    position: "absolute",
                    right: "-10px",
                    top: "-12px",
                    zIndex: 10,
                  }}
                >
                  &times;
                </button>
              </div>
              <hr />
              <div className="modal-body text-center">
                <img
                  src={pic}
                  alt="Quran Recitations"
                  className="img-fluid rounded-circle shadow-sm"
                  height="250px"
                  width="250px"
                />
              </div>
              <hr />
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen iframe */}
      <div style={{ height: "100vh", width: "100vw", margin: 0, padding: 0 }}>
        <iframe
          src="https://e.pcloud.link/publink/show?code=0ZjRECZRz0tX3Rrke8ymapaRfsvRYCU2kyy"
          style={{ height: "100%", width: "100%", border: "none" }}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default SurahList;
