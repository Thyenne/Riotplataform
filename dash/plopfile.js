module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Criando componente 🧙',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'Nome:'
      },
    ],
    actions: [
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'src/components/{{pascalCase name}}/index.jsx',
        // Handlebars template used to generate content of new file
        templateFile: 'plop-templates/ComponentIndex.jsx.hbs',
      },
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'src/components/{{pascalCase name}}/styles.js',
        // Handlebars template used to generate content of new file
        templateFile: 'plop-templates/ComponentStyles.js.hbs',
      },
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'src/components/{{pascalCase name}}/test.jsx',
        // Handlebars template used to generate content of new file
        templateFile: 'plop-templates/ComponentTests.jsx.hbs',
      },     
      {
        // Add a new file
        type: 'append',
        // Path for the new file
        path: 'src/components/index.js',
        // Handlebars template used to generate content of new file
        templateFile: 'plop-templates/ExportFile.txt.hbs',
      },
    ],
  });
};