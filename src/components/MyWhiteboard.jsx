// MyWhiteboard.js
import React from 'react';
import { Excalidraw } from '@excalidraw/excalidraw';

const MyWhiteboard = () => {
  return (
    <div className='bottom'>
      <Excalidraw
        width={800} // set the width as needed
        height={600} // set the height as needed
      />
    </div>
  );
};

export default MyWhiteboard;
