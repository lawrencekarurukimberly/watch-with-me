import qrcode

# Your Google Drive URL
url = "https://watch-with-me-two.vercel.app/"

# Create a QR code
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10,
    border=4,
)
qr.add_data(url)
qr.make(fit=True)

# Generate and save the image
img = qr.make_image(fill="black", back_color="white")
img.save("qr_code.png")

print("QR Code generated and saved as 'qr_code.png'")