## Oliver Space Take-Home Instructions

Your mission, if you choose to accept it, is to build out a mock of a product reviews flow.
This includes a page for users to submit their reviews as well as a page to read reviews.

REQUIREMENTS:

- Create a page where a user can review a given product with the following information:
  - Their name (the author)
  - A star rating
  - Headline text (a title for their review)
  - The body of the review (a longer paragraph)
- Create a page where a user can view all of the reviews for a given product

Please spend 90 minutes completing this task to whatever extent you can finish, but don't
go over time. The expectation is not that you will get through all of the requirements, so please add notes on anything else you would have done with more time. Feel free to use any third-party libraries
that you find helpful.

## Running the app

Start the mock JSON server on port 3004 using `json-server --watch db.json`
Start the React app on port 3000 using `npm start`
You can then make requests to http://localhost:3004/products, http://localhost:3004/reviews or http://localhost:3004/products/:id/reviews using axios, or any of your preferred methods

More info on json-server [here](https://www.npmjs.com/package/json-server)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Results

The code generated was done within the 90 mins timeframe.
The idea was to generate two simple function components that could manage their state and save to DB via HTTP enpoint.

To test the application run the React app and the JSON server as stated above.

The two endpoints created are:

http://localhost:3000/products/:id/review
This one will create a review for a certain product.

http://localhost:3000/products/:id/reviews
This one will show all the reviews for a certain product. (Product shoould haver at least one review)

### TODO

- Get product names for page titles
- Notification for review created
- Add validation for products without reviews
- Better endpoint names?
- Styling, and move them out of component.
- Tests
- More...
