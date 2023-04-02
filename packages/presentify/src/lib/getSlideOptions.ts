import { parseOptions } from './parseOptions';
import { Options, Slide } from '../types/types';

export const getSlideOptions = ({ slides }: { slides: Slide[] }) => {
  const optionsRegex = new RegExp('^([+]{3})(.*)([+]{3})$', 'gs');
  const options: Options[] = [];
  const slidesWithoutOptions = slides.map((elements, slideNumber) => {
    return elements
      .map(element => {
        const { type, props } = element;
        if (
          type === 'p' &&
          typeof props.children === 'string' &&
          optionsRegex.test(props.children.toString())
        ) {
          options.push({ slideNumber, options: props.children.toString() });
          return null;
        }
        return element;
      })
      .filter(slide => slide);
  });

  const parsedOptions = parseOptions({ options });

  return { slidesWithoutOptions, options: parsedOptions };
};
