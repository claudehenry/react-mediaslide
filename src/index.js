import MediaSlide from './MediaSlide';
import { version as v } from '../package.json';
const version = v;
const getVersion = () => {
	return version;
};
export { MediaSlide, version, getVersion };
