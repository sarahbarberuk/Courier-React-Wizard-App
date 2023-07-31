// Spellbook.js
import React from "react";
import Spell from "./Spell";
import spellbookImage from "../spellbook.png";
import spell1Image from "../spell1.png";
import spell2Image from "../spell2.png";
import spell3Image from "../spell3.png";
import spell4Image from "../spell4.png";
import spell5Image from "../spell5.png";

const Spellbook = () => {
  return (
    <div className="spellbook">
      <img className="spellbook-image" src={spellbookImage} alt="Spellbook" />
      <div className="spells-wrapper">
        <div className="spells-left">
          <Spell
            spellName="Wizard Initiation"
            email="YOUR_EMAIL"
            templateId="YOUR_TEMPLATE_ID"
            spellImage={spell1Image}
            description="A warm magical gust of welcoming wind, introducing the newly initiated wizard to our mystical realm. A spell that sends arcane greetings to wizards who have just begun their journey."
          />
          <Spell
            spellName="Lost Spell"
            email="YOUR_EMAIL"
            templateId="YOUR_TEMPLATE_ID"
            spellImage={spell2Image}
            description="In the twisting labyrinth of magic, even the best wizards misplace their spells. A spell to restore forgotten secrets and recover access to your magical arsenal."
          />
          <Spell
            spellName="Spell Purchase"
            email="YOUR_EMAIL"
            templateId="YOUR_TEMPLATE_ID"
            spellImage={spell3Image}
            description="A binding pact of magical trade, confirming your acquisition of our potent enchantments. This spell whispers an arcane confirmation of your newly purchased powers."
          />
        </div>
        <div className="spells-right">
          <Spell
            spellName="Spell Delivery"
            email="YOUR_EMAIL"
            templateId="YOUR_TEMPLATE_ID"
            spellImage={spell4Image}
            description="Swift as an owl's flight, this spell ensures your newly acquired enchantments find their way to you. A spell of tracking and notifying the journey of your mystical purchases"
          />
          <Spell
            spellName="Potion Replenishment"
            email="YOUR_EMAIL"
            templateId="YOUR_TEMPLATE_ID"
            spellImage={spell5Image}
            description="Ensuring your potion stores never run dry, this recurring enchantment renews your reserves of magical brews. A spell that keeps your subscription potions flowing like a magical spring"
          />
        </div>
      </div>
    </div>
  );
};

export default Spellbook;
