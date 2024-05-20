import React, { useEffect, useState } from 'react';
import { Kultura, Kulturak } from '../nepcsoport';

function Culture() {
  const [kulturak, setKulturak] = useState<Kultura[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    console.log('kulturak fetch effect');
    async function load() {
      const response = await fetch('/kulturak.json');
      const kulturak = await response.json() as { kulturak: Kultura[] };
      setKulturak(kulturak.kulturak);
    }
    load();
  }, []);

  useEffect(() => {
    console.log("Változás történt a kulturak tömbben..." + kulturak.length);
  }, [kulturak]);

  const kivalogatott = kulturak.filter(culture => culture.név.includes(searchTerm));

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

export default Culture;
