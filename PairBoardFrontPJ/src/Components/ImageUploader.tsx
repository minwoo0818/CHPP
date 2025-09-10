import React, { useEffect, useState } from "react";
import { UploadImage } from "../api/CategoryApi";
import type { Board_Type } from "../type";

interface PreviewImage {
  file: File | null;
  previewUrl: string | null;
}

type BoardProps = {
    BoardData: Board_Type;
    loadBoardData: () => void;
}

const ItemImageUploader: React.FC<BoardProps> = ({BoardData,loadBoardData}) => {
  // 5개의 이미지 슬롯을 미리 준비
  const [images, setImages] = useState<PreviewImage[]>(
    Array.from({ length: 1 }, () => ({ file: null, previewUrl: null }))
  );

  useEffect(() => {
    if (BoardData?.pictureUrl) {
      // ✅ 단일 이미지라면 첫 번째 슬롯에만 반영
      setImages((prev) => {
        const newImages = [...prev];
        newImages[0] = {
          file: null, // 서버에서 온 건 File 객체가 아님
          previewUrl: BoardData.pictureUrl.startsWith("http")
            ? BoardData.pictureUrl
            : `${import.meta.env.VITE_API_URL}${BoardData.pictureUrl}`, // 상대경로면 BASE_URL 붙여줌
        };
        return newImages;
      });
    }
        // 만약 BoardData가 여러 장 이미지를 가진다면 (예: BoardData.images: string[])
    // setImages(BoardData.images.map(url => ({ file: null, previewUrl: url })));
  }, [BoardData]);

  /** 파일 선택 시 실행 */
  const handleFileChange = async (index: number, file: File | null) => {
  if (!file) return;

  try {
    const uploadedUrl = await UploadImage(file);

    const newImages = [...images];
    newImages[index] = {
      file,
      previewUrl: uploadedUrl, // 서버 URL로 교체
    };
    setImages(newImages);

    // DB 저장용으로 BoardData.pictureUrl 반영
    BoardData.pictureUrl = uploadedUrl;
  } catch (error) {
    console.error("이미지 업로드 중 오류:", error);
  }
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
                sizes="80%"
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
