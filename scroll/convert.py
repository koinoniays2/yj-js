import cv2
video_path = "movies/movies.mp4"
cap = cv2.VideoCapture(video_path)
frame_count = 0
while True:
    ret, frame = cap.read()
    if not ret:
        break
    frame_filename = f'images/frame_{frame_count}.jpg'
    cv2.imwrite(frame_filename, frame)
    frame_count += 1
cap.release()
print(f'{frame_count}개의 프레임을 추출하여 저장했습니다.')