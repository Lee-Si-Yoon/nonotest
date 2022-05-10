import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./Routes/Start";

function Router() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Start />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
