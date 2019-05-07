const jsonHelpper = require('./../../helpers/jsonHelpper');
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
                jsonHelpper.failJson(500, res, err);
            } else {
                let inputFile = file["avatar"];
                if (typeof (inputFile) == "object") {
                    let fileName = inputFile.path.split('\\')[1];
                    const serverName = require('os').hostname();
                    const serverPort = 4000;
                    let fileLink = `${serverName}:${serverPort}/image/avatar?image_name=${fileName}`;
                    jsonHelpper.successJson(200, res, fileLink);
                } else {
                    jsonHelpper.failJson(500, res, "no image", "No image to upload !");
                }
            }
        });
    },
    getOne: (req, res, next) => {
        let imageName = 'uploads/' + req.query.image_name;
        fs.readFile(imageName, (err, imageData) => {
            if (err) {
                jsonHelpper.failJson(500, res, err);
            } else {
                res.writeHead(200, { 'Content-Type': 'image/jpeg' });
                res.end(imageData);
            }
        });
    }
}