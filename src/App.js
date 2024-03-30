import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'; 
import TextForm from './components/TextForm'; //import TextForm components
import Alert from './components/Alert';


function App() {
  const[mode,setMode] = useState("light");  //yadi useState("") ke under ham "light" type karenge toh Navbar "light" Or "dark" type karenge toh "Dark" hoga.

  const[alert, setAlert] = useState(null);  //Alert ko set karne ke liye hamne useState ka used kara h.

  const showAlert = (message, type)=>{   //Alert ke message and Type ko Show karne ke liye is function ka used kara h.
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {  
      //"setTimeout" Function ka used hamne Alert ko 1sec me Automatic hatane ke liye kiya h isliye "1000" used kiya h.
      setAlert(null);
    }, 1000);
  }

  const toggleMode = ()=>{
    if(mode === "light")  //jab mode barabar hoga "light" ke toh use "Dark" mode me change karde.
    {
      setMode("dark");
      document.body.style.backgroundColor ="#042743"; // Body ka background color "#042743" set karne ke liye.
      showAlert("Dark mode has been enabled","success");  //Alert ko show karne ke liye showAlert ka used kara h ("success") ka use hamne Alert ke type means "color"code(green) ko show karne ke liye kiya h.
      document.title = "TextUtils-Dark Mode";   //jab ham dark mode enable karenge toh title bhi "TextUtils-Dark Mode" change hoga.
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing Mode";
      // }, 2000);      
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 1500);
      //Note: iska used hame nahi karna h wase isse title ko intract karne ke liye used kara h. Example dekhe.
    }
    else{
      setMode("light");  //warna "light" mode rahne de.
      document.body.style.backgroundColor ="white";  // Body ka background color "white" set karne ke liye.
      showAlert("Light mode has been enabled","success");  //Alert ko show karne ke liye showAlert ka used kara h ("success") ka use hamne Alert ke type means "color"code(green) ko show karne ke liye kiya h.
      document.title = "TextUtils-Light Mode";  //jab ham light Mode enable karenge toh title bhi "TextUtils-Light Mode" change hoga.
    }
  }
  return (
    <>
    <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode = {toggleMode} /> 
    {/*yaha ham ne ek java class {mode} ka use kiya h jise ham  Navvar.js file me ek {props.mode} ke isme use karenge. our {toggleMode} function ka bhi used karenge Switch ke liye*/}
    {/* <Navbar/> ye default propType ke liye */}
    <Alert alert = {alert} />
    <div className='container my-2'>  {/*my-3 ka used hamne Top and Bottom me space dene ke liye kiya h*/}
   <TextForm showAlert={showAlert} heading ="Enter the text to analyze below" mode={mode} />
    </div>
    </>

  );
}

export default App;


