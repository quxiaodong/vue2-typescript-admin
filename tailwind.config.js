module.exports = {
  purge: {
    content: ['./src/**/*.{vue, ts}']
  },
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'slate-50': '#f8fafc',
        'slate-100': '#f1f5f9',
        'slate-200': '#e2e8f0',
        'slate-300': '#cbd5e1',
        'slate-400': '#94a3b8',
        'slate-500': '#64748b',
        'slate-600': '#475569',
        'slate-700': '#334155',
        'slate-800': '#1e293b',
        'slate-900': '#0f172a'
      },
      opacity: {
        45: '.45',
        85: '.85'
      },
      zIndex: {
        500: '500',
        999: '999',
        1000: '1000',
        1100: '1100',
        1200: '1200'
      },
      transitionProperty: {
        left: 'left',
        right: 'right',
        width: 'width',
        padding: 'padding'
      }
    },
    screens: {
      xs: { max: '767px' },
      sm: { min: '768px', max: '991px' },
      md: { min: '992px', max: '1199px' },
      lg: { min: '1200px', max: '1919px' },
      xl: { min: '1920px' }
    }
  },
  plugins: []
}
