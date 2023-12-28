import { ContadorRed } from "./components/ContadorRed";
import { Counter } from "./components/Counter";
import { Formulario } from "./components/Formulario";
import { TimerPadre } from "./components/TimerPadre";
import { Usuario } from "./components/Usuario";

function App() {
  return (
    <>
      <h1>Recat + Typescript</h1>
      <hr />
      <Counter />
      <Usuario />

      <h2>useEffect - useRef</h2>
      <hr />
      <TimerPadre />

      <h2>useReducer</h2>
      <hr />
      <ContadorRed />

      <h2>CustomHooks</h2>
      <Formulario />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

    </>


  );
}

export default App;
