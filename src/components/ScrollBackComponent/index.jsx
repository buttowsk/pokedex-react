import { Scroll, ArrowUp } from './styles.js';
import ScrollToTop from "react-scroll-to-top";


export const ScrollBackComponent = () => {
	return (
			<Scroll smooth component={ <ArrowUp/> }/>
	)
}