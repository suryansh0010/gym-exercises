import React, { useRef } from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  const itemRef = useRef(null);

  const handleClick = () => {
    setBodyPart(item);
    
    // Scroll to center
    itemRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  };

  return (
    <Stack
      ref={itemRef}
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        background: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "282px",
        cursor: "pointer",
        gap: "47px",
        borderTop: bodyPart === item ? "4px solid #FF2625" : "none",
      }}
      onClick={handleClick}
    >
      <img src={Icon} alt="dumbbell" style={{ width: "40px", height: "40px" }} />
      <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize">
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
