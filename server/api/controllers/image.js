const my_helpper = require('./../../helpers/my_hepper');
const fs = require('fs');
module.exports = {
    uploadOne: (req, res, next) => {
        let formiable = require('formidable');
        const form = new formiable.IncomingForm();
        form.uploadDir = "./uploads";
        form.keepExtensions = true;
        form.maxFieldsSize = 10 * 1024 * 1024;
        form.parse(req, (err, fields, file) => {
            if (err) {
                my_helpper.failJson(500, res, err);
            } else {
                let inputFile = file["avatar"];
                if (typeof (inputFile) == "object") {
                    let fileName = inputFile.path.split('\\')[1];
                    const serverName = require('os').hostname();
                    const serverPort = 3000;
                    let fileLink = `${serverName}:${serverPort}/image/avatar?image_name=${fileName}`;
                    my_helpper.successJson(200, res, fileLink);
                } else {
                    my_helpper.failJson(500, res, "no image", "No image to upload !");
                }
            }
        });
    },
    getOne: (req, res, next) => {
        let imageName = 'uploads/' + req.query.image_name;
        fs.readFile(imageName, (err, imageData) => {
            if (err) {
                my_helpper.failJson(500, res, err);
            } else {
                res.writeHead(200, { 'Content-Type': 'image/jpeg' });
                res.end(imageData);
            }
        });
    }
}