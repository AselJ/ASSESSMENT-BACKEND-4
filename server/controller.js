const fortunes = ["A lifetime friend shall soon be made",
    "Beauty in its various forms appeals to you.",
    "Curiosity kills boredom. Nothing can kill curiosity.",
    "You are a talented storyteller.",
    "You will be sharing great news with all the people you love."
];

module.exports = {

    getAllFortunes: (req, res) => {
        res.status(200).send(fortunes);
    },


    getFortune: (req, res) => {

        const index = +req.params.index

        let randomFortune = fortunes[index];

        res.status(200).send(randomFortune);
    },


    createFortune: (req, res) => {
        const { fortune } = req.body;

        fortunes.push(fortune)

        res.status(200).send(fortunes)

    },

    deleteFortune: (req, res) => {
        const index = +req.params.index
        
        fortunes.splice(index, 1);
        
        res.status(200).send(fortunes);

    },

    updateFortune: (req, res) => {
        const index = +req.params.index;
        const newFortune = req.body.newFortune;
        
        fortunes[index] = newFortune;
        res.status(200).send(fortunes);
        console.log(req.body)

    }

}