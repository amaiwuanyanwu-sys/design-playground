// Design token: Typography system
// Typography tokens from Figma design system

export const typography = {
  fontFamily: {
    primary: 'Inter, system-ui, -apple-system, sans-serif',
    sans: 'system-ui, -apple-system, sans-serif',
    serif: 'Georgia, serif',
    mono: 'Menlo, Monaco, Courier New, monospace',
  },

  // Page Headers (Marketing headers)
  headers: {
    h1: {
      fontSize: '76px',
      fontWeight: 800,
      lineHeight: '79.8px',
      fontFamily: 'Inter',
    },
    h2: {
      fontSize: '56px',
      fontWeight: 800,
      lineHeight: '58.8px',
      fontFamily: 'Inter',
    },
    h3: {
      fontSize: '42px',
      fontWeight: 700,
      lineHeight: '46.2px',
      fontFamily: 'Inter',
    },
    h4: {
      fontSize: '32px',
      fontWeight: 700,
      lineHeight: '35.2px',
      fontFamily: 'Inter',
    },
    h5: {
      fontSize: '24px',
      fontWeight: 700,
      lineHeight: '28.8px',
      fontFamily: 'Inter',
    },
    h6: {
      fontSize: '18px',
      fontWeight: 700,
      lineHeight: '21.6px',
      fontFamily: 'Inter',
    },
  },

  // Section Headers (sub-headers, body text)
  sections: {
    header1: {
      semibold: {
        fontSize: '32px',
        fontWeight: 600,
        lineHeight: '38.4px',
        fontFamily: 'Inter',
      },
      medium: {
        fontSize: '32px',
        fontWeight: 500,
        lineHeight: '38.4px',
        fontFamily: 'Inter',
      },
    },
    header2: {
      semibold: {
        fontSize: '24px',
        fontWeight: 600,
        lineHeight: '28.8px',
        fontFamily: 'Inter',
      },
      medium: {
        fontSize: '24px',
        fontWeight: 500,
        lineHeight: '28.8px',
        fontFamily: 'Inter',
      },
    },
    header3: {
      semibold: {
        fontSize: '22px',
        fontWeight: 600,
        lineHeight: '28.6px',
        fontFamily: 'Inter',
      },
      medium: {
        fontSize: '22px',
        fontWeight: 500,
        lineHeight: '28.6px',
        fontFamily: 'Inter',
      },
    },
    header4: {
      semibold: {
        fontSize: '20px',
        fontWeight: 600,
        lineHeight: '26px',
        fontFamily: 'Inter',
      },
      medium: {
        fontSize: '20px',
        fontWeight: 500,
        lineHeight: '26px',
        fontFamily: 'Inter',
      },
    },
    header5: {
      semibold: {
        fontSize: '18px',
        fontWeight: 600,
        lineHeight: '23.4px',
        fontFamily: 'Inter',
      },
      medium: {
        fontSize: '18px',
        fontWeight: 500,
        lineHeight: '23.4px',
        fontFamily: 'Inter',
      },
    },
  },

  // Body Text
  body: {
    paragraph1: {
      semibold: {
        fontSize: '18px',
        fontWeight: 600,
        lineHeight: '27.9px',
        fontFamily: 'Inter',
      },
      medium: {
        fontSize: '18px',
        fontWeight: 500,
        lineHeight: '27.9px',
        fontFamily: 'Inter',
      },
    },
    paragraph2: {
      semibold: {
        fontSize: '16px',
        fontWeight: 600,
        lineHeight: '24px',
        fontFamily: 'Inter',
        description: 'body text',
      },
      medium: {
        fontSize: '16px',
        fontWeight: 500,
        lineHeight: '24px',
        fontFamily: 'Inter',
        description: 'body text',
      },
    },
    paragraph3: {
      semibold: {
        fontSize: '14px',
        fontWeight: 600,
        lineHeight: '19.6px',
        fontFamily: 'Inter',
      },
      medium: {
        fontSize: '14px',
        fontWeight: 500,
        lineHeight: '19.6px',
        fontFamily: 'Inter',
      },
    },
    smallText: {
      semibold: {
        fontSize: '12px',
        fontWeight: 600,
        lineHeight: '18px',
        fontFamily: 'Inter',
      },
      medium: {
        fontSize: '12px',
        fontWeight: 500,
        lineHeight: '18px',
        fontFamily: 'Inter',
      },
    },
  },

  // Labels (information, text links)
  labels: {
    field1: {
      fontSize: '12px',
      fontWeight: 600,
      lineHeight: '12px',
      fontFamily: 'Inter',
    },
  },

  // Base font sizes (for utility)
  fontSize: {
    12: '12px',
    14: '14px',
    16: '16px',
    18: '18px',
    20: '20px',
    22: '22px',
    24: '24px',
    32: '32px',
    42: '42px',
    56: '56px',
    76: '76px',
  },

  // Font weights
  fontWeight: {
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
}
