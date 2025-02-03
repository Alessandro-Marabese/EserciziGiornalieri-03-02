import "./App.css";
import ButtonComponent from "./assets/components/ButtonComponent";
import Imagebyclass from "./assets/components/imagebyClass";

function App() {
  return (
    <div className="main-container">
      <ButtonComponent description="Premi il pulsante" />
      <Imagebyclass
        style={{ width: "50px", height: "50px" }}
        imageUrl="https://images.unsplash.com/photo-1606017259054-04b65b590488?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        altImg="Paesaggio"
      />
    </div>
  );
}

export default App;
