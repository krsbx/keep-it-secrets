import { embedMessage, onImageChange } from './embedMessage';
import { extractMessage } from './extractMessage';

export const embedMessageHandler = (
  submitButton: HTMLButtonElement,
  textInput: HTMLTextAreaElement,
  imageDist: HTMLImageElement,
  imageInput: HTMLInputElement
) => {
  imageInput.addEventListener(
    'change',
    onImageChange(submitButton, imageDist),
    false
  );

  submitButton.addEventListener(
    'click',
    () => embedMessage(textInput, imageDist),
    false
  );
};

export const extractMessageHandler = (
  submitButton: HTMLButtonElement,
  messageField: HTMLParagraphElement,
  imageInput: HTMLInputElement
) => {
  imageInput.addEventListener(
    'change',
    extractMessage(submitButton, messageField)
  );
};
