import React from 'react';
import PropTypes from 'prop-types';

import Note from './Note';

const NoteFeed = ({ notes }) => (
  <div>
    {notes.map((note) => (
      <div key={note.id}>
        <Note note={note} />
      </div>
    ))}
  </div>
);

NoteFeed.propTypes = {
  notes: PropTypes.array.isRequired,
};

export default NoteFeed;
