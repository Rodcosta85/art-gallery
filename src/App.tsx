import { BrowserRouter } from "react-router-dom";
import AppRoutes from './AppRoutes';
import { SlideshowProvider } from "./Context";

function App() {
  return (
    <BrowserRouter>
      <SlideshowProvider>
        <AppRoutes />
      </SlideshowProvider>
    </BrowserRouter>
  )
}

export default App
