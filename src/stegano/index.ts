import {
  embedMessage as _embedMessage,
  saveUri as _saveUri,
} from './embedMessage';
import { extractMessage as _extractMessage } from './extractMessage';

export const embedMessage = (
  submitButton: HTMLButtonElement,
  textInput: HTMLTextAreaElement,
  imageDist: HTMLImageElement,
  imageInput: HTMLInputElement
) => {
  imageInput.addEventListener(
    'change',
    _saveUri(submitButton, imageDist),
    false
  );

  submitButton.addEventListener(
    'click',
    () => _embedMessage(textInput, imageDist),
    false
  );
};

export const extractMessage = (
  submitButton: HTMLButtonElement,
  messageField: HTMLParagraphElement,
  imageInput: HTMLInputElement
) => {
  imageInput.addEventListener(
    'change',
    _extractMessage(submitButton, messageField)
  );
};
