const text = "Lorem Ipsum is simply dummy babulakter_fsd154@gmail.com text of the printing and typesetting industry. monirhossain6163@anything.cc Lorem Ipsum has been the industry's standard dummy text ever since the babulakterfsd154@gmail.com 1500s";

const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
const emails = text.match(emailRegex);

console.log(emails);