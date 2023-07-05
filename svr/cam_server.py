from flask import Flask, request, Response
import requests
import cv2

app = Flask(__name__)

@app.route('/stream', methods=['GET'])
def stream():
    # Get the video stream from the RTSP server
    #rtsp_url = request.form.get('url')
    cap = cv2.VideoCapture('rtsp://admin:Londeka123@192.168.15.198:554/live')

    def generate_frames():
        while True:
            success, frame = cap.read()
            if not success:
                break
            # Resize the frame to 640x480
            frame = cv2.resize(frame, (380, 180))

            # Encode the resized frame as JPEG
            ret, buffer = cv2.imencode('.jpg', frame)
            frame = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

    return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
