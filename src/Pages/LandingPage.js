import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Footer from '../Componentes/Footer'
import Header from '../Componentes/Header'

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: "50px",
        paddingBottom: "50px"
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
}));


export default function Album() {
    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            <Header />
            <main>
                <Container className={classes.cardGrid} maxWidth="md">

                    <Grid item>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image="https://img.ibxk.com.br/2015/10/08/08173114333801.jpg?w=1120&h=420&mode=crop&scale=both"
                                title="Produto de Software Excel"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Micriosoft Excel
                    </Typography>
                                <Typography>
                                    O Microsoft Excel é o programa de planilha líder do setor, uma poderosa ferramenta de visualização e análise de dados, é a melhor plataforma eletrônica para criação de planilhas. Muitas empresas hoje sobrevivem com base em uso destas planilhas. Seus recursos incluem uma interface intuitiva e capacitadas ferramentas de cálculo e de construção de gráficos que, juntamente com marketing agressivo, tornaram o Excel um dos mais populares aplicativos de computador até hoje.
                    </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                </Container>
            </main>

            <Footer />
        </>
    );
}