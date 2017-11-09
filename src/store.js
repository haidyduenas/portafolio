import createStore from "redux-zero";

let images = [
    {
        name : 'css3',
        img : 'img/CSS3.png',
    },
    {
        name :'bootstrap',
        img : 'img/Bootstrap.png'
    },
    {
        name : 'html',
        img : 'img/html.png'
    },
    {
        name : 'jQuery',
        img : 'img/jq.png'
    },
    {
        name : 'JS',
        img:'img/js.png'
    },
    {
        name : 'react',
        img : 'img/react.png'
    },
    {
        name : 'redux',
        img :'img/redux.png'
    },
    {
        name : 'sass',
        img : 'img/sass.svg'
    }

];

let imgProject =[
    {
        name :'lyft',
        img :"img/lyft.png",
        class : 'app'
    },
    {
        name : 'abc',
        img : 'img/abc.png',
        class : 'app'
    },
    {
        name :'lyft',
        img :"img/lyft.png",
        class : 'app'
    },
    {
        name : 'trello',
        img :'img/trello.png',
        class : 'web'
    },

    {
        name : 'sushi',
        img : 'img/sushi.png',
        class : 'web'
    },
    {
        name : 'inBag',
        img : 'img/inBag.png',
        class : 'web'
    }
]

const initialState = {
    images : images,
    imgProject:imgProject
};

const store = createStore(initialState);

export default store;