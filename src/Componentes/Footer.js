import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: "100%"
    },

    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
})); // Estilização do Footer

function TextoFooter() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline /> {/* Zerando */}
            <footer className={classes.footer}>
                <Container maxWidth="sm">
                    <Typography variant="body1">Feito por Thomas Yang</Typography>
                    <Copyright /> {/* Chamando o Componente Copyright */}
                </Container>
            </footer>
        </div>
    );
} // Texto Maior do Footer

export default TextoFooter;

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary">
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/zoe-pixel/ProvaReact/"> {/* Direcionando para aonde vai quando aperto no meu nome */}
                PeiHon
      </Link>{' '} {/* Espaço entre  Peihon e getFullYear */}
            {new Date().getFullYear()}
        </Typography>
    );
} // Texto Menor do Footer
