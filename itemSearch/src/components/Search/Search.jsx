import React, { Fragment } from 'react'
import SearchInput from '../Search/SearchInput/SearchInput'
import SearchList from '../Search/SearchList/SearchList'
import './Search.css'
import { useState } from 'react'
import {data} from '../../assets/Utils/data'


const Search = () => {
  const [searchList]=useState(data)
  const [filterList, setFilterList] = useState(data)
  const [inputValue,setInputValue]=useState("")
  const handleChange=(event)=>{
    const{value}=event.target
    setInputValue(value)
       
    const newFilteredList=searchList.filter((data)=>data.title.toLowerCase().includes(value))
    setFilterList(newFilteredList)
  }
  console.log(filterList);
  const handleClose = () => {
    setInputValue("")
    setFilterList(data)
  }

  return (
    <div className='search-container'>
        <div className="heading-section">
        <h1>Looking for</h1>
        </div>
      <SearchInput handleChange={handleChange} inputValue={inputValue} handleClose={handleClose}></SearchInput>
      <SearchList filterList={filterList} searchList={searchList}></SearchList>
    </div>
  )
}

export default Search