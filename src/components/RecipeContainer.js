import React from 'react'
import styled from 'styled-components/macro'
import RecipeList from './RecipeList';

const RecipeContainerComponent = styled.div`
        width: 95%;
        margin: 3rem auto;
        display: flex;
        flex-wrap:wrap;
        justify-content: space-evenly;
        align-items: center;
        gap: 20px;

    `;

const RecipeContainer = ({ recipeList, loading }) => {


    return (
        <RecipeContainerComponent>
            {recipeList.length > 0 ? (
                recipeList.map((item) => (
                    <RecipeList key={Math.floor(Math.random() * 10000000)} image={item.recipe.image} title={item.recipe.label} fullRecipe={item.recipe.url} ingredientsList={item.recipe.ingredientLines} />
                ))
            ) : (
                <div>
                    {loading ? "Loading..." : "Search any recipe you want in the search box above..."}
                </div>
            )}
        </RecipeContainerComponent>
    )
}

export default RecipeContainer
