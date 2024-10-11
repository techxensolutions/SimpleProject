import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import PhoneNumber from "./pages/PhoneNumber";
import FullName from "./pages/FullName";
import Signup from "./pages/Signup";
import VerifyPhone from "./pages/VerifyPhone";
import BillingAddress from "./pages/BillingAddress";
import PaymentMethod from "./pages/PaymentMethod";
import Congrats from "./pages/Congrats";
import { FormProvider } from "./context/FormContext";

function App() {
  return (
    <FormProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/phone" element={<PhoneNumber />} />
            <Route path="/name" element={<FullName />} />
            <Route path="/verifyPhone" element={<VerifyPhone />} />
            <Route path="/billingAddress" element={<BillingAddress />} />
            <Route path="/paymentMethod" element={<PaymentMethod />} />
            <Route path="/congrats" element={<Congrats />} />
          </Routes>
        </div>
      </Router>
    </FormProvider>
  );
}

export default App;
