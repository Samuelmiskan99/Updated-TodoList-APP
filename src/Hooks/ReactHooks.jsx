// import PlaceContentCenter from './Components/Layout/PlaceContentCenter';
// import Card from './Components/Layout/Card';
// import Button from './Components/Layout/Button';
// import Input from './Components/Layout/Input';

// import useJoke from './Hooks/useJoke';
// import { useRef, useState } from 'react';

// function App() {
//    const nameRef = useRef('');
//    const [name, setName] = useState('samuel');
//    const joke = useJoke(name);

//    const generateJokes = (e) => {
//       e.preventDefault();
//       setName(nameRef.current.value);
//    };
//    return (
//       <PlaceContentCenter>
//          <Card>
//             <Card.title>Joke</Card.title>
//             <Card.body>
//                <p className='mb-4'>{joke.value}</p>
//                <Input ref={nameRef} />
//             </Card.body>
//             <Card.footer>
//                <Button onClick={generateJokes}>Generate a joke</Button>
//             </Card.footer>
//          </Card>
//       </PlaceContentCenter>
//    );
// }

// export default App;
