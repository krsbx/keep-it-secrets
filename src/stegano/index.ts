import { embedMessage as _embedMessage } from './embedMessage';
import { extractMessage as _extractMessage } from './extractMessage';

export const embedMessage = (
  textInput: HTMLInputElement,
  imageDist: HTMLImageElement,
  imageInput: HTMLInputElement
) => {
  imageInput.addEventListener(
    'change',
    _embedMessage(textInput, imageDist),
    false
  );
};

export const extractMessage = (imageInput: HTMLInputElement) => {
  imageInput.addEventListener('change', _extractMessage);
};
