import React from "react";
import { Link } from "react-router-dom";

const Vote = () => {
  return (
    <div style={{ display: "flex", gap: "2em" }}>
      Vote
      <button >
        <Link to="/candidate">Candidate</Link>
      </button>
      <button>
        <Link to="/party">Party</Link>
      </button>
    </div>
  );
};

export default Vote;
