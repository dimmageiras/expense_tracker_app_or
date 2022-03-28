import {useEffect, useState} from "react";

const useDelayUnmount = (isMounted, delayTime) => {
	const [showDiv, setShowDiv] = useState(false);
	useEffect(() => {
		let timeoutId;
		// prettier-ignore
		isMounted && !showDiv ?
			setShowDiv(!showDiv)
		: !isMounted && showDiv &&
			(timeoutId = setTimeout(() => setShowDiv(!showDiv), delayTime))
		;
		return () => clearTimeout(timeoutId); // cleanup mechanism for effects, the use of setTimeout generate a sideEffect
	}, [isMounted, delayTime, showDiv]);
	return showDiv;
};

export {useDelayUnmount};
