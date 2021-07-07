export const logger = function(req, res, next){
  console.log("Service: " , req?.url);
  console.log("query params: " , req?.query);
  console.log("body: " , req?.body);
  next();
}
