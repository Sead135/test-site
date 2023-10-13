import { useState } from "react";
import IframeResizer from "iframe-resizer-react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {/* <!-- Test Form Iframe --> */}
      <IframeResizer
        log={false}
        src="https://widget-9507db229f5e4bdbab77f25677c4783f.elfsig.ht"
        style={{ width: "1px", minWidth: "100%" }}
      />

      {/* <!-- Test Reviews Iframe --> */}
      <IframeResizer
        log={false}
        src="https://widget-81183dc870c4418db0a9f497f60cf5fe.elfsig.ht"
        style={{ width: "1px", minWidth: "100%" }}
      />

      {/* <!-- Test Instagram Iframe --> */}
      <IframeResizer
        log={false}
        src="https://widget-d61bc482d0ba4605ad8815d45e6a7b4e.elfsig.ht"
        style={{ width: "1px", minWidth: "100%" }}
      />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
