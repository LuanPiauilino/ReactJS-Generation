import Reat from "react";

import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { Box } from "@mui/material";

import "./CadastroUsuario.css";
import { Link } from "react-router-dom";

function CadastroUsuario() {
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={6} className='img2'></Grid>
            <Grid item xs={6} alignItems="center">
                <Box paddingX={10}>
                    <form>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="negrito2">Cadastrar</Typography>
                        <TextField id="nome" label="nome" variant="outlined" name="nome" margin="normal" fullWidth/>
                        <TextField id="usuario" label="usuário" variant="outlined" name="usuario" margin="normal" fullWidth/>
                        <TextField id="senha" label="senha" variant="outlined" name="senha" margin="normal" fullWidth type="password"/>
                        <TextField id="confirmarSenha" label="confirmar senha" variant="outlined" name="confirmarSenha" margin="normal" fullWidth type="password"/>                        <Box marginTop={2} textAlign="center">
                            <Link to="/login" className="text-decorator-none2">
                                <Button variant="contained" color="secondary" className="btncancelar">
                                    Cancelar
                                </Button>
                                <Button type="submit" variant="contained" color="primary">
                                    Confirmar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                </Box>
            </Grid>
        </Grid>
    )
}


export default CadastroUsuario;