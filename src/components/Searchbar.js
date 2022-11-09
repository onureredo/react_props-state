import React, {useState} from 'react'
import {products} from '../utils/utils';

function Searchbar(props) {

    const [filteredData, setFilteredData] = useState([]);
    const handleFilter = (e) => {
        const searchWord = e.target.value
        const newFilter = products.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });

        setFilteredData(newFilter);
    };

  return (
    <div className='searchbar'>     
        <div className='searchinput'>
            <input type="text" placeholder={props.placeholder} onChange={handleFilter} /> 
        </div> 
        
        {filteredData.length !== 0 && (
        <div className='searchresult'>
            {filteredData.slice(0, 5).map((products) => {
                return (
                    <p>{products.title}</p>                        
                    )
                })
             }
        </div>
        )}             
    </div>   
  )
}

export default Searchbar