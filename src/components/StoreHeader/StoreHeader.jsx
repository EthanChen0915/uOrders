import React from "react";
import "./StoreHeade.scss";

function StoreHeader({ data }) {
  const { img, address, phoneNumber, storeName } = data;
  const addressString = address?.split(" ").join("+");
  return (
    <div className="storeHeader">
      <div className="storeHeader__container">
        <div className="storeHeader__img_container">
          <img
            src={img}
            className="storeHeader__img_container_img"
            alt="storeName"
          />
        </div>
        <div className="storeHeader__storeInfo_container">
          <h1>{storeName}</h1>
          <div className="storeHeader__storeInfo_details">
            <div>
              <a href={`https://www.google.com/maps/place/${addressString}`}>
                <span className="storeHeader__storeInfo_address">
                  {address}
                  <span className="tooltiptext_find">Find Store</span>
                </span>
              </a>
            </div>
            <span className="space"> · </span>
            <div>
              <a href={`tel:${phoneNumber}`}>
                <span className="storeHeader__storeInfo_phone">
                  {phoneNumber}
                  <span className="tooltiptext_store">Call Store</span>
                </span>
              </a>
            </div>
            <span className="space"> · </span>
            <div>
              <a href="#about">
                <span className="storeHeader__storeInfo_about">
                  About
                  <span className="tooltiptext_schedule">
                    See Store Full Schedule
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoreHeader;
