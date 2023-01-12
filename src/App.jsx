import { Routes, Route, Navigate } from "react-router-dom";
import { Auth,Dashboard } from "@/layouts";
import {setAuthToken} from './pages/auth/setAuthToken'

function App() {
  const token = localStorage.getItem("token");
  if (token) {
      setAuthToken(token);
     var value=1;
  }
  else{
    var value=0;
  }
  console.log(value)
  return (
    <Routes>
      <Route path="/auth/*"  element={value ? <Navigate to="/dashboard/home" replace />: <Auth />} />
      <Route path="/dashboard/*"   element={value ? <Dashboard  />:<Navigate to="/auth/sign-in" replace /> } />
      <Route path="*" element={<Navigate to="/auth/sign-in" replace />} />
    </Routes>
  );
}

export default App;
