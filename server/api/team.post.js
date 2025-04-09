import Team from '@/server/models/teamModels';

export default defineEventHandler(async (event) => {
  try {
    const { _id, image, name, experiences, fields } = await readBody(event);
    // 查詢Team資料
    // const team = await Team.find({});
    // 新增一筆Team資料
    console.log(`id: ${_id}, name: ${name}, experiences: ${experiences}, fields: ${fields}`);

    await Team.create({ _id, image, name, experiences, fields });
    // 查詢該筆資料
    const team = await Team.find({});
    console.log(`新增成功: id: ${_id}, name: ${name}, event: ${event}`);
    console.log(`新增成功 - team: ${team}`);

    return team;
  } catch (error) {
    return createError(error);
  }
});