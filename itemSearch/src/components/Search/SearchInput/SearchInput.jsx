import close from "../../../assets/image/close.png"
import './SearchInput.css'

const SearchInput = ({ handleChange, handleClose,inputValue })=>{
   
    return(
        <div className="search-input-container">

            <div className="searchbox">
                <input type="text" onChange={handleChange} value={inputValue} />
            </div>
            <div className="close" onClick={handleClose}>
                <img src={close} alt=""  width="20px" height="20px"/>
            </div>

        </div>

    )

}

export default SearchInput