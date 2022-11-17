import { encode } from 'ts-steganography';
import { encrypt } from '../utils/crypto';

let imageUri = '';

export const saveUri =
  (submitButton: HTMLButtonElement, imageDist: HTMLImageElement) =>
  (event: Event) => {
    const fileReader = new FileReader();

    fileReader.onload = (event) => {
      submitButton.disabled = imageUri.trim() === '';

      if (!event.target || !event.target.result) return;

      imageUri = event.target.result as string;
      imageDist.src = imageUri;

      submitButton.disabled = imageUri.trim() === '';
    };

    fileReader.readAsDataURL((event.target as HTMLInputElement).files![0]!);
  };

export const embedMessage = async (
  textInput: HTMLTextAreaElement,
  imageDist: HTMLImageElement
) => {
  let message = textInput.value;

  if (!message.length) message = 'Aku Cinta Stegano';
  message = encrypt(message);

  imageDist.src = await encode(message, imageUri);
};
