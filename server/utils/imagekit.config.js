import dotenv from "dotenv";
dotenv.config({
  path: ".env",
});

import ImageKit from "imagekit";

const imagekit = new ImageKit({
  publicKey: process.env.PUBLIC_KEY,
  privateKey: processe.env.PRIVATE_KEY,
  urlEndpoint: process.env.URL_ENDPOINT,
});

export const uploadHelper = async ({ file, filename }) => {
  try {
    const { token, expire, signature } =
      await imagekit.getAuthenticationParameters();

    const fileUploaderInfo = await imagekit.upload({
      file: file,
      fileName: filename,
      token: token,
      signature: signature,
      expire: expire,
    });
    return fileUploaderInfo.url;
  } catch (error) {
    console.log(error);
  }
};
