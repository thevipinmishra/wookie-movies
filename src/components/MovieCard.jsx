import { useState, forwardRef } from "react";
import {
  Paper,
  Typography,
  Stack,
  Button,
  Dialog,
  DialogContent,
  Slide,
  Box,
  Chip,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MovieCard = ({ movie }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Paper className="movie-card">
      <img className="thumbnail" src={movie.poster} alt="" />
      <Stack className="content" spacing={2}>
        <Typography
          component={Link}
          to={movie.slug}
          variant="h4"
          sx={{
            textDecoration: "none",
            color: "inherit",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
          className="title"
        >
          {movie.title}
        </Typography>
        <Typography variant="body2">Director - {movie.director}</Typography>
        <Typography variant="body2">
          IMDB Rating - {movie.imdb_rating}
        </Typography>

        <Button variant="contained" onClick={handleClickOpen}>
          More Details
        </Button>

        <Dialog
          open={open}
          TransitionComponent={Transition}
          onClose={handleClose}
          fullWidth
          maxWidth="lg"
        >
          <DialogContent sx={{ padding: 6, position: "relative" }}>
            <IconButton
              onClick={handleClose}
              sx={{ position: "absolute", top: 4, right: 4, flexShrink: "0" }}
            >
              x
            </IconButton>
            <Box sx={{ display: "flex", alignItems: "flex-start", gap: 3 }}>
              <Box component="img" src={movie.poster} sx={{ width: 400 }} />
              <Stack spacing={2}>
                <Typography variant="h4">{movie.title}</Typography>
                <Typography variant="body2">{movie.overview}</Typography>
                <Typography variant="body2">
                  Released -{" "}
                  {new Intl.DateTimeFormat("en-In", {
                    month: "short",
                    year: "numeric",
                  }).format(new Date(movie.released_on))}
                </Typography>
                <Typography>Length - {movie.length}</Typography>
                <Typography
                  sx={{ display: "inline-flex", gap: 1, alignItems: "center" }}
                >
                  Casts -{" "}
                  <Stack direction="row" spacing={1}>
                    {movie.cast.map((item) => (
                      <Chip component="span" key={item} label="item" />
                    ))}
                  </Stack>
                </Typography>
                <Typography variant="body2">
                  Director - {movie.director}
                </Typography>
                <Typography variant="body2">
                  IMDB Rating - {movie.imdb_rating}
                </Typography>
              </Stack>
            </Box>
          </DialogContent>
        </Dialog>
      </Stack>
    </Paper>
  );
};

export default MovieCard;
