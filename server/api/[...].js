export default defineEventHandler(() => {
  // 處理任何路由程序都不匹配的所有請求
  throw createError({
    statusCode: 404,
    statusMessage: 'API path not found'
  })
})