import { Container } from "@mui/material";
import { useParams } from "react-router-dom";

const Movie = () => {
  const { slug } = useParams();
  return (
    <Container>
      <h1>{slug}</h1>
    </Container>
  );
};

export default Movie;
