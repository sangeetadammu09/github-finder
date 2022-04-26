module.exports = {
    style:{
        postcss: {
            plugin:[
                require('tailwindcss'),
                ('autoprefixer')
            ],
        },
    },
}