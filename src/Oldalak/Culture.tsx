import React, { useEffect, useState } from 'react';
import { Kultura, Kulturaks } from '../nepcsoport';
import { Col, Container, Row, Table } from "react-bootstrap";

function Culture() {
  const [ kulturas, setKultura ] = useState([] as Kultura[])
  const [searchTerm, setSearchTerm] = useState('');
  const [searchTermfold, setSearchTermfold] = useState('');
  const [ newKulturaNev, setNewKulturaNev ] = useState('')
  const [ newKulturaNyelv, setNewKulturaNyelv ] = useState('')
  const [ newKulturaFoldresz, setNewKulturaFoldresz ] = useState('')
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
  
  const nyelvekek= [newKulturaNyelv];

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
      <h3>Hozzáadás</h3>
      <input type="text" placeholder="Kultúra neve:" onChange={
      e => { 
        setNewKulturaNev( e.currentTarget.value ) 
        
      }
    } />
    <br></br>
    <input type="text" placeholder="Nyelv:" onChange={
      e => { 
        setNewKulturaNyelv( e.currentTarget.value ) 
        
      }
    } /><br></br>
    <input type="text" placeholder="Földrajzi elhelyezkedés:" onChange={
      e => { 
        setNewKulturaFoldresz( e.currentTarget.value ) 
        
      }
    } /><br></br>
      <button onClick={ ()=>{
      setKultura([...kulturas,{
        név: newKulturaNev,
        nyelvek: nyelvekek,
        földrajzi_elhelyezkedés: newKulturaFoldresz,
        hagyományok_ünnepek: [
          {
            név: "tesz",
            leírás: "tesz"
          },
        ],
        étel_gasztro: [
          {
            név: "tesz",
            leírás: "tesz"
          },
        ],
        vallás_hitrendszer: "tesz",
        ruha_viselet: [
          {
            név: "tesz",
            leírás: "tesz"
          },
        ],
        kulturális_jellemzők: [
          {
            név: "tesz",
            leírás: "tesz"
          },]
      }])
    }} >Felvétel</button>
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
