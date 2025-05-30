import { BrowserRouter, Routes, Route } from "react-router";

import "./assets/css/App.css";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AbousUsPage";
import Articles from "./pages/Articles";
import DefaultLayout from "./layouts/DefaultLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/articles" element={<Articles />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
