module.exports = {
    resUser: (res, response, status) => {
        const form = {
            status, // status: status
            response,
        };
        res.json(form);
    },
};
