import MediaSlide from './MediaSlide';
import { version as v } from '../package.json';
const version = v;
/**
 * @description Returns a pre-defined variable named `version`, which is assumed to
 * hold the current software version number or other identifying information. The
 * function can be called elsewhere in the code without modifying the `version`
 * variable directly.
 *
 * @returns {string} A pre-defined constant named `version`.
 */
const getVersion = () => {
	return version;
};
export { MediaSlide, version, getVersion };
