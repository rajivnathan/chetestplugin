
/**
 * Generated using theia-plugin-generator
 */

import * as theia from '@theia/plugin';
import * as request from 'request-promise-native';


export function start(context: theia.PluginContext) {
    const informationMessageTestCommand = {
        id: 'hello-world-example-generated',
        label: "Hello World"
    };
    context.subscriptions.push(theia.commands.registerCommand(informationMessageTestCommand, async (...args: any[]) => {
        const options = {
            method: 'GET',
            uri: 'https://www.google.com/'
        }
        try {
            const res = await request(options);
            theia.window.showInformationMessage(`Response: ${res}`);
        } catch (error) {
            theia.window.showErrorMessage(`Problem with the request: ${error}`);
            console.error(error);
        }
    }));

}

export function stop() {

}
