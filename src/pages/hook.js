import React, { useState } from 'react';
import Header from '../components/layout'

function Fggdfd () {
    const [count, setCount] = useState(0);

    return (
        <div>
              <Header />      

              <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
        </div>
    );
};

export default Fggdfd;