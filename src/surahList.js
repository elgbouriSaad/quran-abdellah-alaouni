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

  const audio = {
    "Surah-1":
      "https://drive.google.com/file/d/1ruKiyyMYWXJRC-5UkB29AU734ibZzfDc/preview",
    "Surah-2":
      "https://drive.google.com/file/d/1knTrIBGwFziklBvh82QiN_o8tUY7fDf5/preview",
    "Surah-3":
      "https://drive.google.com/file/d/1CzqvhmDTJWZnIt8VvKpJ6GcBobYYhuoc/preview",
    "Surah-4":
      "https://drive.google.com/file/d/1bY4sZfDjU7YtqkwCm9K3TIJVKgM1SHxv/preview",
    "Surah-5":
      "https://drive.google.com/file/d/1TtwSQbD05jE-L4rs5RKI4_eWmmOxhMGO/preview",
    "Surah-6":
      "https://drive.google.com/file/d/1Md9eYcXQ40ba_u1q5OnS2vzEMsAmtJpR/preview",
    "Surah-7":
      "https://drive.google.com/file/d/1DQLuAnrcSVNQ69ubLFmkVMV7t-x72DzL/preview",
    "Surah-8":
      "https://drive.google.com/file/d/1I_1qUsF-DyXuxwCG_2eMs2M13V3EqwO3/preview",
    "Surah-9":
      "https://drive.google.com/file/d/1IZ8lMHJodULGxelXkjUJUFdvs9KC6aXW/preview",
    "Surah-10":
      "https://drive.google.com/file/d/1MD0fBkJsvwMWxBK-zP4-aWW_B2Xuon5P/preview",
    "Surah-11":
      "https://drive.google.com/file/d/1yTIreH-RCtXBeLaV3wumbC37K6zcy5eN/preview",
    "Surah-12":
      "https://drive.google.com/file/d/13UNhm8hDUlWW_qqSGGoRpwv40EZGQHRF/preview",
    "Surah-13":
      "https://drive.google.com/file/d/17Z8gfIHaZhrYmp2Oqifm2g2qqazmQ7xI/preview",
    "Surah-14":
      "https://drive.google.com/file/d/12oxdfwjXJwTTO-LJJYkuOP-8jWcYADAP/preview",
    "Surah-15":
      "https://drive.google.com/file/d/1pmkF8KjBITa_w_7wNAx0J5EzP2YUH83T/preview",
    "Surah-16":
      "https://drive.google.com/file/d/1VOmKPLOFLYqLsUh70f7y6ZzwhxMmSpkv/preview",
    "Surah-17":
      "https://drive.google.com/file/d/1Cxw2d1s2rdpGGNj2c3IO9q9Z4KJeMVP8/preview",
    "Surah-18":
      "https://drive.google.com/file/d/1nFw_Gphw9fyrdNbympmI9-Yx4tzMjBWH/preview",
    "Surah-19":
      "https://drive.google.com/file/d/1c-vhx5_pgfAlKWEieWCtLRBU6J2ACD36/preview",
    "Surah-20":
      "https://drive.google.com/file/d/1xbK3z6a0FWk3uGpS7gMIm7FvlRqUEboz/preview",
    "Surah-21":
      "https://drive.google.com/file/d/1Vfwgiet4IicTnv6g5k3P98mR6bFkTCpj/preview",
    "Surah-22":
      "https://drive.google.com/file/d/1219M56JC3WZGOQIYygpPQ9WyzkFaE5p5/preview",
    "Surah-23":
      "https://drive.google.com/file/d/1oHCEtjBo_PsIKnyLV7tJcV3232kjkl_s/preview",
    "Surah-24":
      "https://drive.google.com/file/d/19A8qiEY6u2PZspMqFTrW8apK0YJpvQc4/preview",
    "Surah-25":
      "https://drive.google.com/file/d/1AatnqE1ntgms2q0L1BYReg53BuBSvLC9/preview",
    "Surah-26":
      "https://drive.google.com/file/d/1lAgAJUPYuv1UbpyVEPPdzKA3aXhccrlx/preview",
    "Surah-27":
      "https://drive.google.com/file/d/1hfBhREzZXyG38wh0I7USyYrv3BRSXSIw/preview",
    "Surah-28":
      "https://drive.google.com/file/d/17iFbPXg3DbVG1XQ3yKuh55JCtD6QbfLX/preview",
    "Surah-29":
      "https://drive.google.com/file/d/1c5Q6qN12WY2gBZAPQJxg5tLfc18YhofO/preview",
    "Surah-30":
      "https://drive.google.com/file/d/1FfZtq-C19LLMohjLqFVpdUCjJ4kT1ynY/preview",
    "Surah-31":
      "https://drive.google.com/file/d/1uy2XLx1KJMlU1-jLQwInWXx9z9edqUEI/preview",
    "Surah-32":
      "https://drive.google.com/file/d/1vQ7vN4O2bAnhIznJxQt9WIE-lEO2pMgo/preview",
    "Surah-33":
      "https://drive.google.com/file/d/1OOMb-2KEhrT7JVs62kYG_6ocwLeEzhiX/preview",
    "Surah-34":
      "https://drive.google.com/file/d/1_fGnL9UjALrC96qL6vx2MwDowoNVCnFf/preview",
    "Surah-35":
      "https://drive.google.com/file/d/1gRi7U9j56BZFc9dlITN4LdNMsBQOEOc7/preview",
    "Surah-36":
      "https://drive.google.com/file/d/1KBzDJ0aqll9O-FUBSkbjYrdROOou3Yro/preview",
    "Surah-37":
      "https://drive.google.com/file/d/1TdkowAD4rDf87rTTHH6Hv3RympHWRSFt/preview",
    "Surah-38":
      "https://drive.google.com/file/d/1Yr2BIEhjV1myqEstTJ8i6--G9tEYqMq5/preview",
    "Surah-39":
      "https://drive.google.com/file/d/1t_Rk62YgqoRtcRDzSwkLsdARHLETwhRd/preview",
    "Surah-40":
      "https://drive.google.com/file/d/1vmkW3kgqTR1bQqnaI-NSHfH8rZn7gXuR/preview",
    "Surah-41":
      "https://drive.google.com/file/d/178uV0OxV_olygkA8q_n09fL6RhNSXMdL/preview",
    "Surah-42":
      "https://drive.google.com/file/d/1cbf5w6RvRsLLGpAlKjT9mZ8zc-QHZv-C/preview",
    "Surah-43":
      "https://drive.google.com/file/d/1cihXMaVhTIWUozNCFT65lBxC828MQisp/preview",
    "Surah-44":
      "https://drive.google.com/file/d/1XK4NrdfVIBM7zkKUjzOem30PErnYf4b6/preview",
    "Surah-45":
      "https://drive.google.com/file/d/1YRvvpW7jglzmTl2jU7Lt5JQWiFzjNZ1A/preview",
    "Surah-46":
      "https://drive.google.com/file/d/1w5OQ2DLFNDVF6fUzAuFn-KET8pzUPXoH/preview",
    "Surah-47":
      "https://drive.google.com/file/d/1S8RiJs7qncpP-LuebZjyuBfeH_hXSUk6/preview",
    "Surah-48":
      "https://drive.google.com/file/d/1PIYsTZxLCNofr8WsMi_jnpLkGoxdsOkk/preview",
    "Surah-49":
      "https://drive.google.com/file/d/1G6VEs1LWSJYN92YFUEfCXMBkO-3NT4iK/preview",
    "Surah-50":
      "https://drive.google.com/file/d/1xGhx60rYrJoiPT6jwT1IWXVB4oxwWB4d/preview",
    "Surah-51":
      "https://drive.google.com/file/d/1GwloTG7rqh6xfFsRiGY5zLYXZfd9-VxD/preview",
    "Surah-52":
      "https://drive.google.com/file/d/1PF50-ZFPq8HNDokZ3RIJqu1Hj-X_nCw3/preview",
    "Surah-53":
      "https://drive.google.com/file/d/1k55AHjwhjjwLlSpiKmWq4A-IqXP4AfqD/preview",
    "Surah-54":
      "https://drive.google.com/file/d/1Y5FwFc0DvH0Ux4NWj6hPIk-Jv9-a_dNz/preview",
    "Surah-55":
      "https://drive.google.com/file/d/1gfLpmnTEaWgUg6iPVwvOB1XBKsfbBfPx/preview",
    "Surah-56":
      "https://drive.google.com/file/d/1VxJiGfUelr1TAJmDu5G9atr8vnhARr5C/preview",
    "Surah-57":
      "https://drive.google.com/file/d/18BdRUUY_5rkHqPDnKNsK6aUZbjqfFijx/preview",
    "Surah-58":
      "https://drive.google.com/file/d/1fa0wlVeMEG53jFtKyXjN1VfNrvWvsJgR/preview",
    "Surah-59":
      "https://drive.google.com/file/d/1iJSNs272aCVUMobT1_Ol8l9jqy6JgIZY/preview",
    "Surah-60":
      "https://drive.google.com/file/d/1bRwNohCpkO5agqlu1czZeHs68JxpT7dH/preview",
    "Surah-61":
      "https://drive.google.com/file/d/1n3N9M14b1Bg95q447gvZgIJr_399e5cj/preview",
    "Surah-62":
      "https://drive.google.com/file/d/1QOgy8Kaf2PBqsU8GdPflcmk3Mu11ZkFT/preview",
    "Surah-63":
      "https://drive.google.com/file/d/1YqtxtYkhSTQDAvtKxdWbZelO2hH3imKC/preview",
    "Surah-64":
      "https://drive.google.com/file/d/1d_qm372h3vO8eQkJd7E6xvde34jXH4iw/preview",
    "Surah-65":
      "https://drive.google.com/file/d/1SlSuzKc3mSMZkNgGWJUsHYtj3WVGvtdo/preview",
    "Surah-66":
      "https://drive.google.com/file/d/1rIsSgN_V5ZEaw_N8qbhyDP0U84uYSu-0/preview",
    "Surah-67":
      "https://drive.google.com/file/d/1L9p4az4MtxwOqDP0KvCXUF4dfO4FGdZ2/preview",
    "Surah-68":
      "https://drive.google.com/file/d/1uCGXFCfIe0zjYok8Z1SoSciCrNE03TPo/preview",
    "Surah-69":
      "https://drive.google.com/file/d/1-T6e4_PAtpZTFY_-p-S_W7hj6yAuAzct/preview",
    "Surah-70":
      "https://drive.google.com/file/d/1QAwcdiFopsf4XWTYt1eb5C8W4eh2NpdO/preview",
    "Surah-71":
      "https://drive.google.com/file/d/1vPWvJ5ROdKlfs8oa7hY-8C55r5LyndCH/preview",
    "Surah-72":
      "https://drive.google.com/file/d/1PH1lQRxmqN4S7Xj_mjSH7hPwMAWLs9qx/preview",
    "Surah-73":
      "https://drive.google.com/file/d/1B1lUArrbC2QpXQ-GuRKytxlMKqE9Lnlc/preview",
    "Surah-74":
      "https://drive.google.com/file/d/1pnnmFUvf-GMJVxGLHYSfiwQ7JeUl4yJn/preview",
    "Surah-75":
      "https://drive.google.com/file/d/1gPVSbHe4JlK6qkSilCauId_bmfXyf0JD/preview",
    "Surah-76":
      "https://drive.google.com/file/d/1EBN2Gp2X_HagLYYAVJLPmf6PubWydGxP/preview",
    "Surah-77":
      "https://drive.google.com/file/d/1IDo9X0yrwTBW_VLeYLGyqOmdlV3uj-HF/preview",
    "Surah-78":
      "https://drive.google.com/file/d/1-ksg6P91akPJRAwkT7xJHzNU8RbgGRIT/preview",
    "Surah-79":
      "https://drive.google.com/file/d/1hvRDw5O5Lj7y4m7FscIWewUbnssFPadz/preview",
    "Surah-80":
      "https://drive.google.com/file/d/1KX5u6AGdXHQoxyrMOQnxL_PmxDisp2ky/preview",
    "Surah-81":
      "https://drive.google.com/file/d/15hWYjIZ1aPAaoY_sCwN4UO_al5Gh3pKt/preview",
    "Surah-82":
      "https://drive.google.com/file/d/1DP6NPU1wgO2_XzMnE48MSaIDfI_Eoo1h/preview",
    "Surah-83":
      "https://drive.google.com/file/d/1IA6lFJlK1qqfpKddPn6fbV32yk5Wc6U7/preview",
    "Surah-84":
      "https://drive.google.com/file/d/1KTJ4Mcg5MfLLJx1wlWoIHTPxih-KLa-V/preview",
    "Surah-85":
      "https://drive.google.com/file/d/1sUAfANO08-QjALXZFXs5gwf8R-nYusY8/preview",
    "Surah-86":
      "https://drive.google.com/file/d/17KcJztU1DKnrx0b0WCDLesWG5JzGvYgm/preview",
    "Surah-87":
      "https://drive.google.com/file/d/1k7Vtj39L4FvSCYi5bjd-isLtAipp1Fe9/preview",
    "Surah-88":
      "https://drive.google.com/file/d/18kFK8oor1-e9Iu2hny_ofjObn_H7r5tH/preview",
    "Surah-89":
      "https://drive.google.com/file/d/1M86KO8lT7ZWdepxI9071DQBkxMhHM2YU/preview",
    "Surah-90":
      "https://drive.google.com/file/d/1gQAKGt0kB-orbUMDaPb2A-3l0h59-qwE/preview",
    "Surah-91":
      "https://drive.google.com/file/d/1HK93aFTqLpI_ZKEdLp-_aFP7ji_jzMUa/preview",
    "Surah-92":
      "https://drive.google.com/file/d/1Q8V9VlgZ-3LJA0vI0VWCLlw1pOTKHPoA/preview",
    "Surah-93":
      "https://drive.google.com/file/d/1TIfvOPBQSrhGiQv49uVmuHV8Z637pJpw/preview",
    "Surah-94":
      "https://drive.google.com/file/d/1bNwqCchAoUaF0mzaRwuITADJ5TCJG0aB/preview",
    "Surah-95":
      "https://drive.google.com/file/d/1NFHvIwYiCWk0dh-CurZ1mc3sbyR2d-34/preview",
    "Surah-96":
      "https://drive.google.com/file/d/12tEHoSQedzsp6ONekKpS9HrqdVGb_bC1/preview",
    "Surah-97":
      "https://drive.google.com/file/d/1I5kKirVlxrp-uKOY5dRwOGzhqyXVQ6hs/preview",
    "Surah-98":
      "https://drive.google.com/file/d/1vyrXSZ06J5v-POloucZZJNozfkd3wnav/preview",
    "Surah-99":
      "https://drive.google.com/file/d/1TZ8CpIRmyoOZ0-YvfDX9LN5FdCbsQDSQ/preview",
    "Surah-100":
      "https://drive.google.com/file/d/1fwn9qLl_VeypcfQNCiZ8RRR-Q7pZaQVG/preview",
    "Surah-101":
      "https://drive.google.com/file/d/1Vls6tyq30RnNKFd1HD0FUlA0N57wovGr/preview",
    "Surah-102":
      "https://drive.google.com/file/d/1wc3hB2tQ2EZiIhws2zoPwr0TXgqG_hE6/preview",
    "Surah-103":
      "https://drive.google.com/file/d/1psMxyEjGuG_GfFxxE4LsuLElacOuIsj9/preview",
    "Surah-104":
      "https://drive.google.com/file/d/1gPrpg1QABhqx9oPYqDYuSZ9J6lNYJcUA/preview",
    "Surah-105":
      "https://drive.google.com/file/d/1FRjgnEnH64dmqgA5TI4HeCkffBzxWLwA/preview",
    "Surah-106":
      "https://drive.google.com/file/d/1UY5Lksx42WhkEi2lj8Pq7OqOdm62kpgt/preview",
    "Surah-107":
      "https://drive.google.com/file/d/1SmpFgd0S12PMvqX74amKlQ-nHC9Xp1wB/preview",
    "Surah-108":
      "https://drive.google.com/file/d/1kcB3Nr9JzXV9ZTRLIyY_F9J14GZwAFyX/preview",
    "Surah-109":
      "https://drive.google.com/file/d/193HxAJpk4SHrDHuEVyXKTh_XM6ty2Z_V/preview",
    "Surah-110":
      "https://drive.google.com/file/d/1ZC1VBnSUKtCF9R3vMiTxg1Rh1X7RJ78s/preview",
    "Surah-111":
      "https://drive.google.com/file/d/1UliAEiqSXAXOACsscCP-I9i4Bx6rEnjF/preview",
    "Surah-112":
      "https://drive.google.com/file/d/1yzUzRqwTfbxdvuvKrCTR7p4kIfP3Ij1L/preview",
    "Surah-113":
      "https://drive.google.com/file/d/1YuhgboAy4gCPDzrQD5I5A4j4w9QvZYx3/preview",
    "Surah-114":
      "https://drive.google.com/file/d/17DHwS5cCCfMwFBZJq4pTASu5EMQ8_eqf/preview",
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
          height="250px"
          width="250px"
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
            {surahData.map((surah, index) => {
              const surahKey = `Surah-${index + 1}`; // Dynamically generate the surah key for audioLinks
              return (
                <tr key={index} className="hover-zoom">
                  <td className="text-center">
                    <iframe
                      src={audio[surahKey]} // Use the generated surahKey to get the correct audio link
                      className="audio-player"
                      allow="autoplay"
                      title={`Recitation of ${surah.surahName}`}
                    ></iframe>
                  </td>
                  <td className="text-center align-middle">
                    {surah.surahNameArabic}{" "}
                    {/* Display the Arabic name of the surah */}
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
