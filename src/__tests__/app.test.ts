import { render } from '@testing-library/svelte';
import App from '../App.svelte';

test('should render', () => {
  const result = render(App);
  expect(() => result.component).not.toThrow();
});
