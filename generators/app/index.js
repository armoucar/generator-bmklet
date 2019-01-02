const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {

    prompting() {
        this.log(yosay(`Welcome to the first-rate ${chalk.red('generator-bmklet')} generator!`));

        const prompts = [
            {
                type: 'input',
                name: 'projectName',
                message: 'What\'s the name of your new bookmarklet?',
                default: this.appname.replace(/ /g, '-'),
            },
        ];

        return this.prompt(prompts).then(props => this.props = props);
    }

    writing() {
        this.fs.copy(
            this.templatePath('index.js'),
            this.destinationPath('index.js'),
        );

        this.fs.copyTpl(
            this.templatePath('package.json'),
            this.destinationPath('package.json'),
            this.props,
        );
    }

    install() {
        this.installDependencies();
    }

};
