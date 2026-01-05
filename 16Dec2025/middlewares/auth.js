let authMiddleware = (req,res,next)=>{
              //L=R
  console.log(req.query.name);
  //object.newProperty

  //

  req.xyz = 'Rakesh';
  next(); //always call the next method in the middleware function
}


exports.module = { authMiddleware: authMiddleware }