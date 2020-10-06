import React, { useState } from 'react'

import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';


const Item = ({ email, checked, id, av, firstName, lastName, pushChecked }) => {
    
    const checkboxCheck = checked.includes(id);

    const [checkboxValue, setCheckboxValue] = useState(checkboxCheck)
    
    const handleToggle = () => {
        setCheckboxValue(!checkboxValue)
        pushChecked(id)
    }

    return (
        <ListItem onClick={handleToggle} divider button>
        <ListItemAvatar>
          <Avatar
            alt={firstName}
            src={av}
          />
        </ListItemAvatar>
        <ListItemText primary={`${firstName} ${lastName}`} secondary={email} />
        <ListItemSecondaryAction>
          <Checkbox
            edge="end"
            onChange={handleToggle}
            checked={checkboxValue}
          />
        </ListItemSecondaryAction>
      </ListItem>
    )
}

export default Item
