import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

  const APP_ID = "b64f6410";
  const APP_KEY = "b54f03e6e572d593954f60acfffa26ad";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('best');


  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log("updateSearch")
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <div className="pgnTitulo">
        <h1 >Minhas Receitas</h1>
      </div>
      <form
        onSubmit={getSearch}
        className="searchForm">
        <input
          className="searchBar"
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder="Digite aqui para pesquisar" />

        <button className="searchBtn" type="submit">Pesquisar</button>
      </form>
      <div className="recipes">

        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          // time={recipe.recipe.time}

          />
        ))}
      </div>
    </div>
  );
};

export default App;
