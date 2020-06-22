import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Footer from './Componentes/Footer'

const useStyles = makeStyles({
    Error: {
        color: "tomato",
        textAlign: "center",
        marginTop: "12rem",
        marginBottom: "21.5rem"
    }
}); // Estilização Texto 

const headerStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
})); // Estilização Header

const NaoEncontrado = () => {
    const classes = useStyles();
    const header = headerStyles();

    return (
        <div>
            <Toolbar className={header.toolbar}>
                <Button><Link to="/landingpage" style={{ textDecoration: "none", color: "tomato", fontFamily: "Comic Sans MS" }}>Voltar</Link></Button>
            </Toolbar>
            <Box className={classes.Error} component="div" >
                <Typography style={{ fontSize: "5rem" }}>
                    Página não encontrada !!
            </Typography>
            </Box>
            <Footer />
        </div>
    )
};

export default NaoEncontrado;
