import { useEffect, useState } from "react";
import { api } from "../lib/api";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [skill, setSkill] = useState("");

  const load = (filter = "") =>
    api(`/api/projects${filter ? `?skill=${encodeURIComponent(filter)}` : ""}`)
      .then(setProjects).catch(console.error);

  useEffect(() => { load(""); }, []);

  return (
    <div className="card">
      <h2>Projects</h2>
      <div>
        <input
          placeholder="filter by skill (e.g. React)"
          value={skill}
          onChange={e => setSkill(e.target.value)}
        />
        <button onClick={() => load(skill)}>Search</button>
        <button onClick={() => { setSkill(""); load(""); }}>Reset</button>
      </div>
      <ul>
        {projects.map(p => (
          <li key={p._id}>
            <b>{p.title}</b> — {p.description}
            {p.skills?.length > 0 && (
              <div>
                {p.skills.map(s => <span key={s._id}>[{s.name}] </span>)}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
