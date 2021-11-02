import React from "react";
import Modal from "./Components/Modal/Modal";
import "./App.scss";

function App() {
  const elModal = React.useRef();

  return (
    <>
      <main
        onKeyDown={(evt) => {
          if (evt.code === "Escape") {
            elModal.current.classList.remove("modal--show");
          }
        }}
      >
        <button
          className="open-button"
          onClick={() => {
            elModal.current.classList.add("modal--show");
          }}
        >
          Modal Open
        </button>

        <Modal elModal={elModal} />
      </main>
    </>
  );
}
export default App;
