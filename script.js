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

var interval;
var index = 0;

var sagIcon = document.querySelector('.fa-arrow-right');
var solIcon = document.querySelector('.fa-arrow-left');


document.querySelectorAll('.arrow').forEach(function (item){
   item.addEventListener('mouseenter',function (){
       clearInterval(interval);
   })
});

document.querySelectorAll('.arrow').forEach(function (item){
    item.addEventListener('mouseleave',function (){
        init(settings);
    })
})

var settings = {
    duration : "1000",
    random : false
};

init(settings);

function init(settings){
    var prev;
    interval = setInterval(function (){

        if(settings.random){
            do{
                index = Math.floor(Math.random() * models.length);
            }while (index == prev)
            prev = index;
            document.querySelector('.card-img-top').setAttribute('src',models[index].image);
        }else{
            if(index>2){
              index = 0;
            }
            document.querySelector('.card-img-top').setAttribute('src',models[index].image);
            index++;
            console.log(index);
        }

    },settings.duration);
}



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



