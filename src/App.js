import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer/Footer.js";
import Items from './Components/Items/Items'

function App() {
  const owner = {
    id: 0,
    firstName: "ahmed",
    lastName: "jrad",
    email: "ahmed@gmail.com",
  };
  const itemArray = [
    {
      imgSrc: `https://www.cdiscount.com/pdt2/0/4/6/1/700x700/raz8886419358046/rw/razer-blade-15-rz09-03009f76-r3f1-intel-core-i.jpg`,
      name: "Razer Blade",
      price: `7 633,64 $`,
    },
    {
      imgSrc: `https://images.lpcdn.ca/924x615/201903/15/1622571-audi-r8-crdit-audi.jpg`,
      name: "audi R8",
      price: `216 245 $`,
    },
  ];
  return (
    <div className="App">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
        </div>
      </nav>

      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Navbar</span>
        </div>
      </nav>
      <Items itemArray={itemArray}/>
      <Footer owner={owner} />
    </div>
  );
}

export default App;
