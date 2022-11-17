import { encrypt } from '../utils/crypto';

export const embedMessage =
  (textInput: HTMLInputElement, imageDist: HTMLImageElement) =>
  (event: Event) => {
    const fileReader = new FileReader();

    fileReader.onload = (event) => {
      let message = textInput.value;

      if (!message.length) message = 'Aku Cinta Stegano';
      message = encrypt(message);

      imageDist.src = steg.encode(message, event.target!.result as string);
    };

    fileReader.readAsDataURL((event.target as HTMLInputElement).files![0]!);
  };
