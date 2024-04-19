import { useState, useEffect } from 'react';

// function getStorageValue(key, defaultValue) {
// 	// getting stored value
// 	const saved = localStorage.getItem(key);
// 	const initial = JSON.parse(saved);
// 	return initial || defaultValue;
// }

function getStorageValue(key, defaultValue) {
  // getting stored value
  const saved = localStorage.getItem(key);
  let initial = defaultValue;

  try {
    initial = JSON.parse(saved) || defaultValue;
  } catch (e) {
    console.error(`Error parsing JSON for key "${key}":`, e);
  }

  return initial;
}

export const useLocalStorage = (key, defaultValue) => {
	const [value, setValue] = useState(() => {
		return getStorageValue(key, defaultValue);
	});

	useEffect(() => {
		// storing input name
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
};
