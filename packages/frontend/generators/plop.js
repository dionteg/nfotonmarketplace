module.exports = (plop) => {
  plop.setGenerator('element', {
    description: 'Create an element',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What\'s your element name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/elements/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/index.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/elements/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/styles.ts.hbs',
      },
      {
        type: 'add',
        path: '../src/elements/{{pascalCase name}}/index.stories.tsx',
        templateFile: 'templates/index.stories.tsx.hbs',
      }
    ],
  })
}
