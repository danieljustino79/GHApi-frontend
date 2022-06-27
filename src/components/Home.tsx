import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Home(){
    let navigate = useNavigate(); 
    const redirectUsers = () => { 
        let path = `/users`; 
        navigate(path);
    }
    return(
        <>
            <Button variant="outlined" onClick={redirectUsers}>Listar Usuários</Button>
        </>
    )
}