// There is 100% a better way to do this, i just couldn't figure out how.
// So here is a very ugly hack :)
const react = BdApi.React;
export default react;
export const {
	createContext,
	useRef,
	useState,
	useLayoutEffect,
	createElement,
	useContext,
	useEffect,
	useMemo,
	useCallback,
	Children,
	isValidElement,
	Fragment,
	forwardRef
} = react;
