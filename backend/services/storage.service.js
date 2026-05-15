import ImageKit from "imagekit";

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PVT_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

const uploadFile = async (file) => {
  try {
    const result = await imagekit.upload({
      file: file.buffer, 
      fileName: Date.now() + "-" + file.originalname,
      folder: "blogs",
    });

    return result.url;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default uploadFile;