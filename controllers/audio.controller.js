
const { uploadFiletoS3 } = require('../services/audio.service')

const upload = async (req, res) => {
    const { body: { email } } = req;
    await uploadFiletoS3(email);
    res.status(200).json("Audio is under processing")

}


module.exports = {
    upload
}