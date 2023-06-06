import React, { Fragment, useEffect } from 'react'
import SearchInput from '../Search/SearchInput/SearchInput'
import SearchList from '../Search/SearchList/SearchList'
import './Search.css'
import { useState } from 'react'
import axios from 'axios'
// import {data} from '../../assets/Utils/data'


const api_key=import.meta.env.VITE_API_KEY
const API_URL =  `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&page=1&include_adult=false`;
// console.log(api_key);

const Search = () => {
    const [searchList,setSearchList]=useState([])
    const [inputValue,setInputValue]=useState("")
    

  const handleChange=(event)=>{
    const{value}=event.target
    setInputValue(value)
    if(!value){
      setSearchList([])
    }
       

  }
  console.log(inputValue);

  const handleClose = () => {
    setInputValue("")
    setSearchList([])
  }

  const fetchMovie=async()=>{
    try{
      let response=await axios(API_URL,{
        params:{
          query:inputValue
        }
      })
      setSearchList(response?.data?.results)
    }catch(error){
      console.error(error)
    }
  }
  console.log(searchList);
  useEffect(()=>{  //achieving debounce using mount and unmount
    const timeout= setTimeout(()=>{
      if(inputValue){
        fetchMovie()
      }
      },300)
   
    return()=>{
      clearTimeout(timeout)
    }

  },[inputValue])
  return (
    <div className='search-container'>
        <div className="heading-section">
        <h1>Looking for Movie</h1>
        </div>
      <SearchInput handleChange={handleChange} inputValue={inputValue} handleClose={handleClose}></SearchInput>
      <SearchList  searchList={searchList}></SearchList>
    </div>
  )
}

export default Search