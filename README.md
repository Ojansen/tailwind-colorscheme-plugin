# Tailwind ColorScheme Plugin
A Tailwind CSS plugin that generates accessible, stylish button components using chroma-js. This plugin ensures all buttons meet WCAG 2.1 contrast requirements, supports all basic Tailwind CSS colors, allows for custom colors, and includes styling for all button states using classes and pseudo-classes.

## Features
* **WCAG 2.1 Compliance**: Ensures text and background color combinations meet accessibility standards.
* **All Tailwind Colors**: Automatically generates button styles for all default Tailwind CSS colors.
* **Custom Colors**: Easily add and use your own color schemes.
* **State Styles**: Includes hover, active, and focus states with appropriate styling.
* **Simple Integration**: Packaged as a single npm package for effortless installation and use.

## Installation
Install the plugin via npm:

```bash
npm install tailwind-colorscheme-plugin
```
```bash
pnpm install tailwind-colorscheme-plugin
```

## Prerequisites
* **Tailwind CSS**: Make sure you have Tailwind CSS installed and configured in your project.
* **Node.js and npm**: Ensure you have Node.js and npm installed to manage packages.

## Getting Started
1. #### Configure Tailwind CSS
   Add the plugin to your tailwind.config.js file. You can also pass custom colors if needed.

```javascript
// tailwind.config.js

module.exports = {
    theme: {
    // Your existing theme configuration
    },
    plugins: [
        require('tailwind-colorscheme-plugin')({
            customColors: {
                customBlue: '#1e40af',
                customGreen: '#10b981',
                // Add more custom colors as needed
            },
        }),
    ],
};
```
2. #### Use the Button Classes in Your HTML
   Apply the generated button classes to your elements:

```html
<button class="btn-blue">Blue Button</button>
<button class="btn-red">Red Button</button>
<button class="btn-green">Green Button</button>
<button class="btn-customBlue">Custom Blue Button</button>
```

3. #### Customize as Needed
   The plugin generates buttons with default padding, border-radius, and other styles. You can customize these by editing the plugin's code or overriding the styles in your CSS.

### Button States and Pseudo-Classes
The plugin includes styling for various button states using pseudo-classes:

* **Hover**: `&:hover` adjusts the background color for hover effects.
* **Active**: `&:active` modifies the background color when the button is active.
* **Focus**: `&:focus` adds an outline to improve accessibility and user experience.

### Accessibility Compliance
The plugin uses chroma-js to calculate color contrast ratios, ensuring that all buttons meet or exceed WCAG 2.1 guidelines. This is crucial for creating accessible web applications that are usable by everyone.

### Custom Colors
You can extend the default color palette by providing custom colors in the plugin options:

```javascript
require('tailwind-colorscheme-plugin')({
    customColors: {
        // Define your custom colors here
        customPurple: '#6b21a8',
        customOrange: '#ea580c',
    },
});
```
These colors can then be used just like the default colors:

```html
<button class="btn-customPurple">Custom Purple Button</button>
<button class="btn-customOrange">Custom Orange Button</button>
```
### Full Example
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Tailwind Button Plugin Example</title>
  <link href="path/to/your/output.css" rel="stylesheet">
</head>
<body>
  <button class="btn-blue">Blue Button</button>
  <button class="btn-red">Red Button</button>
  <button class="btn-green">Green Button</button>
  <button class="btn-customBlue">Custom Blue Button</button>
  <button class="btn-customPurple">Custom Purple Button</button>
</body>
</html>
```

### Contribution
Contributions are welcome! If you have suggestions or find any issues, please open an issue or submit a pull request on the GitHub repository.

### License
This project is licensed under the MIT License. See the LICENSE file for details.

### Acknowledgments
* [Tailwind CSS](https://tailwindcss.com)
* [chroma.js](https://gka.github.io/chroma.js/)
