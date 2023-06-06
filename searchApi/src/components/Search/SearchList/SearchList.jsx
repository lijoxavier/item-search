import React, { useState } from 'react'
import './SearchList.css'

const SearchList = ({ searchList }) => {



    return (
        <div className='search-list-container'>
            {/* <div className="heading-section">
                SearchList
            </div> */}
            {searchList.map((data) =>

                <div className="search-list-items" key={data.id} id={data.id}>
                    <div className="image">
                        <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="" 
                        width="50px" height="50px" style={{objectFit:"contain"}}/>
                    </div>
                    <div className="title"><p>{data.title}</p></div>
                    
                </div>
            )
            }

        </div>
    )
}

export default SearchList