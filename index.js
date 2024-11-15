const plugin = require('tailwindcss/plugin');
const chroma = require('chroma-js');

module.exports = plugin.withOptions(function (options = {}) {
  return function ({ addComponents, theme }) {
    const baseColors = theme('colors');
    const customColors = options.customColors || {};
    const colors = { ...baseColors, ...customColors };
    const buttons = {};

    // Remove unused colors
    delete colors.transparent;
    delete colors.current;
    delete colors.inherit;

    Object.keys(colors).forEach((colorName) => {
      const colorShades = colors[colorName];

      // Check if colorShades is an object (nested shades)
      if (typeof colorShades === 'object' && colorShades !== null) {
        Object.keys(colorShades).forEach((shade) => {
          const colorValue = colorShades[shade];

          // Ensure the color value is a valid string
          if (typeof colorValue !== 'string') return;

          // Generate button styles
          const className = `.btn-${colorName}-${shade}`;
          buttons[className] = generateButtonStyles(colorValue, theme);
        });
      } else if (typeof colorShades === 'string') {
        // Handle colors without shades
        const colorValue = colorShades;
        const className = `.btn-${colorName}`;
        buttons[className] = generateButtonStyles(colorValue, theme);
      }
    });

    addComponents(buttons);
  };
});

// Helper function to generate button styles
function generateButtonStyles(colorValue, theme) {
  // Ensure WCAG 2.1 compliance
  const contrastWithWhite = chroma.contrast(colorValue, '#fff');
  const contrastWithBlack = chroma.contrast(colorValue, '#000');
  const contrastColor = contrastWithWhite >= 4.5 ? '#fff' : '#000';

  // Adjust background colors for hover, active, and focus states
  const hoverBg = chroma(colorValue).darken(0.5).hex();
  const activeBg = chroma(colorValue).darken(1).hex();
  const focusOutline = chroma(colorValue).brighten(0.5).hex();

  return {
    backgroundColor: colorValue,
    color: contrastColor,
    padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
    borderRadius: theme('borderRadius.md'),
    '&:hover': {
      backgroundColor: hoverBg,
    },
    '&:active': {
      backgroundColor: activeBg,
    },
    '&:focus': {
      outline: `2px solid ${focusOutline}`,
      outlineOffset: '2px',
    },
  };
}
