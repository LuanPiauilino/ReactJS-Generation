import React, { useEffect, useState } from 'react';

import {Typography, Button, Card, CardActions, CardContent } from "@material-ui/core";
import { useNavigate, useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import useLocalStorage from 'react-use-localstorage';

import { buscaId, deleteId } from '../../../services/Service';
import './DeletarPostagem.css';
import Postagem from '../../../models/Postagem';


function DeletarPostagem() {
   
    let navegate = useNavigate();
    const { id } = useParams<{id: string}>();
    const [token, setToken] = useLocalStorage('token');
    const [post, setPosts] = useState<Postagem>()

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navegate("/login")
    
        }
    }, [token])

    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/postagens/${id}`, setPosts, {
            headers: {
              'Authorization': token
            }
          })
        }

        function sim() {
            navegate('/posts')
            deleteId(`/postagens/${id}`, {
              headers: {
                'Authorization': token
              }
            });
            alert('Postagem deletada com sucesso');
          }
        
          function nao() {
            navegate('/posts')
          }

  return (
    <>
      <Box m={2}>
        <Card variant="outlined" >
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar a Postagem:
              </Typography>
              <Typography color="textSecondary" >
              {post?.titulo}
              </Typography>
            </Box>

          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
              <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                Sim
              </Button>
              </Box>
              <Box>
              <Button onClick={nao} variant="contained" size='large' color="secondary">
                Não
              </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarPostagem;