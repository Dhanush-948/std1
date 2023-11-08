// import logo from './logo.svg';
import './App.css';
// import thar from './thar.jpg';
// import cir from './cir.jpeg';
import StudentForm from './components/student-form/StudentForm';

// function NavBar() {
// return <h1>This is a navbar</h1>;
// }
// function Banner(){
// return <h1><i>This is a Banner</i></h1>
// }
// function Header(){
// return <h1><b>This is a compound</b></h1>
// }
// function GreetUser(props){
// return (
// <div>
/* <h1><i>Welcome {props.name}</i></h1> */ 
// <h1> your email is {props.email}</h1>
// <h1>yours semester {props.semester}</h1>
// <h1>yours phone number{ props.phonenumber}</h1>
// <h1>yours branch {props.branch}</h1>


// </div>
// );
// }


function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      {/* <Banner/> */}
      {/* <Banner/> */}
      {/* <Header/> */}
      {/* <GreetUser name ="Dhanush" email="acharya7@gmail.com" semester="5" phonenumber="1234567980" branch="CSE"/> */}

      <StudentForm />
      {/* <Resume></Resume> */}
    </div>
  );
}

export default App;
