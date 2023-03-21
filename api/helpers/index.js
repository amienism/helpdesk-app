module.exports = {
    rest_ok(messages, data){
        return {
            status: 'OK',
            messages: messages,
            data: data
        }
    },

    rest_error(messages, data){
        return {
            status: "ERROR",
            messages: messages,
            data: data,
        }
    },


};