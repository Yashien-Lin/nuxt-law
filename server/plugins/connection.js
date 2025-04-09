import mongoose from 'mongoose';

export default defineNitroPlugin(async (nitroApp) => {
  console.log('Nitro plugin:', nitroApp);

  const uri = useRuntimeConfig().mongodbUri;
  try {
    await mongoose.connect(uri);
    console.log('DB 連線成功');
  } catch (err) {
    console.error('DB 連線失敗', err);
  }
});