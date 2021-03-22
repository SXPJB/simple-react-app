import FormMascotas from "./Components/FormMascotas";
import Grid from "./Components/Grid";

function App() {

  const headers=['id','Name', 'Parental Surname', 'Marternal Surname','Actions']

  return (
    <>
      <FormMascotas/>
      <Grid headers={headers}/>
    </>
  );
}

export default App;
