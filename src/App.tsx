import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Modal, {
  ModalContent,
  ModalFooter,
  ModalTitle,
} from "./components/Modal";

function App() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setModalOpen(true);
    }, 1000);
  }, []);

  return (
    <div className="App">
      salut
      <Modal
        isOpen={modalOpen}
        fullSize={true}
        fireCloseEvent={() => setModalOpen(false)}
      >
        <ModalTitle>
          <h3>Bienvenue</h3>
        </ModalTitle>
        <ModalContent>
          <p>Profitez bien de ce superbe site!</p>
        </ModalContent>
        <ModalFooter>
          <button onClick={() => setModalOpen(false)}>OK</button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default App;
