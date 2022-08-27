import {
  Avatar,
  Box,
  Button,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Image from "@mui/icons-material/Image";
import Video from "@mui/icons-material/Videocam";
import Emoji from "@mui/icons-material/EmojiEmotions";
import React, { useState } from "react";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor={"background.default"}
          color={"text.primary"}
          padding={5}
          borderRadius="10px"
        >
          <Typography variant="h6" textAlign="center" color="green">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src="https://i.pinimg.com/736x/2f/61/01/2f6101d3390d823aa361ef3da4047104.jpg"
            />
            <Typography variant="span">Prudhviteja dil</Typography>
          </UserBox>
          <TextField
            fullWidth
            rows={5}
            id="fullWidth"
            placeholder=" Post Something........."
          />

          <Stack direction="row" margin="10px">
            <Emoji sx={{ color: "green" }} />
            <Image sx={{ color: "lightblue" }} />

            <Video sx={{ color: "gray" }} />
          </Stack>
          <Button variant="contained" margin="10" fullWidth>
            Post
          </Button>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
