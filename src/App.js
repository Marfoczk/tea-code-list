import React, { useState, useEffect } from 'react';
import axios from 'axios'
import List from '@material-ui/core/List';

import Item from './components/Item'
import Input from './components/Input'
import Selected from './components/Selected'


function App() {

  const [data, setData] = useState([])
  const [checked, setChecked] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  
  
  const pushChecked = (id) => {
    checked.indexOf(id) !== -1 
      ? setChecked(checked.filter(value => value !== id )) 
      : setChecked([...checked, id])
  }

  useEffect(() => {
    axios.get('https://cors-anywhere.herokuapp.com/https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json')
      .then(data => {
        setData(data.data.slice(0,99).sort((a, b) => (a.last_name > b.last_name) ? 1 : -1))
      })
      .catch(err => console.log(err))
  },[])
  
  console.log(`IDs: ${checked}`)
  useEffect(() => {
  }, [checked])

  return (
    <>
      <Input setSearchQuery={setSearchQuery} />
      <List dense>
        {data
        .filter(item => searchQuery === '' || item.first_name.toLowerCase().includes(searchQuery) || item.last_name.toLowerCase().includes(searchQuery))
        .map(item => (
            <Item 
              key={item.id} 
              id={item.id} 
              av={item.avatar} 
              firstName={item.first_name} 
              lastName={item.last_name}
              email={item.email} 
              checked={checked} 
              pushChecked={pushChecked}
            />
        ))}
      </List>
      {checked.length > 0 ? <Selected data={data} checked={checked}/> : null}
    </>
  );
}

export default App;
