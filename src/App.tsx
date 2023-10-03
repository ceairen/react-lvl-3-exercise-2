import { useEffect, useState } from "react";
import "./App.css";
import Modal, {
  ModalContent,
  ModalFooter,
  ModalTitle,
} from "./components/Modal/Modal";
import Footer from "./components/Footer/Footer";

function App() {
  const [welcomeModalOpen, setWelcomeModalOpen] = useState<boolean>(true);
  const [catModalOpen, setCatModalOpen] = useState<boolean>(false);
  const [currentCat, setCurrentCat] = useState<string | null>(null);

  async function handleGetCat() {
    setCatModalOpen(true);
    const url = "https://cataas.com/cat";
    const response = await fetch(url);
    const cat = await response.blob();
    const catUrl = URL.createObjectURL(cat);
    setCurrentCat(catUrl);
  }

  return (
    <div className="App">
      <div className="AppMain">
        <button onClick={handleGetCat}>Voir une photo de chat</button>
      </div>
      <Footer />
      <Modal
        isOpen={catModalOpen}
        fullSize={true}
        fireCloseEvent={() => {
          setCurrentCat(null);
          setCatModalOpen(false);
        }}
      >
        <ModalContent>
          {currentCat === null ? (
            <label>Chargement...</label>
          ) : (
            <img src={currentCat} />
          )}
        </ModalContent>
      </Modal>
      <Modal
        isOpen={welcomeModalOpen}
        fullSize={true}
        fireCloseEvent={() => setWelcomeModalOpen(false)}
      >
        <ModalTitle>
          <h3>Bienvenue</h3>
        </ModalTitle>
        <ModalContent>
          <p>Profitez bien de ce superbe site!</p>
        </ModalContent>
        <ModalFooter>
          <button onClick={() => setWelcomeModalOpen(false)}>OK</button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default App;
