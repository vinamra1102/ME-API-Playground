import { useEffect, useState } from "react";
import { api } from "../lib/api";

export default function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    api("/api/skills/top?limit=6").then(setSkills).catch(console.error);
  }, []);

  return (
    <div className="card">
      <h2>Top Skills</h2>
      <ul>
        {skills.map(s => (
          <li key={s._id}>{s.name} (lvl {s.level})</li>
        ))}
      </ul>
    </div>
  );
}
