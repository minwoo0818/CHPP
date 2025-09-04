

// export default function Board ()
// {
//           return (
//               <>
//               <div></div>
//               </>
//           )
// }

import React from 'react';

// 포스트 컴포넌트의 props를 TypeScript로 정의합니다.
interface BoardProps {
  title: string;
  content: string;
  imageSrc?: string;
  imageAlt?: string;
}

const Board: React.FC<BoardProps> = ({ title, content, imageSrc, imageAlt }) => {
  return (
    <div style={{
      width: '600px',
      margin: '20px auto',
      padding: '15px',
      border: '1px solid #c0c0c0',
      boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
      backgroundColor: '#f0f0f0',
      fontFamily: 'Malgun Gothic, Dotum, sans-serif',
    }}>
      <h2 style={{ margin: '0 0 10px 0' }}>{title}</h2>
      <hr style={{ border: '1px dashed #a0a0a0', margin: '10px 0' }} />
      <p style={{ lineHeight: '1.6' }}>{content}</p>
      {imageSrc && (
        <img
          src={imageSrc}
          alt={imageAlt || 'post image'}
          style={{ width: '100%', display: 'block', marginTop: '15px' }}
        />
      )}
    </div>
  );
};

export default Board;