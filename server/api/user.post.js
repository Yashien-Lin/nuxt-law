// export default defineEventHandler(async (event) => {
//   const { body } = await readBody(event)
//   const { name, email, password } = body

//   // TODO: validate input
//   // TODO: hash password

//   // TODO: save user to database

//   return {
//     name,
//     email,
//     password,
//   }
// })

export default defineEventHandler(async event => {
  const body = await readBody(event);
  return { ...body };
});