import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],
    theme: {
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1240px',
        },
        extend: {
            colors: {
                'gray_dark': '#292B2E',
                'dark': '#252629',
                'gray': {
                    DEFAULT: '#8A8F99',
                    400: '#9CA3AF',
                    500: '#6B7280'
                },
                'gray_border': '#3E4045',
                'blue': '#33AAFF',
                'green': '#33FFCC',
                'gold': '#FFBB33',
            },
        },
    },

};
