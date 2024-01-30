import WelcomeMessage from"./components/Welcome";
import StudentInfo from"./components/Studentinfo";
function App() {
  return (
    <div className="App">
      <div class="container-fluid">
        <WelcomeMessage/>
        <StudentInfo/>
      </div>
    </div>
  );
}
export default App;
