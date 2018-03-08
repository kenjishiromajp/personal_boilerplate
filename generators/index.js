module.exports = function (plop) {
  // create your generators here
  plop.setGenerator('component', {
    description: 'Create a simple Component',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'What is the name of component?',
    }], // array of inquirer prompts
    actions: [{
      type: 'add',
      path: '../app/components/{{properCase name}}/index.js',
      templateFile: './component.js.hbs',
      abortOnFail: true,
    }],
  });
  plop.setGenerator('container', {
    description: 'Create a simple Container',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'What is the name of container?',
    }], // array of inquirer prompts
    actions: [
      {
        type: 'add',
        path: '../app/containers/{{properCase name}}/index.js',
        templateFile: './container/index.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../app/containers/{{properCase name}}/actions.js',
        templateFile: './container/actions.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../app/containers/{{properCase name}}/constants.js',
        templateFile: './container/constants.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../app/containers/{{properCase name}}/loadable.js',
        templateFile: './container/loadable.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../app/containers/{{properCase name}}/reducer.js',
        templateFile: './container/reducer.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../app/containers/{{properCase name}}/saga.js',
        templateFile: './container/saga.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../app/containers/{{properCase name}}/selectors.js',
        templateFile: './container/selectors.js.hbs',
        abortOnFail: true,
      },
    ],
  });
};