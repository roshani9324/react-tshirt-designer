import { useState } from "react";

export default function ImageUpload() {
  const [image, setImage] = useState("/default.jpg");

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    readFile(file);
  };

  const readFile = (file) => {
    const reader = new FileReader();
    reader.onload = () => setImage(reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center gap-6 p-4">
      <div className="w-full lg:w-1/3 border-2 border-blue-200 rounded-xl overflow-hidden shadow-md transition hover:shadow-lg">
        <img
          src={image}
          className="w-full h-full object-contain p-2 bg-white"
          alt="T-shirt Print"
        />
      </div>

      <div
        className="w-full lg:w-1/3 p-6 border-2 border-dashed border-blue-300 rounded-lg text-center hover:bg-blue-50 transition"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <input
          type="file"
          onChange={(e) => readFile(e.target.files[0])}
          className="block mx-auto my-2"
        />
        <p className="text-sm text-gray-600">Drag & drop an image</p>
        <img
          src={image}
          className="mt-4 w-full h-24 object-contain rounded shadow"
        />
      </div>
    </div>
  );
}
