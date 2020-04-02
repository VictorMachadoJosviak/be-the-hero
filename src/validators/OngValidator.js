const { Segments,Joi } = require('celebrate')

function ongValidator(){
    return {
        [Segments.BODY] : Joi.object().keys({
            name:Joi.string().required(),
            email: Joi.string().required().email(),
            whatsapp: Joi.number().required().min(10).max(11),
            city: Joi.string().required(),
            uf: Joi.string().required().length(2)
        })
    }
}

module.exports = ongValidator