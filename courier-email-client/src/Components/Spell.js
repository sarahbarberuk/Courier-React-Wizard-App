// Spell.js
import React from "react";

const Spell = ({ spellName, email, templateId, spellImage, description }) => {
  const sendEmail = async () => {
    const response = await fetch("http://localhost:3001/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, templateId: templateId }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="spell-wrapper">
      <button className="spell" onClick={sendEmail}>
        <img src={spellImage} alt={spellName} />
        <span>{spellName}</span>
      </button>
      <p>{description}</p>
    </div>
  );
};

export default Spell;
