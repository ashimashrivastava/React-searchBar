import React from 'react'
import { useState } from "react"
import Results from './Results'

function Search(props) {
     

    return (
        <main>
            <div className="main-head">
                <form 
                    className="search-box"
                    onSubmit={props.HandleSearch}>
                    <input 
                        type="search" 
                        placeholder="Search for the data..." 
                        required
                        value={props.search}
                        onChange={e => props.SetSearchItem(e.target.value)}
                        />
                    <button 
                        className="submit-button"
                        >Submit</button>

                </form>

            </div>
            <div className="anime-list">
                {props.resultList.map(item =>(
                    <Results 
                        item={item}
                        key={item.id}
                    />
                ))}

            </div>
        </main>
        // <div>
        //     <div className="control">
        //         <input className="input" onChange={handleInput} value={searchText} type="text" placeholder="Login" />
        //         <button>Submit</button>
        //     </div>
        // </div>
    )
}

export default Search
