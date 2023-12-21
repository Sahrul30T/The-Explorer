import React, { useState, useEffect } from "react";
import Modal from "react-modal";

const FileUploader = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const fileContent = event.target.result;

      // Tambahkan logika unggah file sesuai kebutuhan di sini
      console.log("File Content:", fileContent);

      closeModal();
    };

    reader.readAsText(file);
  };

  const modalStyle = {
    content: {
      width: "300px",
      height: "300px",
      margin: "auto",
      overflow: "hidden",
    },
  };

  return (
    <div>
      <button onClick={openModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Unggah File
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyle}
        contentLabel="Example Modal"
      >
        <div className="p-8 border-dashed border-2 border-gray-300">
          <input type="file" onChange={handleFileChange} />
          <p className="text-gray-600">Pilih File Untuk Dikirim</p>
          <button
            onClick={closeModal}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Unggah
          </button>
        </div>
        <button
          onClick={closeModal}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Kembali
        </button>
      </Modal>
    </div>
  );
};

export default FileUploader;
