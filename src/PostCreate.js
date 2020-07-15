import React, { useState } from 'react';
import axios from 'axios';

export default () => {
  // Returns a stateful object and a function to update it
  // eg) setTitle() will be used to update the title object;
  // setTitle(1) => title = 1;
  const [title, setTitle] = useState('');

  const onSubmit = async event => {
    event.preventDefault();

    await axios.post('http://posts.com/posts/create', {
      title
    });

    setTitle('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
