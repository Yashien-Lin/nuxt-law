import Team from '@/server/models/teamModels';

export default defineEventHandler(async (event) => {
    const method = event.method;

    if (method !== 'DELETE') {
      return sendError(event, createError({ statusCode: 405, statusMessage: 'Method Not Allowed' }));
    }
  
    // 獲取動態路由參數 (例如 id)
    const id = event.context.params?.id;
  
    if (!id) {
      return sendError(event, createError({ statusCode: 400, statusMessage: 'Bad Request: Missing ID' }));
    }
  
    try {
      const deletedTeam = await Team.findByIdAndDelete(id);
      console.log(`deletedTeam: ${deletedTeam}`)
  
      if (!deletedTeam) {
        return sendError(event, createError({ statusCode: 404, statusMessage: 'Team Not Found' }));
      }
      const team = await Team.find();
      console.log(`team: ${team}`)
  
      return {
        success: true,
        message: `Team with ID ${id} has been deleted.`,
        data: team
      };
    } catch (error) {
      console.error('Error deleting item:', error);
      return sendError(event, createError({ statusCode: 500, statusMessage: 'Internal Server Error' }));
    }
});


