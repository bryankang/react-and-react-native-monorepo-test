const fs = require('fs');
const path = require('path');
const R = require('ramda');

module.exports = plop => {
    plop.setGenerator('component', {
        description: 'component + storybook',
        prompts: [
            {
                type: 'input',
                name: 'componentName',
                message: 'component name (e.g., StatusBar)',
                validate: input => {
                    if (input.length > 0) {
                        return true;
                    }
                    return 'please enter a component name';
                },
            },
            {
                type: 'list',
                name: 'componentType',
                message: 'base or view component?',
                choices: [
                    {
                        name: 'base',
                        value: 'base',
                    },
                    {
                        name: 'view',
                        value: 'view',
                    },
                ],
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/components/{{componentType}}/{{kebabCase componentName}}/{{kebabCase componentName}}.tsx',
                templateFile: 'plop-templates/component.hbs',
            },
            {
                type: 'add',
                path: 'src/components/{{componentType}}/{{kebabCase componentName}}/{{kebabCase componentName}}.stories.tsx',
                templateFile: 'plop-templates/component-stories.hbs',
            },
            {
                type: 'add',
                path: 'src/components/{{componentType}}/{{kebabCase componentName}}/get-{{kebabCase componentName}}-styles.ts',
                templateFile: 'plop-templates/get-component-styles.hbs',
            },
            answers => {
                const template = `export * from "./{{kebabCase componentName}}/{{kebabCase componentName}}";`;
                const templateOutput = plop.renderString(template, answers);

                const targetPath = path.resolve(__dirname, `src/components/${answers.componentType}/${answers.componentType}.ts`);
                if (!fs.existsSync(targetPath)) {
                    fs.writeFileSync(targetPath, '');
                }

                const lines = fs.readFileSync(targetPath).toString().split("\n");

                const output = R.compose(
                    R.join("\n"),
                    R.uniq,
                    R.sortBy(R.identity),
                    R.append(templateOutput),
                    R.filter(line => line.trim().length > 0)
                )(lines);

                fs.writeFileSync(targetPath, `${output}\n`);

                console.log(`added to src/components/${answers.componentType}/${answers.componentType}.ts`);

                // Add story to stories
                const storyTemplate = `import "../src/components/{{componentType}}/{{kebabCase componentName}}/{{kebabCase componentName}}.stories";`;
                const storyTemplateOutput = plop.renderString(storyTemplate, answers);

                const storyTargetPath = path.resolve(__dirname, `.storybook/stories.ts`);
                if (!fs.existsSync(storyTargetPath)) {
                    fs.writeFileSync(storyTargetPath, '');
                }

                const storyLines = fs.readFileSync(storyTargetPath).toString().split("\n");

                const storiesOutput = R.compose(
                    R.join("\n"),
                    R.uniq,
                    R.sortBy(R.identity),
                    R.append(storyTemplateOutput),
                    R.filter(line => line.trim().length > 0)
                )(storyLines);

                fs.writeFileSync(storyTargetPath, `${storiesOutput}\n`);

                console.log(`added to .storybook/stories.ts`);
            },
        ],
    });

    plop.setHelper('surroundWithBraces', function (text) {
        return '{' + text + '}';
    });

    plop.setHelper('concat', function () {
        return [...arguments].slice(0, -1).join('');
    });
};
