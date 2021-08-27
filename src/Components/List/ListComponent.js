import React from 'react';
import { 
    Card, 
    CardContent,
    List,
    ListItem,
    ListItemText,
    Divider,
    Collapse 
} from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';


function ListComponent({state, setState}) {

    const [open, setOpen] = React.useState(false);

    return(
        <Card style={{marginTop: "5vh", width: "30%"}}>
            <CardContent>                
                <List>
                    <Divider />
                    {
                        state.current && (
                            <>   
                                <ListItem selected button>
                                    <ListItemText primary={state.current.name} secondary={`Stars: ${state.current.stargazerCount}`} />
                                </ListItem> 
                                <Divider />
                            </>
                        )
                    }                    
                    <ListItem button onClick={() => setOpen(!open)}>
                        <ListItemText primary="Related Topics" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>                        
                            {
                                state.data.map(x => (
                                <>   
                                    <ListItem button>
                                        <ListItemText primary={x.name} secondary={`Stars: ${x.stargazerCount}`} />
                                    </ListItem> 
                                    <Divider />
                                </>
                                ))
                            }
                        </List>
                    </Collapse>
                </List>
            </CardContent>
    </Card>
    )
}

export default ListComponent;