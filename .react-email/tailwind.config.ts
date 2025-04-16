import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
import plugin from 'tailwindcss/plugin';

const iOsHeight = plugin(({ addUtilities }) => {
  const supportsTouchRule = '@supports (-webkit-touch-callout: none)';
  const webkitFillAvailable = '-webkit-fill-available';

  const utilities = {
    '.min-h-screen-ios': {
      [supportsTouchRule]: {
        minHeight: webkitFillAvailable,
      },
    },
    '.h-screen-ios': {
      [supportsTouchRule]: {
        height: webkitFillAvailable,
      },
    },
  };

  // @ts-expect-error This works normally, not sure what this error is
  addUtilities(utilities, ['responsive']);
});

const config: Config = {
  content: {
    // needs to be relative because tailwind will find the content
    // by default based on the process's cwd
    relative: true,
    files: [
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
  },
  theme: {
    fontSize: {
      '4xl': '34px',
      '3xl': '30px',
      '2xl': '24px',
      'xl': '20px',
      'lg': '18px',
      'base': '16px',
      'sm': '14px',
      'xs': '13px',
      'xxs': '12px',
      'xxxs': '11px',
    },
    lineHeight: {
      tight: '150%',
      normal: '170%',
      relaxed: '200%',
      loose: '220%',
      none: '100%',
    },
    colors: {
      ...colors,
      'green-50': '#F0F5F2',
      'green-100': '#E0EBE4',
      'green-200': '#B9D5C4',
      'green-300': '#9CC9AD',
      'green-400': '#7AB892',
      'green-500': '#59A677',
      'green-600': '#2D864F',
      'green-700': '#006628',
      'green-800': '#005722',
      'green-900': '#00421A',
      'slate-100': '#E2E9E7',
      'slate-500': '#C1D7D1',
      'slate-900': '#9EC7BB',
      'beige-100': '#F0EDEB',
      'beige-500': '#D9D2CC',
      'beige-900': '#9F9790',
      'gray-50': '#F1F4F2',
      'gray-100': '#C7D1CB',
      'gray-200': '#C7D1CB',
      'gray-300': '#ABBAB1',
      'gray-400': '#8FA397',
      'gray-500': '#738C7D',
      'gray-600': '#677E70',
      'gray-700': '#5C7064',
      'gray-800': '#45544B',
      'gray-900': '#2E3832',
      'yellow-50': '#FFF8EB',
      'yellow-100': '#FEEAC7',
      'yellow-200': '#FDD28A',
      'yellow-300': '#FCBB4D',
      'yellow-400': '#FBAB24',
      'yellow-500': '#F59E0B',
      'yellow-600': '#D98B06',
      'yellow-700': '#B47409',
      'yellow-800': '#92610E',
      'yellow-900': '#78510F',
      'red-50': '#FFF1F1',
      'red-100': '#FEE1E1',
      'red-200': '#FECACA',
      'red-300': '#FCA5A5',
      'red-400': '#F87171',
      'red-500': '#DA5F5F',
      'red-600': '#DC2626',
      'red-700': '#B91C1C',
      'red-800': '#991B1B',
      'red-900': '#7F1D1D',
      'purple-50': '#F7F3FF',
      'purple-100': '#EFE9FE',
      'purple-200': '#E2D7FD',
      'purple-300': '#CBB5FD',
      'purple-400': '#c783fd',
      'purple-500': '#8B5CF6',
      'purple-600': '#713AED',
      'purple-700': '#5E28D9',
      'purple-800': '#4E21B6',
      'purple-900': '#421D95',
      'turquoise-50': '#F0F8F9',
      'turquoise-100': '#E4F5F5',
      'turquoise-200': '#CBF1F3',
      'turquoise-300': '#A2E7EB',
      'turquoise-400': '#7FE2E8',
      'turquoise-500': '#74DEE1',
      'turquoise-600': '#17C4CD',
      'turquoise-700': '#15B0B7',
      'turquoise-800': '#129CA3',
      'turquoise-900': '#0F7F85',
      'emerald-50': '#F0F8F8',
      'emerald-100': '#E8FBF8',
      'emerald-200': '#B9F2E9',
      'emerald-300': '#73E5D4',
      'emerald-400': '#44E1CA',
      'emerald-500': '#17D3B7',
      'emerald-600': '#00B79C',
      'emerald-700': '#00AB95',
      'emerald-800': '#009E8A',
      'emerald-900': '#007E6D',
      'blue-50': '#EFF5FF',
      'blue-100': '#DBE8FE',
      'blue-200': '#BFD7FE',
      'blue-300': '#93BBFD',
      'blue-400': '#609AFA',
      'blue-500': '#3B82F6',
      'blue-600': '#2570EB',
      'blue-700': '#1D64D8',
      'blue-800': '#1E55AF',
      'blue-900': '#1E478A',
      'primary': '#005722',
    },
    extend: {
      lineHeight: {
        sm: '1',
        base: '1',
        lg: '1',
        xl: '1',
      },
      borderRadius: {
        DEFAULT: '10px',
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'base': '16px',
        'lg': '24px',
        'xl': '40px',
        '2xl': '64px',
        '3xl': '104px',
      },
      height: {
        screenLg: '800px',
      },
      colors: {
        success1: '#2D864F',
        success2: '#005722',
        error1: '#DC2626',
        error2: '#991B1B',
        warning1: '#F59E0B',
        warning2: '#92610E',

        aoGreen: {
          light: '#4B7F62',
          DEFAULT: '#176830',
          dark: '#12401B',
        },
        aoBrown: {
          light: '#87675E',
          DEFAULT: '#604440',
          dark: '#4D413F',
        },
        priceRed: {
          light: '#BC6666',
          DEFAULT: '#8c2b45',
          dark: '#660707',
        },
        txGray: {
          light: '#999999',
          DEFAULT: '#707070',
          dark: '#4a4a4a',
        },
        bgGray: '#E5E7EB',
        bgRed: '#F4EFEC',
        bgGreen: '#E6EEEA',

        border: '#005722',
        input: '#D2E5E3',
        ring: '#E9EEE3',
        background: '#005722',
        foreground: '#F0F5F2',
        secondary: {
          DEFAULT: '#DA5F5F',
          foreground: '#FFF',
        },
        destructive: {
          DEFAULT: '#DA5F5F',
          foreground: '#F0F8F9',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: '#B91C1C',
          foreground: '#FEF2F2',
        },
        popover: {
          DEFAULT: '#0F7F85',
          foreground: '#EFF5FF',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        sidebar: {
          'DEFAULT': 'var(--sidebar-background)',
          'foreground': 'var(--sidebar-foreground)',
          'primary': 'var(--sidebar-primary)',
          'primary-foreground': 'var(--sidebar-primary-foreground)',
          'accent': 'var(--sidebar-accent)',
          'accent-foreground': 'var(--sidebar-accent-foreground)',
          'border': 'var(--sidebar-border)',
          'ring': 'var(--sidebar-ring)',
        },
      },
      keyframes: {
        'accordionDown': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordionUp': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'fadeIn': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'circlemove': {
          '0%': { bottom: '-5px' },
          '100%': { bottom: '45px' },
        },
        'cirlemovehide': {
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
          '80%': { opacity: '0.9' },
          '100%': { opacity: '0' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translate(-50%, 20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate(-50%, 0)',
          },
        },
      },
      animation: {
        'fadeIn': 'fadeIn 0.7s ease-in-out',
        'accordion-down': 'accordionDown 0.2s ease-out',
        'accordion-up': 'accordionUp 0.2s ease-out',
        'circlemove': 'circlemove 1.6s ease-in-out infinite',
        'cirlemovehide': 'cirlemovehide 1.6s ease-out infinite',
        'fade-in': 'fade-in 1s ease-out forwards',
        'fade-in-up': 'fade-in-up 1s ease-out forwards',
      },
    },
  },
  plugins: [iOsHeight],
};
export default config;
