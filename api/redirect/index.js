module.exports = async function (context, req) {
    const status = req.query.status || 301;
    
    context.res = {
        status,
        headers: {
            location: "/"
        }
    }
}
