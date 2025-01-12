import { getSession } from "../api";
import { useParams } from "react-router-dom";
export default function Session() {
  const{catId,sessionId}=useParams();

  const { name, desc, speaker } = getSession({ catId, sessionId });

  return (
    <>
      <h2>Module</h2>
      <h3>{name}</h3>
      <p>{desc}</p>

      <h4>{speaker.name}</h4>
      <span>
        {speaker.title}
      </span>
    </>
  );
}
