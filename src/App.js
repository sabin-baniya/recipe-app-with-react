import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import RecipeContainer from './components/RecipeContainer';

function App() {

  const [recipeList, setRecipeList] = useState([]);
  const [loading, setLoading] = useState(false)

  return (
    <div className="App">
      <Header setRecipeList={setRecipeList} setLoading={setLoading} loading={loading} recipeList={recipeList} />
      <RecipeContainer recipeList={recipeList} setLoading={setLoading} loading={loading} />
    </div>
  );
}

export default App;
