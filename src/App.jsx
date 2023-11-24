import "./App.scss";
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
import Image from "./components/Image/Image";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DesignAdmin from "./pages/DesignAdmin/DesignAdmin";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/design_admin' element={<DesignAdmin />} />
				<Route path='/' element={
					<div className='container'>
						<div className='text-group'>
							<Header />
							<Contact />
						</div>
						<Image />
					</div>
				} />
				<Route path='*' element={
					<div className='container'>
						<div className='text-group'>
							<Header />
							<Contact />
						</div>
						<Image />
					</div>
				} />
			</Routes></BrowserRouter>

	);
}

export default App;
