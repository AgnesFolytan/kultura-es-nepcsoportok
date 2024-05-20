import React, { useEffect, useState } from 'react';
import { Culture, Cultures } from '../nepcsoport';
import './Allatok.css';

function Kultura() {
  const [cultures, setCultures] = useState<Culture[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    console.log('cultures fetch effect');
    async function load() {
      const response = await fetch('/cultures.json');
      const cultures = await response.json() as { cultures: Culture[] };
      setCultures(cultures.cultures);
    }
    load();
  }, []);

  useEffect(() => {
    console.log("Változás történt a cultures tömbben..." + cultures.length);
  }, [cultures]);

  const kivalogatott = cultures.filter(culture => culture.név.includes(searchTerm));

  return (
    <div>
      <h3>Keresés:</h3>
      <input
        type="text"
        placeholder="Add meg a keresendő kultúrát!"
        onInput={e => {
          setSearchTerm(e.currentTarget.value);
          console.log(e.currentTarget.value);
        }}
      />
      <h3>Kultúráink:</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Kultúra</th>
            <th>Nyelvek</th>
            <th>Földrajzi Elhelyezkedés</th>
          </tr>
        </thead>
        <tbody>
          {kivalogatott.map(culture => (
            <tr key={culture.név}>
              <td>{culture.név}</td>
              <td>{culture.nyelvek.join(', ')}</td>
              <td>{culture.földrajzi_elhelyezkedés}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Kultura;
