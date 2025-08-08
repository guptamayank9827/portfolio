import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
            50: {value: '#E0F7FA'},   // Very light teal for subtle backgrounds/hovers
            100: {value: '#B2EBF2'},
            200: {value: '#80DEEA'},
            300: {value: '#4DD0E1'},
            400: {value: '#26C6DA'},
            500: {value: '#1ABC9C'},    // Your main accent teal
            600: {value: '#17A08B'},
            700: {value: '#148677'},
            800: {value: '#116C63'},
            900: {value: '#0E524F'},    // Darkest teal for deep accents
        },
        // Dark shades (for text, primary buttons, etc.)
        dark: {
            600: {value: '#1a202c'},   // Main dark background
            700: {value: '#171922'},   // Very dark grey for navbar bg
            800: {value: '#34495E'},   // Slightly lighter dark shade
            900: {value: '#2C3E50'},   // Deep charcoal-blue for main text and dark elements
        },
        // Light shades (for backgrounds, borders, etc.)
        light: {
            100: {value: '#F8F8F8'},   // Main very light background
            200: {value: '#ECF0F1'},   // Light grey for borders, secondary backgrounds
            300: {value: '#BDC3C7'},   // Slightly darker grey for dividers
            400: {value: '#edf2f7'},   // Very light grey for navbar bg,
            600: {value: '#f0f0f0'}    // Main light background
        }
      }
    },
    // semanticTokens: {
    //   colors: {
    //     primary: {
    //       solid: {value: "{colors.primary.100}"},
    //       fg: {value: "{colors.primary.200}"},
    //       muted: {value: "{colors.secondary.100}"},
    //       subtle: {value: "{colors.secondary.200}"},
    //     }
    //   }
    // }
  }
});

export const system = createSystem(defaultConfig, config);