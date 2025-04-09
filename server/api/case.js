import { MongoClient } from 'mongodb';

// MongoDB Atlas 連接字串，請替換 <username> 和 <password>
const uri = useRuntimeConfig().mongodbUri;

// 建立 MongoClient 實例
const client = new MongoClient(uri);

export default defineEventHandler(async (event) => {
  try {
    // 連接 MongoDB Atlas
    await client.connect();
    const database = client.db('nuxt_app_law'); // 替換為你的資料庫名稱
    const collection = database.collection('cases'); // 替換為你的集合名稱

    // 查詢資料
    const query = {}; // 可根據需求修改查詢條件
    const data = await collection.find(query).toArray();

    // 返回 JSON 格式資料
    // console.log('MongoDB 查詢結果:', data);
    return { success: true, data };
    
  } catch (error) {
    console.error('MongoDB 查詢錯誤:', error);
    return { success: false, error: error.message };
  } finally {
    // 不關閉連接，使用全域連接以節省資源
    // await client.close();  // 如果需要每次都斷開連接，可以解除註解
  }
});
