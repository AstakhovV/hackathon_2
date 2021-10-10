const users = [
    {
        id: "1",
        firstName: 'Дмитрий',
        lastName: 'Мудрук',
        age: 23,
        about: 'Зовут Дмитрий, с города Одессы. Пишу на JavaScript около года, для создания пользовтельских интерфейсов использую ReactJS',
        impact: 'Компоненты: Карточка участника, Список участников, Кнопка, Loader, AppRouter, Badge, Страница участника. Структура проекта, fake-api, мегадизайн страницы и карточки участника :D',
        socials: ['https://github.com/Dimetris-s', 'https://www.facebook.com/dim3t'],
        photo: 'https://i.ibb.co/LgwQ5Sv/IMG-0668.jpg',
        skills: [
            {name: 'HTML5', progress: 95},
            {name: 'CSS3', progress: 90},
            {name: 'JavaScript(ES6+)', progress: 75},
            {name: 'React', progress: 50},
            {name: 'NodeJS', progress: 40}
        ],
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
        isTeamlead: true
    },
    {
        id: "3",
        firstName: 'Юрий',
        lastName: 'Симонов',
        age: 25,
        about: 'Привет, меня зовут Юрий. Занимаюсь в основном вёрсткой сайтов, но если приходят задачи по JavaScript, то тоже их выполняю. С React, можно сказать, познакомился на курсе Владилена.',
        impact: 'Компоненты "Progress" и "Breadcrumbs"',
        socials: ['https://github.com/Yuri-Simonov'],
        photo: 'https://avatars.githubusercontent.com/u/80687042?v=4',
        skills: [
            {name: 'HTML5', progress: 95},
            {name: 'CSS3', progress: 90},
            {name: 'JavaScript(ES6+)', progress: 75},
            {name: 'React', progress: 50},
            {name: 'NodeJS', progress: 40}
        ],
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