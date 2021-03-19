import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Rating from "@material-ui/lab/Rating";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
  },
}));

export default function ReadReviews() {
  let { id } = useParams();
  const [reviews, setReviews] = React.useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3004/products/${id}/reviews`).then((resp) => {
      console.log("waka", resp.data);
      setReviews(resp.data);
    });
  }, []);

  return (
    <Container maxWidth="sm">
      <Typography align="center" variant="h5">
        All reviews for product {id}
      </Typography>

      {reviews.map((review) => (
        <ReviewComponent key={review.id} {...review} />
      ))}
    </Container>
  );
}

function ReviewComponent(props) {
  const classes = useStyles();
  const { author, star_rating, headline, body } = props;
  return (
    <Paper className={classes.paper}>
      <Box display="flex" flexDirection="column">
        <FormControl>
          <Box display="flex">
            <Box m={1}>
              <Typography component="legend">Review by: </Typography>
              <Box fontWeight="fontWeightBold">{author}</Box>
            </Box>
            <Box m={1}>
              <Typography component="legend">Rating</Typography>
              <Rating name="productRating" value={star_rating} readOnly />
            </Box>
          </Box>
          <Box m={1}>
            <Typography component="legend">{headline}</Typography>
          </Box>
          <Box m={1}>
            <TextField
              id="outlined-multiline-flexible"
              label="Review"
              multiline
              rows={4}
              rowsMax={6}
              value={body}
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
              fullWidth
            />
          </Box>
        </FormControl>
      </Box>
    </Paper>
  );
}
