import "./App.scss";
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
import Image from "./components/Image/Image";

function App() {
	return (
		<div className='container'>
			<div className='text-group'>
				<Header />
				<Contact />
			</div>
			<Image />
		</div>
	);
}

export default App;
