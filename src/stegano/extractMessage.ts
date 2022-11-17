import { decrypt } from '../utils/crypto';

export const extractMessage =
  (submitButton: HTMLButtonElement, messageField: HTMLParagraphElement) =>
  (event: Event) => {
    const fileReader = new FileReader();

    fileReader.onload = (event) => {
      submitButton.disabled = !event.target?.result;

      if (!event.target || !event.target.result) return;

      const decrypted = decrypt(steg.decode(event.target.result as string));

      messageField.textContent = decrypted;

      submitButton.disabled = !event.target.result;
    };
    fileReader.readAsDataURL((event.target as HTMLInputElement).files![0]!);
  };
