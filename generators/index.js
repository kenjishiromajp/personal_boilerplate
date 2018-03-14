module.exports = function (plop) {
  plop.setHelper('pageCase', (text) => {
    const finalText = text.slice(0,1).toUpperCase() + text.slice(1);
    return `${finalText}Page`;
  });
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
      templateFile: './component/index.js.hbs',
      abortOnFail: true,
    }],
  });
  plop.setGenerator('container', {
    description: 'Create a simple Container',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of container?',
      },
      {
        type: 'confirm',
        name: 'isPage',
        message: 'is It a page?',
      },
      {
        type: 'confirm',
        name: 'wantCRUD',
        message: 'Do you want to create CRUD?',
      },
    ], // array of inquirer prompts
    actions: (data) => {
      const { isPage } = data;
      const filter = !isPage ? 'properCase' : 'pageCase';
      const actions = [
        {
          type: 'add',
          path: `../app/containers/{{${filter} name}}/index.js`,
          templateFile: './container/index.js.hbs',
          abortOnFail: true,
        },
        {
          type: 'add',
          path: `../app/containers/{{${filter} name}}/actions.js`,
          templateFile: './container/actions.js.hbs',
          abortOnFail: true,
        },
        {
          type: 'add',
          path: `../app/containers/{{${filter} name}}/constants.js`,
          templateFile: './container/constants.js.hbs',
          abortOnFail: true,
        },
        {
          type: 'add',
          path: `../app/containers/{{${filter} name}}/normalizr.js`,
          templateFile: './container/normalizr.js.hbs',
          abortOnFail: true,
        },
        {
          type: 'add',
          path: `../app/containers/{{${filter} name}}/reducer.js`,
          templateFile: './container/reducer.js.hbs',
          abortOnFail: true,
        },
        {
          type: 'add',
          path: `../app/containers/{{${filter} name}}/saga.js`,
          templateFile: './container/saga.js.hbs',
          abortOnFail: true,
        },
        {
          type: 'add',
          path: `../app/containers/{{${filter} name}}/selectors.js`,
          templateFile: './container/selectors.js.hbs',
          abortOnFail: true,
        },
      ];
      if (isPage) {
        actions.push({
          type: 'add',
          path: '../app/containers/{{pageCase name}}/loadable.js',
          templateFile: './container/loadable.js.hbs',
          abortOnFail: true,
        });
      }
      return actions;
    },
  });
};
