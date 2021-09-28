const { app } = require('../served.js');
const supertest = require('supertest');
const request = supertest(app);

describe('app routes',() =>{
it('the avatar-characters endpoint will return all of the avatar characters',async()=>{
    const data =
    [
        {
            id: 1,
            name:'Aang',
            element: 'Air',
            img: 'https://i.insider.com/5ebdbc8c3ad8612a1c7aa143?width=856&format=jpeg',
            title: 'Avatar' 
           }, 
           {
            id: 2,
            name:'Zuko',
            element: 'Fire',
            img: 'https://i.redd.it/jcyddoyzeo761.jpg',
            title: 'Prince' 
        }, 
        {
            id: 3,
            name:'Katara',
            element: 'Water',
            img: 'http://pm1.narvii.com/6078/caabea330dc68f44a3f855606f897516ec582759_00.jpg',
            title: 'Healer' 
        }, 
        {
            id: 4,
            name:'Sokka',
            element: 'None',
            img: 'https://i.pinimg.com/originals/08/ca/e8/08cae8f53ebfd473b1b3133b0138d9cd.jpg',
            title: 'Plan-Guy' 
        }, 
        {
            id: 5,
            name:'Toph',
            element: 'Earth',
            img: 'http://images4.wikia.nocookie.net/__cb20081225191856/avatar/images/2/2e/Toph.png',
            title: 'Blind-Bandit' 
        }, 
        {
            id: 6,
            name:'Suki',
            element: 'None',
            img: 'https://comicvine1.cbsistatic.com/uploads/scale_super/11138/111385676/7019867-suki.jpg',
            title: 'Kyoshi-Warrior' 
        }, 
        {
            id: 7,
            name:'Appa',
            element: 'Air',
            img: 'https://preview.redd.it/nx50st82y8351.png?auto=webp&s=f31cdd2db86f73ee5245bf8462fa7df187119254',
            title: 'Bison' 
        }, 
        {
            id: 8,
            name:'Momo',
            element: 'Air',
            img: 'https://64.media.tumblr.com/78975bfb43e67c5fc550c6c3b9f9a944/tumblr_oywl14JF8m1uprngpo1_400.gifv',
            title: 'Lemur' 
        }, 
    ]
})

})

describe('app routes',() =>{
    it('the avatar-characters endpoint will return Sokka',async()=>{
        const data =
        [{
            id: 4,
            name:'Sokka',
            element: 'None',
            img: 'https://i.pinimg.com/originals/08/ca/e8/08cae8f53ebfd473b1b3133b0138d9cd.jpg',
            title: 'Plan-Guy' 
        }, ]
    })

})