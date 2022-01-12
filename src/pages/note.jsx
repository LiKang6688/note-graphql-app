import React from 'react';
import { useQuery, gql } from '@apollo/client';
import PropTypes from 'prop-types';

// the note query, which accepts an ID variable
const GET_NOTE = gql`
  query note($id: ID!) {
    note(id: $id) {
      id
      createdAt
      content
      favoriteCount
      author {
        username
        id
        avatar
      }
    }
  }
`;

const NotePage = ({ match }) => {
  // store the id found in the url as a variable
  const { id } = match.params;
  // query hook, passing the id value as a variable
  const { loading, error, data } = useQuery(GET_NOTE, { variables: { id } });
  // if the data is loading, display a loading message
  if (loading) return <p>Loading...</p>;
  // if there is an error fetching the data, display an error message
  if (error) return <p>Error! Note not found</p>;

  return (
    <div>
      <p>ID: {id}</p>
      <div>{data.note}</div>
    </div>
  );
};

NotePage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default NotePage;
