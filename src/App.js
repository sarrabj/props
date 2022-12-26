
import  Profile  from "./Profile/Profile";

function App() {
  
  const fullName= "Sarra"
  const bio="Licence en Mkg / Master en Entrepreneuriat / Etudiante FullStack "
  const profession="étudiante"
  const handleName=()=>{alert(fullName)}
  return (
    <div className="App" style={{textAlign: "center"}}>
      
      <Profile  
      fullName= {fullName}
      bio={bio} 
      profession={profession}
      handleName={handleName}
      ></Profile>
      

    </div>
  );
}

export default App;
