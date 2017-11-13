import createStore from "redux-zero";

let images = [
    {
        name : 'css3',
        img : 'devicon-css3-plain colored',
    },
    {
        name :'bootstrap',
        img : 'devicon-bootstrap-plain colored'
    },
    {
        name : 'html',
        img : 'devicon-html5-plain colored'
    },
    {
        name : 'jQuery',
        img : 'devicon-jquery-plain colored'
    },
    {
        name : 'JS',
        img:'devicon-javascript-plain colored'
    },
    {
        name : 'react',
        img : 'devicon-react-original colored'
    },
    {
        name : 'redux',
        img :'devicon-github-plain colored'
    },
    {
        name : 'sass',
        img : 'devicon-sass-original colored'
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