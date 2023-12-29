import { useState } from "react";
import axios from "axios";

export default function ImagePreview(props) {
  const [file, setFile] = useState(props.file);
  console.log(file);
  async function uploadImage() {
    const form = new FormData();
    form.append("image", file, file.name);
    axios.post(props.url, form);
  }
  return (
    <div>
      <input
        filename={file}
        onChange={(e) => setFile(e.target.files[0])}
        type="file"
        accept="image/*"
      />
      <button onClick={uploadImage}>upload</button>
    </div>
  );
}
