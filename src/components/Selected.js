import React, { useState } from 'react'
import styled from 'styled-components'

import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';

const StyledDiv = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    width: 25%;
    cursor: pointer;
`;

const StyledItem = styled.p`
    ${props => props.open ? `opacity: 100%` : `opacity: 0`};
    padding: .5rem;
    background-color: rgba(255, 210, 207,.8);
    border-bottom: 1px solid rgba(0,0,0,.1);
    transition: all .2s ease;
`;

const StyledTitle = styled.div`
    display: flex;
    justify-content: center;
    font-size: 1.2rem;
    background-color: #f50057;
    color: white;
    padding: 1rem;

    svg {
        margin-left: auto;
    }
`;


const Selected = ({ data, checked }) => {

    const [open, setOpen] = useState(false)
    
    return (
        <StyledDiv onClick={() => setOpen(!open)}>
            {data
            .filter(item => checked.includes(item.id))
            .map((item) => 
                <StyledItem 
                    key={item.id} 
                    open={open}
                > 
                    ID: {item.id} {item.first_name} {item.last_name} 
                </StyledItem>
            )}
            <StyledTitle>
                <span>Selected {checked.length}</span>             
                {open ? <ArrowDropDown /> : <ArrowDropUp />} 
            </StyledTitle>
        </StyledDiv>
    )
}

export default Selected
