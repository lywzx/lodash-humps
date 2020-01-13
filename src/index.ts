import { camelCase } from 'lodash/fp';
import ch from './createHumps';
// Only export the one default. Be friendly to CommonJS.
export default ch(camelCase);
export const createHumps = ch;
