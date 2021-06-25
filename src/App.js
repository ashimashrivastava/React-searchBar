import React from 'react'
import Results from './components/Results'
import Search from './components/Search'
import Header from './components/Header'
import { useState, useEffect } from "react"

function App() {

  const [resultList, SetResultList] = useState([])
  const [searchItem, SetSearchItem] = useState([])

  const HandleSearch = e => {
    e.preventDefault();
    console.log(searchItem)
    FetchResult(searchItem)
  }

  const FetchResult = async (login) => {
    const temp = await fetch(`https://api.github.com/search/users?q=${login}in:login`)
      .then(res => res.json())
    
    console.log(temp.items)
    SetResultList(temp.items )

  }

  return (
    <div className="App">
     
      <Header />
      <div className="content-wrap">
        <Search 
          HandleSearch={HandleSearch}
          searchItem={searchItem}
          SetSearchItem={SetSearchItem}
          resultList={resultList}
        />
        
      </div>

      {/* <div className="container searchApp"> 
        <h2 className="title is-2 has-text-centered">
          Login Search Coding Challange hello
        </h2>
        <Search />
        <Results />

      </div> */}
    </div>
  );
}

export default App;
