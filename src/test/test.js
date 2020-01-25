const axios = require('axios');
const endpoint = 'http://localhost:5000/api/text';

describe('Pruebas ejecutadas con Jest', () => {
    // Prueba #1 - Caso exitoso
    test('El texto enviado es el mismo retornado por el API', async () => {
        let result = await axios.post(endpoint, {text: 'Testing App'});
        return expect(result.data).toEqual({text: 'Testing App', statusCode: 200})
    })

    // Prueba #2 - Caso que el texto se envíe vacío
    test('El texto que se envía es vacío y devuelve 400', async () => {
        try {
            let result = await axios.post(endpoint, {text: ''});
        } catch(error) {
            return expect(error.response.data).toEqual({msg: 'Texto no enviado', statusCode: 400});
        }
    })

    // Prueba #3 - Caso que el texto que se envíe sea inválido
    test('El texto que se envía es inválido y devuelve 400', async () => {
        try {
            let result = await axios.post(endpoint, {text: '___Wqwqu##'});
        } catch(error) {
            return expect(error.response.data).toEqual({msg: 'Parámetro inválido', statusCode: 400});
        }
    })
})

