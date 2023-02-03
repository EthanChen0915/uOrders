import React, { useState } from "react";
import Categories from "../categories/Categories";
import "./Card.scss";
import Modal from "../custom/CustomModal";
import { useDispatch } from "react-redux";
import { addInfo, onOffModal } from "../../features/modalSlicer";

function Card({ selectedData }) {
  const dispatch = useDispatch();

  return (
    <div className="card">
      {selectedData?.map((dat) => {
        return (
          <div>
            <div
              className="card__container"
              onClick={() => {
                dispatch(addInfo(dat));
                dispatch(onOffModal(true));
              }}
            >
              <div className="card__leftContainer">
                <b>{dat.name}</b>
                <b>$ {dat.price}</b>
              </div>
              <div className="card__rightContainer">
                <img
                  className="card__rightContainer_img"
                  src={dat.img}
                  alt={dat.name}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
