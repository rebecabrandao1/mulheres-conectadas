import React from 'react'
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from 'react-router-dom'
//img
import headerImg from '../assets/mulheres.png'

const Header = () => {

    const CustomBox = styled(Box)(({ theme }) => ({
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        // tamanhos
        gap: theme.spacing(2),
        paddingTop: theme.spacing(10),
        // cor de fundo
        backgroundColor: 'purple',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        }
    }));

    const BoxText = styled(Box)(({ theme }) => ({
        flex: '1',
        paddingLeft: theme.spacing(8),
        [theme.breakpoints.down('md')]: {
            flex: '2',
            textAlign: 'center',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
    }));


    return (
        <CustomBox component='header'>
            {/*  Box text  */}
            <BoxText
                component='section'
            >
                <Typography
                    variant='h2'
                    component='h1'
                    sx={{
                        fontWeight: 700,
                        color: '#fff',
                    }}
                >
                    Conheça os nossos cases de sucesso!
                </Typography>

                <Typography
                    variant='p'
                    component='p'
                    sx={{
                        py: 3,
                        lineHeight: 1.6,
                        color: '#fff',
                    }}
                >
                    Texto para encher linguiça
                </Typography>

                <Box>
                    <Button
                        variant='outlined'
                        sx={{
                            
                            px: 4,
                            py: 1,
                            fontSize: '0.9rem',
                            textTransform: 'capitalize',
                            borderRadius: 0,
                            backgroundColor: 'transparent',
                            borderColor: '#fff',
                            "&&:hover": {
                                color: '#343a55',
                                borderColor: '#343a55'
                            },
                            "&&:focus": {
                                color: '#343a55',
                                borderColor: '#343a55',
                            }
                        }}
                    >
                        Entre em contato conosco
                    </Button>
                    <Button
                        component={Link}
                        to={'/about'}
                        variant='outlined'
                        sx={{
                            px: 4,
                            py: 1,
                            fontSize: '0.9rem',
                            textTransform: 'capitalize',
                            borderRadius: 0,
                            color: '#fff',
                            backgroundColor: 'transparent',
                            borderColor: '#fff',
                            "&&:hover": {
                                color: '#343a55',
                                borderColor: '#343a55',
                            },
                            "&&:focus": {
                                color: '#343a55',
                                borderColor: '#343a55',
                            }
                        }}
                    >
                        Explore
                    </Button>
                </Box>
            </BoxText>

            <Box sx={theme => ({
                [theme.breakpoints.down('md')]: {
                    flex: '1',
                    paddingTop: '30px',
                    alignSelf: 'center',
                },
                [theme.breakpoints.up('md')]: {
                    flex: '2',
                    alignSelf: 'flex-end',
                },
            })}
            >
                <img
                    src={headerImg}
                    alt="headerImg"
                    style={{
                        width: "100%",
                        marginBottom: -15,
                    }}
                />
            </Box>

        </CustomBox>
    )
}

export default Header