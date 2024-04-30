import { createGlobalStyle } from 'styled-components';

export const HeightWidth = createGlobalStyle`

/* Width & Height */
  .content-vh {
    height: calc(100% - 500px);
  }
  .w-100 {
      width: 100%;
  }

  .max-w-100 {
      max-width: 100%;
  }

  .h-100 {
      height: 100%;
  }

  .h-100vh {
      min-height: 100vh;
  }
`;
