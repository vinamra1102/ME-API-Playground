import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Search from "./components/Search";
import "./app.css";

export default function App() {
  return (
    <div className="wrap">
      <h1>Me-API Playground</h1>
      <p>Backend: {import.meta.env.VITE_API_BASE}</p>
      <Profile />
      <Skills />
      <Projects />
      <Search />
    </div>
  );
}
