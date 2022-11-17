import { embedMessage, extractMessage } from './stegano';

embedMessage(
  document.querySelector<HTMLButtonElement>('#encryptMe')!,
  document.querySelector<HTMLTextAreaElement>('#messageInput')!,
  document.querySelector<HTMLImageElement>('#encryptedImage')!,
  document.querySelector<HTMLInputElement>('#imageInputEncrypt')!
);

extractMessage(
  document.querySelector<HTMLButtonElement>('#decryptMe')!,
  document.querySelector<HTMLInputElement>('#decryptedMessage')!,
  document.querySelector<HTMLInputElement>('#imageInputDecrypt')!
);
