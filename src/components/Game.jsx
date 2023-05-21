import React from "react";
import { Link } from "react-router-dom";
import { Card, Typography,Button } from "@mui/material";

const Game = ({ text }) => {
  const handleLinkClick = () => {
    window.open("https://mulheresconectadasgame.web.app/", "_blank");
  };

  return (
    <Typography
      variant="h4"
      component="h3"
      sx={{
        fontWeight: '700',
        textAlign: 'center',
        color: 'purple',
      }}
    >
      Aprenda programação com o nosso quiz interativo!{" "}
      <Card>
        <link to="https://mulheresconectadasgame.web.app/"></link>
      <Button variant= 'outlined' color='secondary' onClick={handleLinkClick} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
        Acesse aqui!
      </Button>

      </Card>
      
    </Typography>
  );
};

export default Game;
