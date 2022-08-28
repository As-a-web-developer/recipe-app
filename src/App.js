import './App.css';

const App = () => {

  const APP_ID = "5cde7a8d";
  const APP_KEY = "9f4c0ea907393126b86293f1404a814e";
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
