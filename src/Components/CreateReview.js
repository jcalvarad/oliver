import React from "react";
import axios from "axios";
import { useParams } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Rating from "@material-ui/lab/Rating";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
  },
}));

export default function CreateReview() {
  const classes = useStyles();
  let { id } = useParams();
  const [ratingValue, setRatingValue] = React.useState(2);
  const [bodyValue, setBodyValue] = React.useState("");
  const [authorValue, setAuthorValue] = React.useState("");
  const [titleValue, setTitleValue] = React.useState("");

  const handleChange = (event) => {
    setBodyValue(event.target.value);
  };

  const handleSubmit = (event) => {
    axios.post(`http://localhost:3004/products/${id}/reviews`, {
      author: authorValue,
      star_rating: ratingValue,
      headline: titleValue,
      body: bodyValue,
      productId: id,
    });
    event.preventDefault();
  };

  return (
    <Container maxWidth="sm">
      <Typography align="center" variant="h5">
        Create a review for product {id}
      </Typography>

      <Paper className={classes.paper}>
        <Box display="flex" flexDirection="column">
          <form onSubmit={handleSubmit}>
            <FormControl>
              <Box display="flex">
                <Box m={1}>
                  <TextField
                    id="author"
                    label="Review author..."
                    value={authorValue}
                    onChange={(e) => setAuthorValue(e.target.value)}
                  />
                </Box>
                <Box m={1}>
                  <Typography component="legend">Rating</Typography>
                  <Rating
                    name="productRating"
                    value={ratingValue}
                    onChange={(event, newValue) => {
                      setRatingValue(newValue);
                    }}
                  />
                </Box>
              </Box>
              <Box m={1}>
                <TextField
                  id="headline"
                  label="Title for your review..."
                  value={titleValue}
                  onChange={(e) => setTitleValue(e.target.value)}
                  fullWidth
                />
              </Box>
              <Box m={1}>
                <TextField
                  id="review"
                  label="Write your review here..."
                  multiline
                  rows={4}
                  rowsMax={6}
                  value={bodyValue}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                />
              </Box>
              <Box alignContent="flex-end">
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </Box>
            </FormControl>
          </form>
        </Box>
      </Paper>
    </Container>
  );
}
