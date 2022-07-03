var models = [
    {
        name:'görsel 1',
        image: 'resim/a.jpg'
    },{
        name:'görsel 2',
        image : 'resim/b.jpg'
    },
    {
        name:'görsel 3',
        image : 'resim/c.jpg'
    }
];




var index = 0;

var sagIcon = document.querySelector('.fa-arrow-right');
var solIcon = document.querySelector('.fa-arrow-left');

sagIcon.addEventListener('click',function (){
    index++;
    if(index > 2){
        index = 0;
    }
    console.log(index);
    document.querySelector('.card-title').textContent = models[index].name;

    document.querySelector('.card-img-top').setAttribute('src',models[index].image);

})

solIcon.addEventListener('click',function (){
    index--;
    if(index < 0){
        index = 2;
    }
    console.log(index);
    document.querySelector('.card-title').textContent = models[index].name;

    document.querySelector('.card-img-top').setAttribute('src',models[index].image);

})



