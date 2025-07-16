const middleware = (req,res,nex) =>{
    return (req,res,next)=>{
        console.log(`RequestTime: ${new Date()}, Method: ${req.method}, URL: ${req.originalUrl}`)
        next()
    }
}
module.exports = middleware