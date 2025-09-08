import React, { useState } from "react";

interface PreviewImage {
  file: File | null;
  previewUrl: string | null;
}

const ItemImageUploader: React.FC = () => {
  // 5개의 이미지 슬롯을 미리 준비
  const [images, setImages] = useState<PreviewImage[]>(
    Array.from({ length: 5 }, () => ({ file: null, previewUrl: null }))
  );

  /** 파일 선택 시 실행 */
  const handleFileChange = (index: number, file: File | null) => {
    if (!file) return;

    const newImages = [...images];
    newImages[index] = {
      file,
      previewUrl: URL.createObjectURL(file),
    };
    setImages(newImages);
  };

  /** 드래그 앤 드롭 */
  const handleDrop = (index: number, e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileChange(index, file);
    }
  };

  return (
    <div className="space-y-3">
      {images.map((image, index) => (
        <div key={index} className="drop-zone-container">
          <div
            className="drop-zone border border-dashed rounded p-4 text-center cursor-pointer"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(index, e)}
            onClick={() => document.getElementById(`file-input-${index}`)?.click()}
          >
            {image.previewUrl ? (
              <img
                src={image.previewUrl}
                alt={`상품이미지 ${index + 1}`}
                className="preview-img w-32 h-32 object-cover mx-auto"
              />
            ) : (
              <span>등록된 이미지가 없습니다. 이미지를 업로드하거나 여기에 드래그하세요</span>
            )}
          </div>
          <input
            id={`file-input-${index}`}
            type="file"
            className="hidden"
            accept="image/*"
            onChange={(e) =>
              handleFileChange(index, e.target.files ? e.target.files[0] : null)
            }
          />
        </div>
      ))}
    </div>
  );
};

export default ItemImageUploader;
