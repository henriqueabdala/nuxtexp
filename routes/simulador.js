const app = require('express')
const router = app.Router();

const alfarequest = require('../service/fep.js');


const mock = {
    get: {
        "comGarantia": {
            "habilitado": true,
            "parcelas": [12, 24, 36, 48],
            "valorMin": 10.000,
            "valorMax": 70.000,
            "finalidades": [
                {
                    "labelName": "Dividas",
                    "value": "0"
                },
                {
                    "labelName": "Comércio",
                    "value": "1"
                },
                {
                    "labelName": "Viagem",
                    "value": "2"
                },
                {
                    "labelName": "Separação",
                    "value": "3"
                },
                {
                    "labelName": "Tratamento",
                    "value": "4"
                },
                {
                    "labelName": "Truco",
                    "value": "5"
                }
            ],
            "comoSoube": [
                {
                    "labelName": "Google",
                    "value": "0"
                },
                {
                    "labelName": "Anúncio",
                    "value": "1"
                },
                {
                    "labelName": "Outros",
                    "value": "3"
                }
            ]
        },
        "semGarantia":{
            "habilitado": false,
            "parcelas": [12, 24, 36, 48],
            "valorMin": 10.000,
            "valorMax": 70.000,
            "finalidades": [
                {
                    "labelName": "Dividas",
                    "value": "0"
                },
                {
                    "labelName": "Comércio",
                    "value": "1"
                },
                {
                    "labelName": "Viagem",
                    "value": "2"
                },
                {
                    "labelName": "Separação",
                    "value": "3"
                },
                {
                    "labelName": "Tratamento",
                    "value": "4"
                },
                {
                    "labelName": "Truco",
                    "value": "5"
                }
            ],
            "comoSoube": [
                {
                    "labelName": "Google",
                    "value": "0"
                },
                {
                    "labelName": "Anúncio",
                    "value": "1"
                },
                {
                    "labelName": "Outros",
                    "value": "3"
                }
            ]
        }
    },
    post: {
        "response": {
            "e-mail": "te******@g****.com",
        }
    }
}

// GET
router.get('/', (req, res) => {
    // alfarequest.montarSimulador()
    // .then(r => r.json())
    // .then(r => {
    //     console.log(r)
    //     res.send(r)
    // })
    // .catch(e => res.send(e))
    res.send(mock.get);
});



// Export Router API
module.exports = router;


