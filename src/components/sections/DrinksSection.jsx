import { useState } from 'react';
import { GlassWater, CheckCircle2 } from 'lucide-react';
import { invitationData } from '../../data/invitationData.js';
import SectionTitle from '../ui/SectionTitle.jsx';
import GlassCard from '../ui/GlassCard.jsx';
import ChipButton from '../ui/ChipButton.jsx';

export default function DrinksSection() {
  const { drinks } = invitationData;
  const [selected, setSelected] = useState(['Energy Malt', 'Vitalo']);

  function toggleDrink(drink) {
    setSelected((current) => current.includes(drink) ? current.filter((item) => item !== drink) : [...current, drink]);
  }

  return (
    <section id="drinks" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle title="Drinks" subtitle="Help us plan our big day by suggesting your favorite drinks." />
        <GlassCard className="mx-auto mt-12 max-w-6xl">
          <div className="mb-10 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primarySoft text-primaryDeep ring-1 ring-primary/40">
              <GlassWater size={30} />
            </div>
          </div>
          <DrinkGroup title="Non-Alcoholic Drinks" drinks={drinks.nonAlcoholic} selected={selected} onToggle={toggleDrink} />
          <DrinkGroup title="Alcoholic Beverages" drinks={drinks.alcoholic} selected={selected} onToggle={toggleDrink} />
          <div className="mt-10 flex items-center justify-center gap-3 rounded-2xl border border-primary/50 bg-primarySoft px-5 py-4 text-center font-medium text-navyGray">
            <CheckCircle2 className="text-primaryDeep" size={22} />
            {selected.length} drink(s) chosen.
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

function DrinkGroup({ title, drinks, selected, onToggle }) {
  return (
    <div className="mb-10 text-center last:mb-0">
      <h3 className="mb-5 text-xl font-semibold text-navyGray">{title}</h3>
      <div className="flex flex-wrap justify-center gap-3">
        {drinks.map((drink) => (
          <ChipButton key={drink} selected={selected.includes(drink)} onClick={() => onToggle(drink)}>
            {drink}
          </ChipButton>
        ))}
      </div>
    </div>
  );
}
