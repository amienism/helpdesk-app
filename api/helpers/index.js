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

    generateString(length) {
        let result = '';
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
    
        return result;
    }
};