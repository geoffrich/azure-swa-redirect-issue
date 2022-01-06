module.exports = async function (context, req) {
    context.res = {
        status: 301,
        headers: {
            location: "/"
        }
    }
}
