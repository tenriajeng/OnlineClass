module.exports = {
  resAllUser: (res, response, status) => {
    const form = {
      status, // status: status
      response,
    };
    res.json(form);
  },
};
