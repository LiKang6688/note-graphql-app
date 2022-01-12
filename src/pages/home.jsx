import React from 'react';
// import the required libraries
import { useQuery, gql } from '@apollo/client';

import NoteFeed from '../components/NoteFeed';

// our GraphQL query, stored as a variable
const GET_NOTES = gql`
  query NoteFeed($cursor: String) {
    noteFeed(cursor: $cursor) {
      cursor
      hasNextPage
      notes {
        id
        createdAt
        content
        favoriteCount
        author
      }
    }
  }
`;

const Home = () => {
  // query hook
  const { data, loading, error } = useQuery(GET_NOTES);
  // if the data is loading, display a loading message
  if (loading) return <p>Loading...</p>;
  // if there is an error fetching the data, display an error message
  if (error) return <p>Error!</p>;

  window.console.log({ data });
  return (
    <div>
      <p>This is the home page</p>
      <NoteFeed notes={data.noteFeed.notes} />
    </div>
  );
};

export default Home;
