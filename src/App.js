// import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile';
import Image from './profile/Image.jpg' 

function App() {
  const handleName =(user) => {
    alert(`This profile user is ${user}`)
  }

  return (
    <div className="App">
        <br/>
        <img src={Image} alt='thorsten' width={320} height={320} />
        <Profile fullName='Kristian Thorsten' bio='space, tech, geo' profession='Impact Investor' handleName={handleName} />
    </div>
  );
}

export default App;
