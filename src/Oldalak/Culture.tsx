import React, { useEffect, useState } from 'react';
import { Kultura, Kulturaks } from '../nepcsoport';
import { Col, Container, Row, Table } from "react-bootstrap";

function Culture() {
  const [ kulturas, setKultura ] = useState([] as Kultura[])
  const [searchTerm, setSearchTerm] = useState('');
  const [searchTermfold, setSearchTermfold] = useState('');
  useEffect(() => {
    console.log('Users fetch effect')
    async function load() {
      const response = await fetch('/nepcsoportok.json')
      const kulturas = await response.json() as Kulturaks;
      setKultura(kulturas.kultura)
    }
    load()
  }, [])
  useEffect( ()=>{

  }, [kulturas] )

  const kivalogatott = kulturas.filter( kultura => kultura.név.includes(searchTerm)&& kultura.földrajzi_elhelyezkedés.includes(searchTermfold));
  
  

  return (
    <Container>
      <h3>Keresés:</h3>
      <input
        type="text"
        placeholder="Add a kultúrát!"
        onInput={e => {
          setSearchTerm(e.currentTarget.value);
          console.log(e.currentTarget.value);
        }}
      /><br></br>
       <input
        type="text"
        placeholder="Add a Földrajzi helyét!"
        onInput={e => {
          setSearchTermfold(e.currentTarget.value);
          console.log(e.currentTarget.value);
        }}
      />
      <h3>Kultúráink:</h3>
      <Table className="Table table-striped">
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
      </Table>
    </Container>
  );
}

export default Culture;
