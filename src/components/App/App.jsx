import GalleryList from './GalleryList.jsx';


function App() {
    return (
      <div data-testid="app">
        <header>
          <h1 style={{textAlign: "center"}}>React Gallery</h1>
        </header>

        <p style={{fontSize: "30px", fontFamily: "Roboto", color: "red",
         fontWeight: "bold", textAlign: "center"}}>Trip to Disney 2023</p>
        <GalleryList/>
      </div>
    );
}

export default App;
