import logo from "./images/logo.png";
import laptop from "./images/laptop.jpg";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <div>
          <img src={logo} alt="logo" />
          <h3>Huddie</h3>
        </div>
      </header>

      <main>
        <img src={laptop} alt="laptop" />

        <div className="content">
          <h2>
            Build the community <br></br> your fans will love
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            quidem eligendi beatae, accusantium, nisi numquam excepturi vel,
            reiciendis ipsa maiores repellendus nemo similique inventore ut
            nobis aperiam deserunt laborum dicta.
          </p>
          <button>Register</button>
        </div>
      </main>

      <footer>
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-instagram"></i>
      </footer>
    </>
  );
}

export default App;
