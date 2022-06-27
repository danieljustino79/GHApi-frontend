import { Typography } from "@mui/material";
import { Button, Grid } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Repo } from "../models/Repo";

export default function Detail(){
    let {login} = useParams();
    const [repos, setRepos] = useState<Repo[]>([]);

    useEffect(()=>{    
        axios.get(`https://localhost:7123/api/GHApi/RepoListByLogin?login=${login}`)
        .then(res => {
          setRepos(res.data);
        });
      }, []);

    let navigate = useNavigate(); 
    const redirectUsers = () => { 
        let path = `/users`; 
        navigate(path);
    }

    const renderLockIcon = (repoPrivate: boolean) => {
        return (repoPrivate) ? <LockIcon /> : <LockOpenIcon />;
    }
    
    return(
        <>
            <Typography>Lista de Repositórios</Typography>
            <Button variant="outlined" onClick={redirectUsers}>Voltar</Button>
            <div style={{
                paddingTop: '10px',
                backgroundColor: 'white',
                margin:'2px'}}>                
                    {repos.map((value) => (
                        <Grid container key={value.id}>
                            <Grid item xs={1}>
                                {renderLockIcon(value.private)}
                            </Grid>
                            <Grid item xs={11}>
                                {value.name}
                            </Grid>
                        </Grid>
                    ))}
            </div>
        </>
    )
}