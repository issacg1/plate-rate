require('es6-promise').polyfill();
require('isomorphic-fetch');

function getAllPosts (req, res, next){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(fetchRez => fetchRez.json())
    .then(rez =>{
        res.locals.posts = rez;
        next();
    }).catch(err =>{
        console.log("this is the catch error", err)
        next();
    })
};

module.exports =  { getAllPosts } ;