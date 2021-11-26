import './discordify.scss';

// BdApi stuff that we use
const { React, ReactDOM } = BdApi;

const sidebarContainerClass = 'container-2lgZY8';

function App() {
	const [isHidden, setIsHidden] = React.useState(true);

	return (
		<>
			<button onClick={() => setIsHidden(!isHidden)}>{isHidden ? 'Open' : 'Close'} Discordify</button>
			<Sidebar isHidden={isHidden} />
		</>
	);
}

const Sidebar = ({ isHidden }) => {
	const container = document.createElement('div');
	container.id = 'discordSpotifySidebar';
	React.useEffect(() => {
		console.log('mounted');
		document.getElementsByClassName(sidebarContainerClass)[0].appendChild(container);
		return () => {
			console.log('unmounted');
			document.getElementsByClassName(sidebarContainerClass)[0].removeChild(container);
		};
	}, [isHidden]);

	return <>{ReactDOM.createPortal(<>{!isHidden && <h1>test</h1>}</>, container)}</>;
};

module.exports = class SpotifyDiscord {
	patchedHeader = false;
	cancel_patch_header() {}
	load() {
		this.patch();
	}
	start() {
		this.patch();
	}
	stop() {
		this.cancel_patch_header();
	}
	onSwitch() {
		this.patch();
	}
	patch() {
		const HeaderBarContainer = BdApi.findModuleByDisplayName('HeaderBarContainer')?.prototype;
		if (HeaderBarContainer && !this.patchedHeader) {
			this.cancel_patch_header = BdApi.monkeyPatch(HeaderBarContainer, 'renderLoggedIn', {
				after: ({ returnValue }) => {
					returnValue?.props?.toolbar?.props?.children.push(<App />);
				}
			});
			this.patchedHeader = true;
		}
	}
};
