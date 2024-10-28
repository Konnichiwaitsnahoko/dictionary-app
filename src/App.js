import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary App</header>

        <main>
          <Dictionary />
        </main>

        <footer className="text-center">
          This project is coded by{" "}
          <a href="https://github.com/Konnichiwaitsnahoko" target="_blank">
            Nahoko Park
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/Konnichiwaitsnahoko/dictionary-app"
            target="_blank">
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a href="https://dictionary-jisho.netlify.app/" target="_blank">
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
