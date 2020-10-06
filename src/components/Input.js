import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';

const StyledWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 1.2rem;
    background-color: #f50057;
    color: white;

    &:hover {
        background-color: hsl(339, 100%, 56%);
    }

    &:hover .highlight {
        background-color: hsl(339, 100%, 56%);
    }

`;

const StyledInput = styled.input`
    border: none;
    outline: none;
    flex: 1;
    padding: 1rem;
    background-color: #f50057;
    color: white;
    font-size: 1rem;
    
    &:hover {
        background-color: hsl(339, 100%, 56%);
    }

    ::placeholder {
        color: rgba(255,255,255,.6);
    }
`;

const Input = ( { setSearchQuery }) => {

    const [inputValue, setInputValue] = useState('') 

    const handleValueChange = (e) => {
        setInputValue(e.target.value)
    }

    useEffect(() => {
        setSearchQuery(inputValue.toLowerCase())
    }, [inputValue])

    return (
        <StyledWrapper>
            <SearchIcon style={{ color: `white` }} />
            <StyledInput className="highlight" type="text" placeholder="...search" value={inputValue} onChange={(e) => handleValueChange(e)}/>
        </StyledWrapper>
        )
}

export default Input


