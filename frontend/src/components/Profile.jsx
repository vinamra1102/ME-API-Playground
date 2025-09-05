import { useEffect, useState } from "react";
import { api } from "../lib/api";

export default function Profile() {
  const [data, setData] = useState(null);
  const [err, setErr] = useState("");

  useEffect(() => {
    api("/api/profile").then(setData).catch(e => setErr(e.message));
  }, []);

  if (err) return <pre>Profile: {err}</pre>;
  if (!data) return <div>Loading profile…</div>;

  return (
    <div className="card">
      <h2>{data.name}</h2>
      <p>{data.about}</p>
      <p><b>Email:</b> {data.email}</p>
      <div>
        {data.links?.github && <a href={data.links.github} target="_blank">GitHub</a>}{" "}
        {data.links?.linkedin && <a href={data.links.linkedin} target="_blank">LinkedIn</a>}
      </div>
    </div>
  );
}
