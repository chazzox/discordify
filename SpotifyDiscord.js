/**
 * @name SpotifyDiscord
 * @author PINPAL#5245 and chazzox#1001
 * @description Spotify but inside discord
 * @version 0.0.1
 * @website https://github.com/PINPAL/spotifyDiscord#readme
 * @source https://github.com/PINPAL/spotifyDiscord
 */

// Now we dont need to to BdApi when accessing react
const { React, ReactDOM } = BdApi;

// container ids
const sidebarContainerClass = 'container-2lgZY8';
const toolbarContainerClass = 'toolbar-1t6TWx';

// wrapper ids
const sidebarWrapperId = 'discordSpotifySidebar';
const toolBarWrapperId = 'discordSpotifyToolbar';

const Test = React.createElement('div', null, 'fuck you');

function App() {
	const [isHidden, setIsHidden] = React.useState(true);
	return (
		<>
			<button onClick={() => setIsHidden(!isHidden)}>toggle</button>
			{!isHidden && ReactDOM.createPortal(Test, document.getElementById(sidebarWrapperId))}
		</>
	);
}

function createDom() {
	const toolbarWrapperEl = document.createElement('div');
	toolbarWrapperEl.id = toolBarWrapperId;
	document.getElementsByClassName(toolbarContainerClass)[0].append(toolbarWrapperEl);

	const sidebarWrapperEl = document.createElement('div');
	sidebarWrapperEl.id = sidebarWrapperId;
	document.getElementsByClassName(sidebarContainerClass)[0].append(sidebarWrapperEl);
}

function destroyDom() {
	document.getElementById(sidebarWrapperId).remove();
	document.getElementById(toolBarWrapperId).remove();
}
function render() {
	ReactDOM.render(<App />, document.getElementById(toolBarWrapperId));
}

module.exports = class SpotifyDiscord {
	load() {
		console.log('loading up');
	}
	start() {
		createDom();
		render();
	}
	stop() {
		destroyDom();
	}
};
