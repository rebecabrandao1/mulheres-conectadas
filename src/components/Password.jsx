import React from 'react'
import {  
    Box,
    Button,
    Stack,
    TextField,
    Collapse
} from '@mui/material'
import Title from './Title'
import Paragraph from './Paragraph'



const Password = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
        });
    }


    return (
        <Stack 
        component='section'
        direction="column"
        justifyContent= 'center'
        alignItems='center'
        sx={{
            py: 10,
            px: 2,
        }}
        >
            <Title 
            text={
                'Esqueceu a senha?'
                } 
            textAlign={'center'}
            />
            

            <Box 
            component="form" 
            noValidate 
            onSubmit={handleSubmit} 
            sx={{ 
                mt: 1,
                py: 2
            }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Digite seu email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                
                <Button 
                variant="contained" 
                fullWidth
                type="submit"
                size="medium"
                sx= {{ 
                    fontSize: '0.9rem',
                    textTransform: 'capitalize', 
                    py: 2,
                    mt: 3, 
                    mb: 2,
                    borderRadius: 0,
                    backgroundColor: 'purple',
                    "&:hover": {
                        backgroundColor: '#746c84',
                    }
                }}
                >
                   Encontrar
                </Button>
            </Box>
        </Stack>
        
    )
}

export default Password;