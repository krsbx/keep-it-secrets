import { embedMessageHandler, extractMessageHandler } from './stegano';

// Encryptor Handler
embedMessageHandler(
  document.querySelector<HTMLButtonElement>('#encryptMe')!,
  document.querySelector<HTMLTextAreaElement>('#messageInput')!,
  document.querySelector<HTMLImageElement>('#encryptedImage')!,
  document.querySelector<HTMLInputElement>('#imageInputEncrypt')!
);

// Decryptor Handler
extractMessageHandler(
  document.querySelector<HTMLButtonElement>('#decryptMe')!,
  document.querySelector<HTMLInputElement>('#decryptedMessage')!,
  document.querySelector<HTMLInputElement>('#imageInputDecrypt')!
);

// Animation Handler
[
  document.querySelector('#encryptDiv')! as HTMLDivElement,
  document.querySelector('#decryptDiv')! as HTMLDivElement,
].forEach((value, key, values) => {
  const nextEl = key === 0 ? values[1] : values[0];

  value.addEventListener('mouseenter', () => {
    nextEl.style.opacity = '0.5';
  });

  value.addEventListener('mouseleave', () => {
    nextEl.style.opacity = '1';
  });

  value.style.transition = 'all ease-in-out 300ms';
});
