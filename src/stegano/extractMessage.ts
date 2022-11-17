import { decrypt } from '../utils/crypto';

export const extractMessage = (event: Event) => {
  const fileReader = new FileReader();

  fileReader.onload = (event) => {
    const decrypted = decrypt(steg.decode(event.target!.result as string));
  };
  fileReader.readAsDataURL((event.target as HTMLInputElement).files![0]!);
};
