declare const steg: {
  decode: (imageUri: string | ArrayBuffer) => string;
  encode: (message: string, imageUri: string | ArrayBuffer) => string;
};
