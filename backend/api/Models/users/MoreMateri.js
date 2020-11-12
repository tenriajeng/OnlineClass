const db = require("../../../config/db.js");

module.exports = {
	showAllMoreMateri: (id) => {
		return new Promise((resolve, reject) => {
			db.query(`SELECT materis.* FROM materis WHERE materis.kelas_id =${id}`, (err, response) => {
				if (!err) {
					resolve(response);
				} else {
					reject(err);
				}
			});
		});
	},
};
