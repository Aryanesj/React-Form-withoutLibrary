import './App.css';
import {useState, useRef} from 'react'
import FormInput from './components/input.jsx'

function App() {
  // const [username, setUsername] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    console.log(Object.fromEntries(data.entries()))
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <FormInput name='username' placeholder='Username' />
        <FormInput name='email' placeholder='Email' />
        <FormInput name='fullname' placeholder='Full Name' />
        <FormInput name='sth' placeholder='Sth else' />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
