import React, { useState } from 'react';

function Header() {
  const [name, useName] = useState('');

  return (
    <header>
      <div>
        <div>
          <input
            type="text"
            name="name-filter"
            data-testid="name-filter"
            onChange={ (e) => useName(e.target.value) }
            value={ name }
          />
        </div>
        <div>
          <div>primeiro forms</div>
          <div>segundo forms</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
