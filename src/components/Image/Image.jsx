import "./Image.scss";
import constructionImage from "../../assets/nicholas_construction_crop_small.jpg";

export default function Image() {
	return (
		<div className='image'>
			<img
				src={constructionImage}
				alt='Nicholas Kunz'
				className='image__photo'
			/>
		</div>
	);
}
