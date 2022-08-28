import React, {useEffect} from 'react';
import './App.css';

const App = () => {

  const APP_ID = "5cde7a8d";
  const APP_KEY = "9f4c0ea907393126b86293f1404a814e";

  useEffect( () => {
    getRecipes();
  }, []);
 
  const getRecipes = async () => {
    //const response = await fetch(`https://api.edamam.com/api/recipes/v2/0123456789abcdef0123456789abcdef?app_id=${APP_ID}&app_key=${APP_KEY}&type=public`);
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data.hits);
  }

  return(
    <div className='App'>
      <form className='search-form'>
        <input className='search-bar' type="text" />
        <button className='search-button' type='submit'>Search</button>
      </form>
    </div>
  );
}

export default App;
