// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

const videos = [
	"nNGQ7kMhGuQ",
	"nNGQ7kMhGuQ",
];

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "pay-attention" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('pay-attention.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		const column = { viewColumn: vscode.ViewColumn.Beside, preserverFocus: true };
		const column2 = { viewColumn: vscode.ViewColumn.Two, preserverFocus: true };
		const column3 = { viewColumn: vscode.ViewColumn.Three, preserverFocus: true };
		const column4 = { viewColumn: vscode.ViewColumn.One, preserverFocus: true };
		const options = { enableScripts: true };

		const panel = vscode.window.createWebviewPanel('subway-surfers.video', "This code boring ah hell", column, options);
		const panel2 = vscode.window.createWebviewPanel('subway-surfers.video', "This code boring ah hell", column2, options);
		const panel3 = vscode.window.createWebviewPanel('subway-surfers.video', "This code boring ah hell", column3, options);
		const panel4 = vscode.window.createWebviewPanel('subway-surfers.video', "This code boring ah hell", column4, options);


		panel.reveal();
		panel2.reveal();
		panel3.reveal();
		panel4.reveal();
		
		panel.webview.html = `
            <html lang="en"> 
                <head>
                    <meta charset="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <style>
                        .video {
                            display: flex;
                            flex-flow: column nowrap;
                            justify-content: center;
                            align-items: center;
                            width: 100%;
                            height: 33%;
                        }
                    </style>
                </head>
                <body>
				<div class="video">
				<video autoplay muted controls width=100% height="300">
					<source src="https://yewtu.be/latest_version?id=J4sBIRQ0sso&amp;itag=22#t=100">
				</video>
				</div>

					<div class="video">
					<video autoplay muted controls width=100% height="300">
						<source src="https://yewtu.be/latest_version?id=nNGQ7kMhGuQ&amp;itag=22#t=100">
					</video>
					</div>


					<div class="video">
					<video autoplay muted controls width=100% height="300">
						<source src="https://yewtu.be/latest_version?id=CgwWiExgO3I&amp;itag=22#t=100">
					</video>
					</div>

					<h1>hi</h1>
                </body>
            </html>
        `;


		panel2.webview.html = `
		<html lang="en"> 
			<head>
				<meta charset="utf-8"/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<style>
					.video {
						display: flex;
						flex-flow: column nowrap;
						justify-content: center;
						align-items: center;
						width: 100%;
						height: 33%;
					}
				</style>
			</head>
			<body>
			<div class="video">
			<video autoplay muted controls width="300" height="300">
				<source src="https://yewtu.be/latest_version?id=J4sBIRQ0sso&amp;itag=22#t=100">
			</video>
			</div>

				<div class="video">
				<video autoplay muted controls width="300" height="300">
					<source src="https://yewtu.be/latest_version?id=nNGQ7kMhGuQ&amp;itag=22#t=100">
				</video>
				</div>


				<div class="video">
				<video autoplay muted controls width="300" height="300">
					<source src="https://yewtu.be/latest_version?id=CgwWiExgO3I&amp;itag=22#t=100">
				</video>
				</div>

				<h1>hi</h1>
			</body>
		</html>
	`;


	panel3.webview.html = `
		<html lang="en"> 
			<head>
				<meta charset="utf-8"/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<style>
					.video {
						display: flex;
						flex-flow: column nowrap;
						justify-content: center;
						align-items: center;
						width: 100%;
						height: 33%;
					}
				</style>
			</head>
			<body>
			<div class="video">
			<video autoplay muted controls width="300" height="300">
				<source src="https://yewtu.be/latest_version?id=J4sBIRQ0sso&amp;itag=22#t=100">
			</video>
			</div>

				<div class="video">
				<video autoplay muted controls width="300" height="300">
					<source src="https://yewtu.be/latest_version?id=nNGQ7kMhGuQ&amp;itag=22#t=100">
				</video>
				</div>


				<div class="video">
				<video autoplay muted controls width="300" height="300">
					<source src="https://yewtu.be/latest_version?id=CgwWiExgO3I&amp;itag=22#t=100">
				</video>
				</div>

				<h1>hi</h1>
			</body>
		</html>
	`;

	panel4.webview.html = `
		<html lang="en"> 
			<head>
				<meta charset="utf-8"/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<style>
					.video {
						display: flex;
						flex-flow: column nowrap;
						justify-content: center;
						align-items: center;
						width: 100%;
						height: 33%;
					}
				</style>
			</head>
			<body>
			<div class="video">
			<video autoplay muted controls width="300" height="300">
				<source src="https://yewtu.be/latest_version?id=J4sBIRQ0sso&amp;itag=22#t=100">
			</video>
			</div>

				<div class="video">
				<video autoplay muted controls width="300" height="300">
					<source src="https://yewtu.be/latest_version?id=nNGQ7kMhGuQ&amp;itag=22#t=100">
				</video>
				</div>


				<div class="video">
				<video autoplay muted controls width="300" height="300">
					<source src="https://yewtu.be/latest_version?id=CgwWiExgO3I&amp;itag=22#t=100">
				</video>
				</div>

				<h1>hi</h1>
			</body>
		</html>
	`;


	});
	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
