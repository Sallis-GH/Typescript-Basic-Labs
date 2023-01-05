import './App.css';
import { FormEvent, useEffect, useState } from 'react'
interface userState {
  name: string,
  age: number,
  street: string,
  city: string,
  postcode: number
}

function App() {
  const [inputName, setInputName] = useState('');
  const [user, setUser] = useState<userState>({
    name: '',
    age: 0,
    street: '',
    city: '',
    postcode: 0
  });

  useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then(data => data.json())
      .then(data => setUser({
        name: `${data.results[0].name.first} ${data.results[0].name.last}`,
        age: data.results[0].registered.age,
        street: `${data.results[0].location.street.name} ${data.results[0].location.street.number}`,
        city: data.results[0].location.city,
        postcode: data.results[0].location.postcode
      }));
  }, [])



  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setUser({ ...user, name: inputName })
    setInputName('');
  }
  const handleButon = (e: React.ChangeEvent<HTMLInputElement>) => setInputName(e.currentTarget.value)

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleButon} type="text" placeholder='Change name' value={inputName} />
        <button>Submit</button>
      </form>
      <h1>Name: {user.name} </h1>
      <h2>Age: {user.age}</h2>
      <h2>Address: {user.street}, {user.city} {user.postcode}</h2>
    </>
  );
}

export default App;
