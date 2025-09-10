import os

# 이미지들이 들어 있는 폴더 경로
folder_path = r"C:\CHPP\images"

# 이미지 확장자들
extensions = ('.png', '.jpg', '.jpeg', '.gif', '.bmp', '.webp')

# 해당 폴더 안의 파일 중 이미지 확장자만 필터링
image_files = [f for f in os.listdir(folder_path) if f.lower().endswith(extensions)]

print(image_files)
