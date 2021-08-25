import React, { useState, useCallback, useRef } from 'react';

const AppUseCallback = () => {
  console.log('Render: App');
  const inputRef = useRef();

  const [users, setUsers] = useState([
    { name: 'Frank' },
    { name: 'Juan' },
  ]);

  const handleOnChange = () => console.log('input')

  const handleAddUser = () => {
    console.log('Add user: ', inputRef.current.value);
    setUsers(users.concat({ name: inputRef.current.value }));
  };

  const handleRemove = useCallback((name) => {
    console.log('Remove user: ', name);
    setUsers(users.filter((user) => user.name !== name));
  }, [users]);

  return (
    <div>
      <input ref={inputRef} type="text" onChange={handleOnChange} />
      <button type="button" onClick={handleAddUser}>
        Add User
      </button>

      <List list={users} onRemove={handleRemove} />
    </div>
  )
}

const List = React.memo(({ list, onRemove }) => {
  console.log('Render: List');

  return (
    <ul>
      {list.map((item) => (
        <ListItem key={item.name} item={item} onRemove={onRemove} />
      ))}
    </ul>
  );
});

const ListItem = React.memo(({ item, onRemove }) => {
  console.log('Render: ListItem');

  return (
    <li>
      {item.name}
      <button type="button" onClick={() => onRemove(item.name)}>
        Remove
      </button>
    </li>
  );
});

export default AppUseCallback;
