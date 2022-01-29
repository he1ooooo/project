import Login from "./pages/login";
import { Routes, Route } from "react-router-dom";
import Sign from "./pages/burt";
import Default from "./pages/default";
import Bogins from "./pages/boginsgoson";
import { NevtrehContextPorvider } from "./constext/nevtreh";
function App() {
  return (
    <NevtrehContextPorvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Sign />}/>
        <Route path="/" element={<Default/>}/>
        <Route path="/bogins" element={<Bogins/>}/>
      </Routes>
    </NevtrehContextPorvider>
  );
}

export default App;
