import React from 'react'
import styled from 'styled-components/macro'
import logo from './diet.png'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const RecipeListComponent = styled.div`
    flex-basis: 20%;
    box-shadow: 0px 0px 6px 2px rgba(171,171,171,0.75);
    -webkit-box-shadow: 0px 0px 6px 2px rgba(171,171,171,0.75);
    -moz-box-shadow: 0px 0px 6px 2px rgba(171,171,171,0.75);
    margin-bottom: 1rem;
    padding: 1rem;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 15rem;
`;

const RecipeImg = styled.img`
    width: 150px;
`;

const RecipeButton = styled.p`
    color: black;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    text-align: center;
    font-weight: 700;
    border: 2px solid black;
`;

const IngredientsButton = styled.p`
    color: black;
    background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
    padding: 0.5rem 1rem;
    border-radius: 5px;
    font-weight: 700;
    text-align: center;
    cursor: pointer;

`;

const RecipeList = ({ image, title, fullRecipe, ingredientsList }) => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <RecipeListComponent>
            <RecipeImg src={image} onError={e => e.target.src = logo}></RecipeImg>
            <p style={{ textAlign: 'center' }}><strong>{title}</strong></p>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    Ingredients List
                </DialogTitle>
                <DialogContent>
                    <DialogContentText component={'span'}>
                        <ol>
                            {ingredientsList.map((Ingredient, index) => (

                                <li key={index}>{Ingredient}</li>
                            ))}
                        </ol>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>


            <IngredientsButton onClick={handleClickOpen}>See Ingredients</IngredientsButton>
            <RecipeButton><a href={fullRecipe} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'black' }}>See Full Recipe</a></RecipeButton>
        </RecipeListComponent>
    )
}

export default RecipeList
