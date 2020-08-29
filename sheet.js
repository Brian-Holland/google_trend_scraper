const { GoogleSpreadsheet } = require('google-spreadsheet');

module.exports = class Sheet {
	constructor() {
		this.doc = new GoogleSpreadsheet('1iC97cOlGAdVSOdXlcyZj7I0_jijt85QVsYtNv7DT3BY');
	}

	async load() {
		//load credentials for api access from json file
		await this.doc.useServiceAccountAuth(require('./credentials.json'));

		// load document properties and worksheets
		await this.doc.loadInfo();
		console.log(this.doc.title);
	}

	async addRows(rows) {
		const sheet = this.doc.sheetsByIndex[0];

		await sheet.addRows(rows);
	}
};
