import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
})); // Estilização 

function Header() {

    const classes = useStyles();

    return (
        <>
            <Toolbar className={classes.toolbar}>
                <Button><Link to="" style={{ textDecoration: "none", color: "tomato", fontFamily: "Comic Sans MS" }}>Perfil</Link></Button>
                <Button><Link to="" style={{ textDecoration: "none", color: "tomato", fontFamily: "Comic Sans MS" }}>Anúncios</Link></Button>
                <Button><Link to="" style={{ textDecoration: "none", color: "tomato", fontFamily: "Comic Sans MS" }}>Configuração</Link></Button>
            </Toolbar>
        </>
    );
}

export default Header;