from PIL import Image
import sys

def check_image(path):
    try:
        img = Image.open(path)
        img.verify()
        print(f"{path}: Valid")
    except Exception as e:
        print(f"{path}: Invalid - {e}")

check_image('public/josep-pique.jpg')
check_image('public/mariano-roman.jpg')
