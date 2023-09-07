# Imgur Gallery Web App

## Overview

This repository contains a web application that allows users to browse the Imgur gallery. It leverages the Imgur API to fetch images and display them in a responsive grid. Users can select different gallery sections, specify sorting options, and view image details.

## Features

- Imgur API Integration
- Responsive Design
- Gallery Sections (Hot, Top, User)
- Sorting Options
- Image Details (Large Image, Title, Description, Votes, Score)
- Infinite Scroll Pagination

## Technologies Used

- React
- React Router
- Redux Toolkit
- Redux Persist
- RTK Query
- Material-UI
- Swiper.js
- React Masonry
- TypeScript

## Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/mateokadiu/imgur-gallery.git

   ```

2. Navigate to the project directory:

   ```shell
   cd imgur-gallery

   ```

3. Install dependencies:

   ```shell
   npm install

   ```

4. Start the development server:
   ```shell
   npm start
   ```

## Usage

The app should now be running at http://[your_ip_address]:3000. Open it in your web browser to browse the Imgur gallery.

## Project Structure

- **src/components**: Reusable UI components.
- **src/hooks**: Custom hooks, including `useReachedBottom` for infinite scroll.
- **src/pages**: Individual pages of the app.
- **src/data**: API queries, state management and configuration.

## License

This project is open-source and available under the MIT License.

## Contributing

Contributions are welcome! Feel free to open issues and pull requests.

## Acknowledgments

- Thanks to the Imgur API for providing access to the gallery data.

## Contact

If you have any questions or suggestions, please contact [mateokadiu18@gmail.com](mailto:mateokadiu18@gmail.com).
