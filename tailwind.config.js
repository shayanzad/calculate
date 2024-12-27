module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            colors:{
                // primary:"#21254E",
                secondry:"#C59425",
                
                primary: {
                  100: '#21254e1f',
                  200: '#21254e47',
                  300: '#21254e5e',
                  400: '#21254e7d',
                  500: '#21254e9c',
                  600: '#21254eb3',
                  700: '#21254ec9',
                  800: '#21254ee0',
                  900: '#21254e',
                },
              },
        },
    },
    plugins: [],
    darkMode: 'selector',
}