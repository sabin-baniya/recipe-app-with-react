import React, { useState } from 'react'
import styled from 'styled-components/macro'
import logo from './diet.png'
import Axios from 'axios'
import loader from './loading.gif'

const HeaderComponent = styled.div`
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    padding: 0.5rem 1rem;
    
    `;

const LogoComponent = styled.div`
    display: flex;
    align-items: center;

    `;

const Logo = styled.img`
    width: 50px;
    height: 50px;
        
    `;

const LogoText = styled.p`
    font-size: 1rem;
    font-weight: 600;
    margin-left: 1rem;
    `;

const SearchComponent = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    width: 20%;
    min-width: 215px;
    height: 2rem;
    border-radius: 5px;
    `;

const SearchInput = styled.input`
    width: 100%;
    border: none;
    margin-left: 1rem;
    outline: none;
    `;

const SearchImg = styled.img`
    margin-left: 0.5rem;
`;

const Header = ({ setRecipeList, setLoading, loading }) => {

    const [timeoutId, setTimeoutId] = useState('');

    const fetchQuery = async (query) => {
        const resp = await Axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`);
        await setRecipeList(resp.data.hits);
        await setLoading(false)
    }

    const searchQuery = (e) => {
        setLoading(true);
        clearTimeout(timeoutId);
        let TimeoutId

        if (e.target.value === '') {
            setLoading(false);
        }

        if (e.target.value) {
            setRecipeList([])
            TimeoutId = setTimeout(() => {
                fetchQuery(e.target.value)
                e.target.blur();
            }, 700)
        }
        setTimeoutId(TimeoutId)
    }



    return (
        <HeaderComponent>
            <LogoComponent>
                <Logo src={logo}></Logo>
                <LogoText className="text">Search The Recipe You Want</LogoText>
            </LogoComponent>
            <SearchComponent>
                {loading ? <SearchImg src={loader} /> : (
                    <i className="fas fa-search" style={{ color: 'black', marginLeft: '1rem' }}></i>
                )}
                <SearchInput type="text" placeholder="Search Recipe" onChange={e => searchQuery(e)} ></SearchInput>
            </SearchComponent>
        </HeaderComponent >
    )
}

export default Header
