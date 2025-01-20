export default defineEventHandler((event) => {
  console.log(`middleware發出請求：${getRequestURL(event)}`);
});