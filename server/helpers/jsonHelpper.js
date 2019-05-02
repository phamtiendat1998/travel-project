module.exports = {
    // Fail Json Response
    failJson: (status, res, err, mess = null) => {
        return res.status(status).json({
            succes: false,
            err: err,
            message: mess
        });
    },
    // Success Json Response
    successJson: (status, res, data, mess = null) => {
        return res.status(status).json({
            succes: true,
            data: data,
            message: mess
        });
    }
};