import * as React from 'react';

// to generate react components from svgs I used: https://react-svgr.com/playground/

export const PlutoLogo = ({ className, ...rest }: { className?: any }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 -20 600 600'
    fill='currentColor'
    {...rest}
    className={`w-16 h-auto ${className}`}>
    <path d='M473 138c3 1 3 1 4.147 2.74.36.753.718 1.507 1.087 2.283l1.23 2.565 1.286 2.787 1.34 2.875c13.229 28.813 21.946 60.695 22.113 92.543l.022 2.729c.229 37.834.229 37.834-3.225 54.478l-.618 3.011C491.219 347.338 472.405 386.775 443 420l-2.336 2.672C432.12 432.327 423.112 441.002 413 449c-1.048.86-2.095 1.723-3.14 2.586C386.544 470.64 355.852 489.059 326 495l-3-1 1.342-1.33a20844.31 20844.31 0 0 0 32.377-32.182 9066.119 9066.119 0 0 1 15.658-15.563c4.558-4.519 9.11-9.044 13.653-13.578 2.402-2.398 4.809-4.792 7.224-7.178 2.702-2.673 5.392-5.359 8.079-8.047l2.4-2.357c9.607-9.678 16.248-21.48 16.704-35.39-.594-13.215-6.779-22.722-14.14-33.27-4.214-6.84-5.039-14.977-3.899-22.859 2.342-8.802 7.18-14.975 13.672-21.154 9.566-9.115 17.11-19.335 17.93-33.092.106-13.074-3.9-23.374-12.742-32.871-8.412-8.115-19.421-11.532-30.899-11.406-13.88 1.146-22.945 7.681-32.296 17.277-9.014 9.21-16.745 14.509-30.063 15-9.546-.673-16.6-4.823-24-10.547-9.406-6.834-19.593-8.333-31-7.453-19.465 3.55-32.467 20.322-45.74 33.627l-5.03 5.029c-4.526 4.526-9.05 9.055-13.572 13.584-4.255 4.262-8.513 8.52-12.771 12.78-8.426 8.428-16.85 16.859-25.273 25.29-8.176 8.186-16.353 16.37-24.531 24.553l-1.531 1.531-7.604 7.608A312556.114 312556.114 0 0 0 74 425a1093.35 1093.35 0 0 1-3.338-2.818l-1.877-1.585c-2.587-2.315-4.742-4.915-6.847-7.66l-1.383-1.786C32.489 374.255 13.54 331.504 8.27 285.225c-.242-1.986-.57-3.96-.908-5.932-2.401-23.007 22.432-51.476 36.219-68.496 25.836-31.452 58.65-51.782 99.48-56.047 39.01-3.582 77.181 5.365 114.878 14.339 60.095 14.296 127.01 29.216 183.478-4.804 11.698-7.33 21.971-16.421 31.582-26.285ZM71.75 246.25c-7.575 9.327-9.54 20.067-8.75 31.75 2.038 11.726 8.495 21.029 18 28 2.59 1.585 5.174 2.896 8 4l2.758 1.078c10.048 2.857 20.992 1.579 30.242-3.078 3.328-1.884 3.328-1.884 6-4l2.438-1.625c6.386-5.919 10.46-12.97 12.562-21.375l.688-2.563c1.46-11.387-1.24-21.524-7.747-30.964-6.386-8.134-14.227-12.235-23.941-15.473-16.558-1.088-28.519 1.802-40.25 14.25Z' />
    <path d='M405.5 240c6.502 3.84 11.773 9.445 14.063 16.742 1.677 8.655.838 16.58-3.563 24.258-2.77 3.85-6.051 7.089-9.465 10.367-10.946 10.568-17.561 21.777-17.848 37.195-.014 13.93 5.716 24.24 14.125 35.063 4.282 5.948 4.685 12.811 3.72 19.898-2.683 12.506-12.55 20.65-21.16 29.441l-2.852 2.92a5789.247 5789.247 0 0 1-25.99 26.393 3113.884 3113.884 0 0 0-17.41 17.714 2039.545 2039.545 0 0 1-15.265 15.512 745.21 745.21 0 0 0-8.043 8.196c-19.14 19.821-19.14 19.821-28.83 20.61-2.33-.031-4.66-.129-6.982-.309-2.232.175-4.462.379-6.688.625-18.72 1.166-37.823.756-56.312-2.625 1.401-3.172 3.05-5.29 5.51-7.723l2.204-2.196 2.42-2.379 2.548-2.529c2.305-2.287 4.614-4.569 6.924-6.85 2.422-2.395 4.837-4.797 7.252-7.198 8.224-8.176 16.46-16.34 24.704-24.495a5795.62 5795.62 0 0 0 13.643-13.54c2.4-2.389 4.803-4.773 7.215-7.149 2.695-2.656 5.378-5.325 8.058-7.996l2.401-2.349c8.612-8.642 14.095-18.716 14.496-31.096-.415-12.283-6.043-23.173-14.89-31.61-10.897-8.292-22.017-10.832-35.485-9.89-13.59 2.756-21.892 11.607-31.294 21.162a5610.916 5610.916 0 0 1-3.348 3.377c-2.39 2.41-4.778 4.823-7.163 7.238a5144.678 5144.678 0 0 1-11.335 11.43 16947.01 16947.01 0 0 0-32.216 32.492c-5.932 6-11.875 11.991-17.83 17.97a2658.991 2658.991 0 0 0-11.26 11.38 1439.651 1439.651 0 0 1-7.005 7.044 470.65 470.65 0 0 0-3.24 3.286 403.837 403.837 0 0 1-4.434 4.454l-2.502 2.526C130 469 130 469 127.403 468.881c-3.469-1.272-6.383-3.235-9.403-5.318l-1.991-1.356c-9.02-6.2-17.634-12.816-25.822-20.082l-1.582-1.37c-1.437-1.31-1.437-1.31-3.605-3.755 0-4.5 0-4.5 2.726-7.23l1.843-1.874 2.059-2.032 2.16-2.18c2.405-2.42 4.823-4.825 7.241-7.23a5367.559 5367.559 0 0 1 17.78-17.804c3.425-3.416 6.846-6.836 10.264-10.258l1.473-1.475 2.962-2.966c9.27-9.281 18.55-18.55 27.836-27.813 7.962-7.944 15.914-15.899 23.857-23.86a21476.042 21476.042 0 0 1 30.656-30.67l1.47-1.47c3.415-3.41 6.825-6.826 10.233-10.243 4.593-4.606 9.197-9.2 13.808-13.79 1.69-1.684 3.377-3.372 5.06-5.064 2.3-2.311 4.613-4.61 6.928-6.905l2.005-2.032c7.61-7.484 15.044-10.436 25.74-10.489 9.654.214 15.841 5.292 23.38 10.74 10.564 6.896 23.533 8.431 35.78 5.997 12.53-3.833 21.105-11.186 29.818-20.665 9.36-9.91 22.47-13.52 35.421-7.687ZM239 8c-.418 11.274-6.633 17.837-14.438 25.313C215.994 41.555 209.181 50.763 208 63l-.246 2.54C207.224 76.695 210.787 87.464 218 96c8.503 9.232 19.587 13.39 32 14 17.815-.703 29.249-11.832 40.813-24 5.908-6.026 13.059-8.124 21.312-8.313 10.342.139 16.792 4.12 24.984 10.016 9.14 6.45 19.247 9.264 30.38 7.856 14.571-2.74 23.29-10.087 33.34-20.512l2.024-2.083a324.767 324.767 0 0 0 3.97-4.174c.613-.635 1.225-1.27 1.857-1.923l1.648-1.746C412 64 412 64 414.034 64.179c3.181 1.328 5.448 3.718 7.904 6.071l1.713 1.617A768.65 768.65 0 0 1 429 77l1.729 1.663c11.307 10.916 20.96 22.823 30.05 35.632 1.172 1.637 2.39 3.24 3.608 4.842C466 122 466 122 466.133 124.46c-1.691 3.79-4.3 6.298-7.258 9.164l-1.895 1.856c-26.694 25.574-60.587 36-97.043 35.894l-2.36-.004c-32.675-.136-63.977-7.823-95.62-15.16-31.81-7.448-31.81-7.448-63.957-13.211l-2.416-.385C159.767 137.065 120.353 139.883 88 157l-1.963 1.011C70.863 165.873 58.326 176.265 46 188l-1.984 1.86c-13.322 12.832-24.287 29.038-33.625 44.93L9 237H8c.56-34.121 12.135-68.097 28-98l1.132-2.179C43.103 125.361 49.977 115.118 58 105l2.223-2.867c12.736-16.256 27.411-31.68 44.097-43.902a404.93 404.93 0 0 0 4.993-3.735C145.106 27.781 193.78 7.454 239 8Z' />
    <path d='M253 7c50.306-1.738 108.982 14.434 148 47-2.322 5.308-6.525 8.893-10.563 12.938l-2.345 2.42c-7.562 7.6-14.796 12.68-25.717 12.954-10.276-.137-16.706-4.364-24.723-10.414-9.637-6.898-20.725-8.672-32.37-7.507-14.956 2.777-25.737 12.648-35.782 23.421-6.032 6.043-12.069 8.332-20.563 8.688-8.672-.344-14.943-3.7-21.21-9.594C222.209 80.815 220.919 74.082 221 66c.815-10.589 7.141-17.304 14.438-24.375C245.713 31.642 251.444 21.319 253 7ZM290 365c5.648 5.573 9.53 10.027 10.3 18.184.058 15.923-8.616 23.25-19.23 34.002l-2.624 2.668a7382.522 7382.522 0 0 1-23.81 24.058 4338.813 4338.813 0 0 0-17.554 17.77 2456.22 2456.22 0 0 1-12.401 12.524 986.006 986.006 0 0 0-7.381 7.477 835.625 835.625 0 0 1-8.241 8.296l-2.43 2.523c-5.438 5.339-5.438 5.339-8.85 5.795-2.135-.24-2.135-.24-5.779-1.297l-3.36-.889c-3.656-1.19-7.31-2.383-10.952-3.611l-2-.666C164.371 488.048 153.587 483.52 143 478c0-4.05 1.369-4.748 4.198-7.586l1.369-1.385c1.522-1.536 3.055-3.062 4.587-4.587l3.272-3.293a3175.54 3175.54 0 0 1 8.927-8.938c2.487-2.484 4.97-4.973 7.453-7.462 5.862-5.876 11.732-11.744 17.606-17.607a8104.982 8104.982 0 0 0 18.131-18.16 8162.45 8162.45 0 0 1 15.573-15.596c3.103-3.1 6.203-6.203 9.296-9.313 2.913-2.928 5.836-5.847 8.766-8.758a684.329 684.329 0 0 0 3.202-3.213C258.267 359.1 273.951 352.024 290 365ZM120.875 251.875c5.866 5.866 8.19 11.764 8.5 19.938-.135 7.23-2.064 12.362-6.625 17.937-7.615 6.23-13.837 9.11-23.75 8.25-6.498-1.28-11.703-3.901-16-9-4.655-7.2-6.883-13.933-5.375-22.5 1.985-7.589 5.896-12.88 12.34-17.313 10.365-6.048 21.358-3.542 30.91 2.688Z' />
  </svg>
);
