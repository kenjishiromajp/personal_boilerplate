module.exports = function (plop) {
  plop.setHelper('pageCase', (text) => {
    const finalText = text.slice(0, 1).toUpperCase() + text.slice(1);
    return `${finalText}Page`;
  });
  // create your generators here
  plop.setGenerator('Component', {
    description: 'Create a simple Component',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'What is the name of component?',
    },
    {
      type: 'list',
      name: 'typeComponent',
      message: 'Which type of Component?',
      choices: () => ['Stateless', 'React.Component'],
    }], // array of inquirer prompts
    actions: (data) => {
      const { typeComponent } = data;
      const actions = [{
        type: 'add',
        path: '../app/components/{{properCase name}}/style.less',
        templateFile: './component/style.less.hbs',
        abortOnFail: true,
      }];

      let templateFile = '';
      switch (typeComponent) {
        case 'Stateless':
          templateFile = './component/stateless.js.hbs';
          break;
        default:
          templateFile = './component/index.js.hbs';
          break;
      }

      actions.push({
        type: 'add',
        path: '../app/components/{{properCase name}}/index.js',
        templateFile,
        abortOnFail: true,
      });

      return actions;
    },
  });
  plop.setGenerator('Page Container', {
    description: 'Create a simple Page Container',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your page?',
      },
      {
        type: 'confirm',
        name: 'isPrivate',
        message: 'is It a Private Page?',
      },
      {
        type: 'list',
        name: 'typeEnhancement',
        message: 'Select the enhancement that you want',
        choices: () => ['With CRUD of some entity', 'Connected with another reducer', 'Empty'],
      },
    ], // array of inquirer prompts
    actions: (data) => {
      const { typeEnhancement } = data;
      let actions = [{
        type: 'add',
        path: '../app/containers/{{pageCase name}}/loadable.js',
        templateFile: './container/loadable.js.hbs',
        abortOnFail: true,
      }];
      switch (typeEnhancement) {
        case 'Connected with another reducer':
          actions = [
            ...actions,
            {
              type: 'add',
              path: '../app/containers/{{properCase name}}Page/index.js',
              templateFile: './container/withListOnly/index.js.hbs',
              abortOnFail: true,
            },
          ];
          break;
        case 'With CRUD of some entity':
          actions = [
            ...actions,
            {
              type: 'add',
              path: '../app/containers/{{properCase name}}Page/index.js',
              templateFile: './container/crud/index.js.hbs',
              abortOnFail: true,
            },
            {
              type: 'add',
              path: '../app/containers/{{properCase name}}Page/components/{{properCase name}}CreateButton/index.js',
              templateFile: './container/components/EntityCreateButton/index.js.hbs',
              abortOnFail: true,
            },
            {
              type: 'add',
              path: '../app/containers/{{properCase name}}Page/components/{{properCase name}}EditButton/index.js',
              templateFile: './container/components/EntityEditButton/index.js.hbs',
              abortOnFail: true,
            },
            {
              type: 'add',
              path: '../app/containers/{{properCase name}}Page/components/{{properCase name}}Form/index.js',
              templateFile: './container/components/EntityForm/index.js.hbs',
              abortOnFail: true,
            },
            {
              type: 'add',
              path: '../app/containers/{{properCase name}}Page/components/{{properCase name}}List/index.js',
              templateFile: './container/components/EntityList/index.js.hbs',
              abortOnFail: true,
            },
            {
              type: 'add',
              path: '../app/containers/{{properCase name}}Page/actions.js',
              templateFile: './container/crud/actions.js.hbs',
              abortOnFail: true,
            },
            {
              type: 'add',
              path: '../app/containers/{{properCase name}}Page/constants.js',
              templateFile: './container/crud/constants.js.hbs',
              abortOnFail: true,
            },
            {
              type: 'add',
              path: '../app/containers/{{properCase name}}Page/normalizr.js',
              templateFile: './container/crud/normalizr.js.hbs',
              abortOnFail: true,
            },
            {
              type: 'add',
              path: '../app/containers/{{properCase name}}Page/reducer.js',
              templateFile: './container/crud/reducer.js.hbs',
              abortOnFail: true,
            },
            {
              type: 'add',
              path: '../app/containers/{{properCase name}}Page/saga.js',
              templateFile: './container/crud/saga.js.hbs',
              abortOnFail: true,
            },
            {
              type: 'add',
              path: '../app/containers/{{properCase name}}Page/selectors.js',
              templateFile: './container/crud/selectors.js.hbs',
              abortOnFail: true,
            },
          ];
          break;
        case 'Empty':
          actions = [
            ...actions,
            {
              type: 'add',
              path: '../app/containers/{{properCase name}}Page/index.js',
              templateFile: './container/empty/index.js.hbs',
              abortOnFail: true,
            },
            {
              type: 'add',
              path: '../app/containers/{{properCase name}}Page/style.less',
              templateFile: './container/empty/style.less.hbs',
              abortOnFail: true,
            },
          ];
          break;
        default:
          break;
      }
      return actions;
    },
  });
};
