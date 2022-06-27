import Typography from '@mui/material/Typography';
import { Button, Grid, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useEffect, useState } from 'react';
import { User } from '../models/User';
import axios from 'axios';

export default function Users(){
    const [users, setUsers] = useState<User[]>([]);

    useEffect(()=>{    
        axios.get(`https://localhost:7123/api/GHApi`)
        .then(res => {
          setUsers(res.data);
        });
      }, []);
      
    let navigate = useNavigate(); 
    const redirectRoute = () => { 
        let path = `/`; 
        navigate(path);
    }

    const redirectUser = (login:string) => {
        navigate(`/detail/${login}`);
    }

    return(
        <>
            <Typography>Lista de Usuários</Typography>
            <Button variant="outlined" onClick={redirectRoute}>Voltar</Button>
            <div style={{
                paddingTop: '10px',
                backgroundColor: 'white',
                margin:'2px'}}>                
                    {users.map((value) => (
                        <Grid container key={value.nodeId}>
                            <Grid item xs={6}>
                                <Typography key={value.nodeId}>{value.login}</Typography>
                            </Grid>
                            <Grid item xs={5}>
                            </Grid>
                            <Grid item xs={1}>
                                <IconButton color="primary" onClick={() =>{
                                    redirectUser(value.login)
                                }}>
                                    <AccountBoxIcon/>
                                </IconButton>                                
                            </Grid>
                        </Grid>
                    ))}
            </div>
        </>
    );
}
