/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // CSS variable-based colors for theming
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },

        // Direct color tokens from Figma design system
        brand: {
          primary: '#1E8754',
          secondary: '#003139',
          grass: '#1E8754',
          midnight: '#003139',
          pine: '#004F3E',
          spring: '#5FE089',
          lake: '#219EC4',
          creamsicle: '#FFA081',
        },
        brandShades: {
          lake: {
            100: '#B9DBEB',
          },
          spring: {
            100: '#CFF6DC',
          },
          creamsicle: {
            50: '#FFECDB',
          },
        },
        semantic: {
          success: '#1E8754',
          action: '#007CB2',
          error: '#C64838',
          warning: '#FFD861',
        },
        ui: {
          success: {
            DEFAULT: '#1E8754',
            100: '#F5FEF8',
            900: '#085834',
          },
          error: {
            DEFAULT: '#C64838',
            100: '#FDF8F7',
            900: '#623532',
          },
          warning: {
            DEFAULT: '#FFD861',
            100: '#FFFBEF',
            900: '#A36624',
          },
          action: {
            DEFAULT: '#007CB2',
            100: '#F2F8F8',
            900: '#005E82',
          },
        },
        neutral: {
          white: '#ffffff',
          slate: {
            100: '#F8F9F9',
            200: '#F0F2F3',
            300: '#DFE3E4',
            400: '#C1C9CB',
            500: '#96A5A8',
            600: '#657A7E',
            700: '#385459',
            800: '#244348',
            900: '#01272E',
          },
        },
        tertiary: {
          plum: {
            50: '#F4E6F8',
            100: '#E4C0ED',
            200: '#D297E2',
            300: '#C06DD6',
            400: '#B24CCD',
            500: '#A42CC3',
            600: '#952ABD',
            700: '#8025B5',
            800: '#6E21AD',
            900: '#4A1AA1',
          },
          lavender: {
            50: '#E7E7F2',
            100: '#C3C2DF',
            200: '#9B9BC9',
            300: '#7675B3',
            400: '#5C58A4',
            500: '#433B95',
            600: '#3D348C',
            700: '#352A81',
            800: '#2D2175',
            900: '#200E61',
          },
          lake: {
            50: '#E1F5FC',
            100: '#B9DBEB',
            200: '#82D5F1',
            300: '#53C4E8',
            400: '#34B9E0',
            500: '#27ADD7',
            600: '#219EC4',
            700: '#168AA9',
            800: '#0C7791',
            900: '#005564',
          },
          seafoam: {
            50: '#E1F9F9',
            100: '#B4E7F6',
            200: '#87E6E9',
            300: '#57DBE1',
            400: '#36D3DC',
            500: '#1DCAD8',
            600: '#1BBAC5',
            700: '#1AA4AB',
            800: '#188F93',
            900: '#146B69',
          },
          spring: {
            50: '#E5FAEB',
            100: '#C0F1CD',
            200: '#95E9AD',
            300: '#5FE089',
            500: '#00CE56',
            600: '#00BD4C',
            700: '#00AA3F',
            800: '#009834',
            900: '#007820',
          },
          gold: {
            50: '#F8F1E0',
            100: '#EEDCB1',
            200: '#E4C57E',
            300: '#DAAE4C',
            400: '#D49E27',
            500: '#CF8F06',
            600: '#CC8500',
            700: '#C77700',
            800: '#C06900',
            900: '#B65400',
          },
          tangerine: {
            50: '#FFF3E0',
            100: '#FFDFB1',
            200: '#FFCB7E',
            300: '#FFB54B',
            400: '#FFA422',
            500: '#FF9500',
            600: '#FF8800',
            700: '#FD7800',
            800: '#F76700',
            900: '#EE4902',
          },
          creamsicle: {
            50: '#FFECDB',
            100: '#FFC6B2',
            200: '#FFA081',
            300: '#FC7B50',
            400: '#F85F2B',
            500: '#F54200',
            600: '#EA3C00',
            700: '#DD3500',
            800: '#CF2D00',
            900: '#B61E00',
          },
          rose: {
            50: '#FFE4E8',
            100: '#FEBAC6',
            200: '#FB8EA1',
            300: '#F7607C',
            400: '#F23E60',
            500: '#EB2347',
            600: '#DC1C46',
            700: '#C71544',
            800: '#B30B42',
            900: '#90003E',
          },
          magenta: {
            50: '#F9E3F4',
            100: '#F1BAE3',
            200: '#EC8BD0',
            300: '#EA58BB',
            400: '#EB23A8',
            500: '#EF0093',
            600: '#DC008E',
            700: '#C50086',
            800: '#AE0080',
            900: '#840075',
          },
        },
      },
      borderRadius: {
        // PAR Design System Corner Radius
        none: '0px',
        input: '4px',
        module: '8px',
        modal: '12px',
        round: '100px',
        // Legacy CSS variable-based radius
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        primary: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      spacing: {
        // Add custom spacing tokens here
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        // Page Headers (Marketing) - prefixed with pb- (Practice Better)
        '.pb-header-1': {
          fontSize: '76px',
          fontWeight: '800',
          lineHeight: '79.8px',
          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        },
        '.pb-header-2': {
          fontSize: '56px',
          fontWeight: '800',
          lineHeight: '58.8px',
          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        },
        '.pb-header-3': {
          fontSize: '42px',
          fontWeight: '700',
          lineHeight: '46.2px',
          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        },
        '.pb-header-4': {
          fontSize: '32px',
          fontWeight: '700',
          lineHeight: '35.2px',
          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        },
        '.pb-header-5': {
          fontSize: '24px',
          fontWeight: '700',
          lineHeight: '28.8px',
          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        },
        '.pb-header-6': {
          fontSize: '18px',
          fontWeight: '700',
          lineHeight: '21.6px',
          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        },

        // Section Headers - Semibold
        '.pb-section-1-semibold': {
          fontSize: '32px',
          fontWeight: '600',
          lineHeight: '38.4px',
          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        },
        '.pb-section-2-semibold': {
          fontSize: '24px',
          fontWeight: '600',
          lineHeight: '28.8px',
          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        },
        '.pb-section-3-semibold': {
          fontSize: '22px',
          fontWeight: '600',
          lineHeight: '28.6px',
          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        },
        '.pb-section-4-semibold': {
          fontSize: '20px',
          fontWeight: '600',
          lineHeight: '26px',
          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        },
        '.pb-section-5-semibold': {
          fontSize: '18px',
          fontWeight: '600',
          lineHeight: '23.4px',
          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        },

        // Section Headers - Medium
        '.pb-section-1-medium': {
          fontSize: '32px',
          fontWeight: '500',
          lineHeight: '38.4px',
          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        },
        '.pb-section-2-medium': {
          fontSize: '24px',
          fontWeight: '500',
          lineHeight: '28.8px',
          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        },
        '.pb-section-3-medium': {
          fontSize: '22px',
          fontWeight: '500',
          lineHeight: '28.6px',
          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        },
        '.pb-section-4-medium': {
          fontSize: '20px',
          fontWeight: '500',
          lineHeight: '26px',
          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        },
        '.pb-section-5-medium': {
          fontSize: '18px',
          fontWeight: '500',
          lineHeight: '23.4px',
          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        },

        // Body Text - Semibold
        '.pb-body-1-semibold': {
          fontSize: '18px',
          fontWeight: '600',
          lineHeight: '27.9px',
          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        },
        '.pb-body-2-semibold': {
          fontSize: '16px',
          fontWeight: '600',
          lineHeight: '24px',
          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        },
        '.pb-body-3-semibold': {
          fontSize: '14px',
          fontWeight: '600',
          lineHeight: '19.6px',
          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        },

        // Body Text - Medium
        '.pb-body-1-medium': {
          fontSize: '18px',
          fontWeight: '500',
          lineHeight: '27.9px',
          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        },
        '.pb-body-2-medium': {
          fontSize: '16px',
          fontWeight: '500',
          lineHeight: '24px',
          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        },
        '.pb-body-3-medium': {
          fontSize: '14px',
          fontWeight: '500',
          lineHeight: '19.6px',
          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        },

        // Small Text
        '.pb-small-semibold': {
          fontSize: '12px',
          fontWeight: '600',
          lineHeight: '18px',
          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        },
        '.pb-small-medium': {
          fontSize: '12px',
          fontWeight: '500',
          lineHeight: '18px',
          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        },

        // Labels
        '.pb-label': {
          fontSize: '12px',
          fontWeight: '600',
          lineHeight: '12px',
          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        },
      })
    }
  ],
}
