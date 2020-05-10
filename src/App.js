import React,{useEffect, useState} from 'react';
import Recipe from './Recipe';
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';

const App = () => {
  const APP_ID = 'f9509fbd';
  const APP_KEY = '6fc39eab6a622486a6d81e0513a312ec';

 const [recipes, setRecipes] = useState([]);
 const [search,setSearch] = useState('');
 const [query,setQuery] = useState('chicken');

  ;

  useEffect(()=>{
    getRecipes();
       
  },[query]);

  const getRecipes = async() =>{
    const response = await fetch (`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);

 
  };
  const updateSearch = e => {
    setSearch(e.target.value);
    
  };
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  return (
    <div className='App'>
      <div className='container text-center'><br></br>
      <h2> Recipe Search</h2> <br></br>
      
      
      <form onSubmit={getSearch} className='search-form'>
        <input className='search-bar' type='text' value={search} onChange={updateSearch}/>
        <button className='btn btn-primary' type='submit'>Search</button>
      </form>
      
      {recipes.map(recipe =>(
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}/>
      ))}
      </div>
    </div>
  )
}
export default App;
