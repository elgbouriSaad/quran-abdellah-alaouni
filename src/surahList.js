import React, { useState, useEffect } from "react";
import surahData from "./surah.json";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap import
import "./SurahList.css"; // Custom CSS
import pic from "./pic.jpg"; // Assuming the image is in the same folder
import salam from "./salam.png"; // Assuming the image is in the same folder

const SurahList = () => {
  const audioLinks = {
    "Al-Faatiha":
      "https://drive.google.com/file/d/1ruKiyyMYWXJRC-5UkB29AU734ibZzfDc/preview",
    // Add more surah audio links here
  };

  const [showModal, setShowModal] = useState(true); // Modal visibility state
  const [isFadingOut, setIsFadingOut] = useState(false); // Animation state

  // Automatically close the modal after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setIsFadingOut(true), 10000); // Start fade-out after 5s

    // Remove modal after animation ends (0.5s)
    const removeModal = setTimeout(() => setShowModal(false), 10500);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeModal);
    };
  }, []);

  return (
    <div className="container my-5">
      {/* Modal Section */}
      {showModal && (
        <div
          className={`modal-overlay ${isFadingOut ? "fade-out" : "fade-in"}`}
        >
          <div className="modal-dialog modal-dialog-centered scale-up">
            <div className="modal-content p-4">
              {/* Modal Header with Close Icon */}
                <img src={salam} alt="salam" className="img-fluid shadow-sm" />
              <div className="modal-header">
                <button
                  type="button"
                  className="close-button"
                  onClick={() => setShowModal(false)}
                  style={{ position: 'absolute', right: '-10px', top: '-12px', zIndex: 10 }}
                >
                  &times;
                </button>
              </div>
              <hr />

              {/* Modal Body */}
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

              {/* Modal Footer */}
              <div className="modal-footer"></div>
            </div>
          </div>
        </div>
      )}
      {/* Recitation Table */}
      <div className="modal-body text-center aze">
        <img
          src={pic}
          alt="Quran Recitations"
          className="img-fluid rounded-circle shadow-sm"
          height="150px"
          width="150px"
        />
      </div>
      <div className="table-responsive">
        <table className="table table-hover table-striped table-bordered slide-up">
          <thead className="thead-dark">
            <tr>
              <th className="d-flex align-items-center th-custom">
               
                <span className="text-center flex-grow-1">التسجيل</span>
              </th>
              <th className="text-center align-middle"> السورة</th>
              <th className="text-center align-middle">#</th>
            </tr>
          </thead>

          <tbody>
            {surahData.map((surah, index) => (
              <tr key={index} className="hover-zoom">
                <td className="text-center">
                  <iframe
                    src={audioLinks[surah.surahName]}
                    className="audio-player"
                    allow="autoplay"
                    title={`Recitation of ${surah.surahName}`}
                  ></iframe>
                </td>
                <td className="text-center align-middle">
                  {surah.surahNameArabic}
                </td>
                <td className="text-center align-middle">{index + 1}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SurahList;
