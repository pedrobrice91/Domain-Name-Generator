let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let fin = ".com"

for (let i = 0; i < pronoun.length; i++){
    for(let j = 0; j < adj.length; j++){
        for(let p = 0; p < noun.length; p++){
            console.log(pronoun[i] + adj[j] + noun[i]+fin)
        }
    }
}