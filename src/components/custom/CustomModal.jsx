import "./CustomModal.scss";
import { useDispatch } from "react-redux";
import { onOffModal } from "../../features/modalSlicer";
import { useEffect, useState } from "react";

const Modal = ({ open, allInfo }) => {
  const dispatch = useDispatch();
  const [quantities, setQuantites] = useState(1);
  const [totalItem, setTotalItem] = useState();
  const [customs, setCustoms] = useState();

  useEffect(() => {
    setTotalItem(allInfo);
    setCustoms(allInfo?.custom);
  }, [allInfo]);
  const { img, name, id, soldout, price } = totalItem || {};

  const handleChecked = (e) => {
    const newCustomes = customs.map((custom) => {
      if (custom.extra) {
        const newExtra = custom.extra.map((single) => {
          if (+single.id === +e.target.id) {
            return { ...single, checkedbox: e.target.checked };
          }
          return single;
        });
        return { ...custom, extra: newExtra };
      }
      return custom;
    });
    setCustoms(newCustomes);
  };

  const handleOnclose = () => {
    return dispatch(onOffModal(false));
  };
  if (!open) return null;
  return (
    <div onClick={handleOnclose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <div className="modal__topContainer">
          <div className="modal__topContainer_title">
            <span>{quantities} X </span> <span>{name}</span>
          </div>
          <button className="closeBtn" onClick={handleOnclose}>
            X
          </button>
        </div>
        <hr className="divider" />
        <div className="modal__imageContainer">
          <img src={img} alt={name} />
        </div>
        {customs?.map((item) => {
          const { extra, select, choiceCategory } = item;
          let count = 0;
          let disable = false;
          return (
            <div className="section__container">
              <h3>{choiceCategory}</h3>
              <p>{`select up to ${select}`}</p>
              {extra.map((single) => {
                const { price, choice, id, checkedbox } = single;
                if (checkedbox === true) {
                  count++;
                  if (count === select) {
                    disable = true;
                  }
                }
                return (
                  <div className="single__item">
                    <div>
                      <label>
                        <input
                          type="checkbox"
                          onClick={handleChecked}
                          id={id}
                          checked={checkedbox}
                          value={checkedbox}
                          onChange={handleChecked}
                          name={choice}
                          disabled={checkedbox ? false : disable}
                        />
                        {choice}
                      </label>
                    </div>
                    <span>{`$${price.toFixed(2)}`}</span>
                  </div>
                );
              })}
              <hr className="divider" />
            </div>
          );
        })}
        <div className="modal__botContainer">
          <div className="modal__botContainer_text">
            <b>Instructions</b>
            <span>List any special requests</span>
          </div>
          <textarea />
        </div>
        <hr className="divider" />
        <div className="modal__checkoutContainer">
          <div className="modal__checkoutContainer_total">
            <span>total $ {price * quantities}</span>
          </div>
          <div className="modal__checkoutContainer_buttons">
            <div className="quantities">
              <button
                onClick={() => {
                  if (quantities > 1) {
                    setQuantites(quantities - 1);
                  } else {
                    return;
                  }
                }}
              >
                -
              </button>
              <input
                type="number"
                min="0"
                defaultValue="1"
                value={quantities}
                onChange={(e) => setQuantites(e.target.value)}
              />
              <button
                onClick={() => {
                  setQuantites(quantities + 1);
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
