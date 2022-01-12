import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';

const Note = ({ note }) => {
  const { author, createdAt, favoriteCount, content } = note;

  return (
    <article>
      <img src={author} alt="{note.author.username} avatar" height="50px" /> {author} {createdAt} {favoriteCount}{' '}
      <ReactMarkdown source={content} />
    </article>
  );
};

Note.propTypes = {
  note: PropTypes.object.isRequired,
};

export default Note;
