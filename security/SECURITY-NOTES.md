# Security framework – giai đoạn phát triển
- Không thu thập mật khẩu, OTP, CCCD, dữ liệu ngân hàng hoặc dữ liệu thật.
- Không thanh toán thật, không đăng nhập thật.
- Không gọi API/URL bên ngoài từ HTML/JS.
- Không đưa secret/token vào repository.
- Kill switch nằm tại `security/emergency.json`.
- Giai đoạn phát triển: chưa bật branch protection bắt buộc để dễ chỉnh nội dung.
- Khi hoàn thiện: bật PR, Security Check, chống force-push/xóa main và phát hành bản sạch để rollback.
- Không tuyên bố hệ thống “không thể bị tấn công”; chỉ công bố các biện pháp kiểm soát thực tế.
