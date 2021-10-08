const initialState = {
    users: [
        {
            id: 1,
            firstName: 'Дмитрий',
            lastName: 'Мудрук',
            skills: ['HTML5', 'CSS3', ' SASS/SCSS', 'JavaScript(ES6+)', 'React', 'NodeJS'],
            age: 23,
            about: 'Зовут Дмитрий, с города Одессы. Пишу на JavaScript около года, для создания пользовтельских интерфейсов использую ReactJS',
            impact: 'Компоненты, структура проекта, мегадизайн карточки участников :D',
            socials: ['https://github.com/Dimetris-s'],
            photo: 'https://i.ibb.co/LgwQ5Sv/IMG-0668.jpg',
        },
        {
            id: 2,
            firstName: 'Владислав',
            lastName: 'Астахов',
            age: 26,
            skills: ['HTML5', 'CSS3', ' SASS/SCSS', 'JavaScript(ES6+)', 'React', 'TypeScript'],
            about: 'Приветствую! Меня зовут Влад. Недавно я переехал в Москву, так как бросил основную работу и ушел на front. Изучаю JavaScript, TypeScript, React',
            impact: 'Архитектура, Роутинг, Редакс',
            socials: ['https://github.com/AstakhovV'],
            photo: 'https://i.ibb.co/rbkhH0b/photo-about.jpg',
        },
        {
            id: 3,
            firstName: 'Юрий',
            lastName: 'Симонов',
            age: 25,
            skills: ['HTML5', 'CSS3', ' SCSS', 'JavaScript', 'React'],
            about: 'Привет, меня зовут Юрий. Занимаюсь в основном вёрсткой сайтов, но если приходят задачи по JavaScript, то тоже их выполняю. С React, можно сказать, познакомился на курсе Владилена.',
            impact: 'Компоненты "Progress" и "Breadcrumbs"',
            socials: ['https://github.com/Yuri-Simonov'],
            photo: 'https://avatars.githubusercontent.com/u/80687042?v=4',
        }
    ],
    isLoaded: false
}

const usersReducer = (state, action) => {
    return initialState
}

export default usersReducer