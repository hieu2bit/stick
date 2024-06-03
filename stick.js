const puppeteer = require('puppeteer');

(async () => {
  // Khởi tạo trình duyệt và trang
  const browser = await puppeteer.launch({ headless: false }); // headless: false để thấy trình duyệt
  const page = await browser.newPage();
  
  // Đi đến trang web cần click chuột
  await page.goto('https://example.com');

  // Chờ cho đến khi hình ảnh được tải
  await page.waitForSelector('img#target-image'); // Thay 'img#target-image' bằng selector của hình ảnh

  // Click vào hình ảnh
  await page.click('img#target-image'); // Thay 'img#target-image' bằng selector của hình ảnh

  // Đóng trình duyệt
  await browser.close();
})();
