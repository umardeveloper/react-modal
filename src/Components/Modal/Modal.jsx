import React from "react";
import "./Modal.scss";
function Modal({ elModal }) {
  return (
    <>
      <div
        className="modal"
        ref={elModal}
        onClick={(evt) => {
          if (
            evt.target.matches(".modal") ||
            evt.target.matches(".modal__close--btn")
          ) {
            elModal.current.classList.remove("modal--show");
          }
        }}
      >
        <div className="modal__inner">
          <div className="info">
            <h2 className="modal__heading">Hello World</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum qui
              voluptates ea, exercitationem sapiente fuga ut numquam voluptatum
              iure, natus vel laboriosam impedit maxime aspernatur est sed
              quibusdam praesentium. Dolore earum modi rerum fuga doloremque
              placeat magni enim a odit.
            </p>
          </div>

          <button className="modal__close--btn">X</button>
        </div>
      </div>
    </>
  );
}

export default Modal;
