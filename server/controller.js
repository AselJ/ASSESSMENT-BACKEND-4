const fortunes = ["A lifetime friend shall soon be made",
"Beauty in its various forms appeals to you.",
"Curiosity kills boredom. Nothing can kill curiosity."
];

module.exports = {


    getFortune: (req, res) => {
        
      
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
    
        res.status(200).send(randomFortune);
    }

}