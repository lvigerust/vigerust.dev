import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const darkTheme = 'dark';
export const lightTeme = 'light';

export const theme = writable(browser && (localStorage.getItem('theme') || darkTheme));
theme.subscribe((val) => browser && localStorage.setItem('theme', val));
