const express = require('express');
const router = express.Router();
const axios = require('axios');


router.get('/poke/:pokeId', (req, res, next) => {
    //                |
    //                ------------------------------------------
    //                                                          |
    axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.pokeId}`)
        .then(responseFromAPI => {
            console.log("><>><<<><><><><><> ", responseFromAPI.data);

            data = {
                pokes: responseFromAPI.data,
                isSaur: true
            };

            if (!responseFromAPI.data.name.includes('saur')) data.isSaur = false

            res.render('apiViews/details', data);
        }).catch(err => next(err));
});

module.exports = router;