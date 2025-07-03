import axios from "axios";

export default async function imgUpload(file, authParams) {
  const imgToUpload = new FormData();
  imgToUpload.append("file", file);
  imgToUpload.append("fileName", file.name);
  imgToUpload.append("publicKey", "public_lcW+7B/5mTdUxhVC22yOWCbkBZk=");
  imgToUpload.append("signature", authParams.signature);
  imgToUpload.append("expire", authParams.expire);
  imgToUpload.append("token", authParams.token);

  const res = await axios.post(
    "https://upload.imagekit.io/api/v1/files/upload",
    imgToUpload
  );
  const imgUrl = res.data.url;

  return imgUrl;
}
