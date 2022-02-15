import NavBar from "./components/NavBar/NavBar";
import "./App.css";
// import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
      <NavBar />
      {/* <ItemListContainer greeting={'Welcome to Trustiness Store!'}/> */}
      <ItemDetailContainer />
    </>
  );
}

export default App;
