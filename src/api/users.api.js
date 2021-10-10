const users = [
    {
        id: "1",
        firstName: 'Дмитрий',
        lastName: 'Мудрук',
        age: 23,
        about: 'Зовут Дмитрий, с города Одессы. Пишу на JavaScript около года, для создания пользовтельских интерфейсов использую ReactJS',
        impact: 'Компоненты: UserCard, UserList, Button, Loader, AppRouter, Badge, Slider, UserPage. Структура проекта, fake-api, реализация добавления в избранное.',
        socials: ['https://github.com/Dimetris-s', 'https://www.facebook.com/dim3t'],
        photo: 'https://i.ibb.co/LgwQ5Sv/IMG-0668.jpg',
        skills: [
            {name: 'HTML5', progress: 95},
            {name: 'CSS3', progress: 90},
            {name: 'JavaScript(ES6+)', progress: 75},
            {name: 'React', progress: 50},
            {name: 'NodeJS', progress: 40}
        ],
        portfolio: ["https://i.ibb.co/p36ssR1/1.jpg", "https://i.ibb.co/gjwkL0k/2.jpg", "https://i.ibb.co/pQ5cj6g/3.jpg", "https://i.ibb.co/K0tW6B6/4.jpg"],
        isTeamlead: false
    },
    {
        id: "2",
        firstName: 'Владислав',
        lastName: 'Астахов',
        age: 26,
        about: 'Приветствую! Меня зовут Влад. Недавно я переехал в Москву, так как бросил основную работу и ушел на front. Изучаю JavaScript, TypeScript, React',
        impact: 'Структура и общие правки проекта, роутинг, utils',
        socials: ['https://github.com/AstakhovV'],
        photo: 'https://i.ibb.co/rbkhH0b/photo-about.jpg',
        skills: [
            {name: 'HTML5', progress: 100},
            {name: 'CSS3', progress: 80},
            {name: 'JavaScript(ES6+)', progress: 70},
            {name: 'React', progress: 50},
            {name: 'TypeScript', progress: 35}
        ],
        portfolio: ["https://i.ibb.co/kGZhztH/11.jpg", "https://i.ibb.co/4gnXqtG/12.jpg", "https://i.ibb.co/sQFSztx/13.jpg"],

        isTeamlead: true
    },
    {
        id: "3",
        firstName: 'Юрий',
        lastName: 'Симонов',
        age: 25,
        about: 'Привет, меня зовут Юрий. Занимаюсь в основном вёрсткой сайтов, но если приходят задачи по JavaScript, то тоже их выполняю. С React, можно сказать, познакомился на курсе Владилена.',
        impact: 'Компоненты "Progress" и "Breadcrumbs", а также немного "поколдовал" над общей картинкой домашней страницы',
        socials: ['https://github.com/Yuri-Simonov'],
        photo: 'https://avatars.githubusercontent.com/u/80687042?v=4',
        skills: [
            {name: 'HTML5', progress: 95},
            {name: 'CSS3', progress: 90},
            {name: 'JavaScript(ES6+)', progress: 75},
            {name: 'React', progress: 10},
            {name: 'Photoshop', progress: 100}
        ],
        portfolio: ["https://i.ibb.co/TvyPvGF/1.png", "https://i.ibb.co/x89Rnk3/2.png", "https://i.ibb.co/xY7DnnM/3.png"],

        isTeamlead: false
    }
]

const fetchAll = () => new Promise((resolve) => {
    setTimeout(() => resolve(users) , 1000)
})

const getUserById = id => new Promise(resolve => {
    setTimeout(() => resolve(users.find(user => user.id === id)), 1000)
})

const usersApi = {
    fetchAll, getUserById
}

export default usersApi