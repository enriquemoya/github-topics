import React from 'react';
import { 
    Card, 
    CardContent,
    CardActions, 
    FormControl, 
    InputLabel, 
    OutlinedInput,
    Button,
    Typography
} from '@material-ui/core';
import { useLazyQuery } from '@apollo/client';
import QUERY from '../../Queries/TopicsQuery';


function Header({setState, state}) {
    const [getTopics, { loading, data }] = useLazyQuery(QUERY);

    React.useEffect(()=>{
        if(data){
            console.log(data);
            setState({
                ...state,
                current: {
                    name: data.topic.name,
                    stargazerCount: data.topic.stargazerCount
                },
                data: data.topic.relatedTopics
            });
        }
    }, data);
    return(
        <Card>
            <CardContent>                
                <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-topic">Topic</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-topic"
                    value={state.text}
                    onChange={(e) => setState({...state, text: e.target.value})}
                    labelWidth={60}
                />
                </FormControl>
                {
                    loading && (
                    <Typography>Loading...</Typography>)
                }
            </CardContent>
            <CardActions>
                <Button
                disabled={loading}
                 onClick={()=> {
                    getTopics({
                        variables: {
                            name: state.text
                        }
                    })
                }} color="primary">Search</Button>
            </CardActions>
    </Card>
    )
}

export default Header;