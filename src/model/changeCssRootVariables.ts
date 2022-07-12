import { Theme } from './../context/context';
export const changeCssRootVariables = (theme: Theme) => {
    const components = ['body-background', 'components-background', 'card-background', 'card-shadow', 'text-color'];

    const root = document.querySelector(':root') as HTMLElement;

    components.forEach(comp => {
        root.style.setProperty(`--${comp}-default`, `var(--${comp}-${theme})`);
    })

}