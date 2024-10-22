import React, { useState, useEffect } from "react";
import surahData from "./surah.json";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap import
import "./SurahList.css"; // Custom CSS
import pic from "./pic.jpg"; // Assuming the image is in the same folder
import salam from "./salam.png"; // Assuming the image is in the same folder

const SurahList = () => {
  const audio = {
    "Surah-1": "https://www.dropbox.com/scl/fi/yd5qrlw0qggtbwffz9ye8/001-Sourate-Al-Fatiha.mp3?rlkey=yikjt7118i562ki84g02uvck0&dl=1",
    "Surah-2": "https://www.dropbox.com/scl/fi/hy9yuvuarjh9n2wj5o4jl/002-Sourate-Al-Bakara.mp3?rlkey=7tr0dgt9yrfjzor08rptbetsx&st=lx295je2&dl=1",
    "Surah-3": "https://www.dropbox.com/scl/fi/8r5jlbjrer6kc6ho1u68o/003.mp3?rlkey=zw23a84ecn95ze96r9te8hxx3&st=sx6nrbg4&dl=1", // Link for Surah 3
    "Surah-4": "https://www.dropbox.com/scl/fi/pyz7o1t006jc5z6ao4cfd/004.mp3?rlkey=aqxqtoyka1ruv3yt04ujku4y2&st=k2wyd394&dl=1", // Link for Surah 4
    "Surah-5": "https://www.dropbox.com/scl/fi/du68oagcu5cwzmuz4x3hz/005.mp3?rlkey=wotdp7dczcb53qk9w2inr9uam&st=wjztwaog&dl=1", // Link for Surah 5
    "Surah-6": "https://www.dropbox.com/scl/fi/2c7shyvii5k1rrk62jye7/006.mp3?rlkey=3kcz2ocgdw6u4n9sdvtxblrm2&st=d5abnry7&dl=1", // Link for Surah 6
    "Surah-7": "https://www.dropbox.com/scl/fi/1zuoll4obphxc5msf2akq/007.mp3?rlkey=pdzhm4r1266ppmen66jot7qe2&st=2728sw0p&dl=1", // Link for Surah 7
    "Surah-8": "https://www.dropbox.com/scl/fi/j4k23u374f2y6u8g3ywm1/008-Sourate-Al-Anfal.mp3?rlkey=yllzvlvt6um4wrtw5jxc5owsf&st=kakjfx33&dl=1", // Link for Surah 8
    "Surah-9": "https://www.dropbox.com/scl/fi/h22zfnnk7h3dtq8m5cfwa/009-Sourate-Attawba.mp3?rlkey=orjw1p4yepptshnurb8m0a8o9&st=04fn47fa&dl=1", // Link for Surah 9
    "Surah-10": "", // Link for Surah 10
    "Surah-11": "", // Link for Surah 11
    "Surah-12": "", // Link for Surah 12
    "Surah-13": "", // Link for Surah 13
    "Surah-14": "", // Link for Surah 14
    "Surah-15": "", // Link for Surah 15
    "Surah-16": "", // Link for Surah 16
    "Surah-17": "", // Link for Surah 17
    "Surah-18": "", // Link for Surah 18
    "Surah-19": "", // Link for Surah 19
    "Surah-20": "", // Link for Surah 20
    "Surah-21": "", // Link for Surah 21
    "Surah-22": "", // Link for Surah 22
    "Surah-23": "", // Link for Surah 23
    "Surah-24": "", // Link for Surah 24
    "Surah-25": "", // Link for Surah 25
    "Surah-26": "", // Link for Surah 26
    "Surah-27": "", // Link for Surah 27
    "Surah-28": "", // Link for Surah 28
    "Surah-29": "", // Link for Surah 29
    "Surah-30": "", // Link for Surah 30
    "Surah-31": "", // Link for Surah 31
    "Surah-32": "", // Link for Surah 32
    "Surah-33": "", // Link for Surah 33
    "Surah-34": "", // Link for Surah 34
    "Surah-35": "", // Link for Surah 35
    "Surah-36": "", // Link for Surah 36
    "Surah-37": "", // Link for Surah 37
    "Surah-38": "", // Link for Surah 38
    "Surah-39": "", // Link for Surah 39
    "Surah-40": "", // Link for Surah 40
    "Surah-41": "", // Link for Surah 41
    "Surah-42": "", // Link for Surah 42
    "Surah-43": "", // Link for Surah 43
    "Surah-44": "", // Link for Surah 44
    "Surah-45": "", // Link for Surah 45
    "Surah-46": "", // Link for Surah 46
    "Surah-47": "", // Link for Surah 47
    "Surah-48": "", // Link for Surah 48
    "Surah-49": "", // Link for Surah 49
    "Surah-50": "", // Link for Surah 50
    "Surah-51": "", // Link for Surah 51
    "Surah-52": "", // Link for Surah 52
    "Surah-53": "", // Link for Surah 53
    "Surah-54": "", // Link for Surah 54
    "Surah-55": "", // Link for Surah 55
    "Surah-56": "", // Link for Surah 56
    "Surah-57": "", // Link for Surah 57
    "Surah-58": "", // Link for Surah 58
    "Surah-59": "", // Link for Surah 59
    "Surah-60": "", // Link for Surah 60
    "Surah-61": "", // Link for Surah 61
    "Surah-62": "", // Link for Surah 62
    "Surah-63": "", // Link for Surah 63
    "Surah-64": "", // Link for Surah 64
    "Surah-65": "", // Link for Surah 65
    "Surah-66": "", // Link for Surah 66
    "Surah-67": "", // Link for Surah 67
    "Surah-68": "", // Link for Surah 68
    "Surah-69": "", // Link for Surah 69
    "Surah-70": "", // Link for Surah 70
    "Surah-71": "", // Link for Surah 71
    "Surah-72": "", // Link for Surah 72
    "Surah-73": "", // Link for Surah 73
    "Surah-74": "", // Link for Surah 74
    "Surah-75": "", // Link for Surah 75
    "Surah-76": "", // Link for Surah 76
    "Surah-77": "", // Link for Surah 77
    "Surah-78": "", // Link for Surah 78
    "Surah-79": "", // Link for Surah 79
    "Surah-80": "", // Link for Surah 80
    "Surah-81": "", // Link for Surah 81
    "Surah-82": "", // Link for Surah 82
    "Surah-83": "", // Link for Surah 83
    "Surah-84": "", // Link for Surah 84
    "Surah-85": "", // Link for Surah 85
    "Surah-86": "", // Link for Surah 86
    "Surah-87": "", // Link for Surah 87
    "Surah-88": "", // Link for Surah 88
    "Surah-89": "", // Link for Surah 89
    "Surah-90": "", // Link for Surah 90
    "Surah-91": "", // Link for Surah 91
    "Surah-92": "", // Link for Surah 92
    "Surah-93": "", // Link for Surah 93
    "Surah-94": "", // Link for Surah 94
    "Surah-95": "", // Link for Surah 95
    "Surah-96": "", // Link for Surah 96
    "Surah-97": "", // Link for Surah 97
    "Surah-98": "", // Link for Surah 98
    "Surah-99": "", // Link for Surah 99
    "Surah-100": "", // Link for Surah 100
    "Surah-101": "", // Link for Surah 101
    "Surah-102": "", // Link for Surah 102
    "Surah-103": "", // Link for Surah 103
    "Surah-104": "", // Link for Surah 104
    "Surah-105": "", // Link for Surah 105
    "Surah-106": "", // Link for Surah 106
    "Surah-107": "", // Link for Surah 107
    "Surah-108": "", // Link for Surah 108
    "Surah-109": "", // Link for Surah 109
    "Surah-110": "", // Link for Surah 110
    "Surah-111": "", // Link for Surah 111
    "Surah-112": "", // Link for Surah 112
    "Surah-113": "", // Link for Surah 113
    "Surah-114": "", // Link for Surah 114
  };

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
    <div className="container my-5">
      {/* Modal Section */}
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
      {/* Recitation Table */}
      <div className="table-responsive">
        <table className="table table-hover table-striped table-bordered slide-up">
          <thead className="thead-dark">
            <tr>
              <th className="text-center">التسجيل</th>
              <th className="text-center">السورة</th>
              <th className="text-center">#</th>
            </tr>
          </thead>
          <tbody>
            {surahData.map((surah, index) => {
              const surahKey = `Surah-${index + 1}`; // Dynamically generate the surah key for audioLinks
              const audioSrc = audio[surahKey] || ""; // Safely get the audio link
              return (
                <tr key={index} className="hover-zoom">
                  <td className="text-center">
                    {audioSrc ? (
                      <audio controls>
                        <source src={audioSrc} type="audio/mpeg" />
                        Your browser does not support the audio tag.
                      </audio>
                    ) : (
                      <span>No audio available</span>
                    )}
                  </td>
                  <td className="text-center align-middle">
                    {surah.surahNameArabic} {/* Display the Arabic name of the surah */}
                  </td>
                  <td className="text-center align-middle">{index + 1}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SurahList;
