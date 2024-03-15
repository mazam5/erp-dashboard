# Simplified UI for the ERP System

### Table of Contents

- [Description](#description)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)

## Description

This project is a simplified UI for the ERP System. It is a web application that allows users to interact with the ERP System. The application is built using the React library and the Material-UI framework.

## Technologies

- React - JavaScript library for building user interfaces
- Material-UI - React components for faster and easier web development
- React Router - Declarative routing for React
- Redux Toolkit - State management library for React
- @nivo/pie - Pie chart component for React
- @nivo/bar - Bar chart component for React
- @fullcalendar/react - Calendar component for React

## Installation

To run the application, follow these steps:

- Prerequisites:

  [Node.js](https://nodejs.org/) and [git](https://git-scm.com/) must be installed on your system.

  [Visual Studio Code](https://code.visualstudio.com/) is recommended as the code editor.

1. Clone the repository by using the terminal/command prompt:

   ```sh
   git clone https://github.com/mazam5/erp-dashboard
   ```

2. Install the required packages

   ```sh
   npm install
   or
   yarn install
   ```

3. Start the application
   ```sh
   npm start
   ```
   The application will be running on http://localhost:3000

## Usage

The application is a simplified UI for the ERP System. It allows users to interact with the ERP System. The application has the following features:

- Dashboard: The dashboard displays the key performance indicators (KPIs) of the ERP System. It includes the total number of orders, the total number of customers, the total number of products, and the total revenue.
- Products: The products page displays the list of products. It allows users to view the details of a product, add a new product, and edit an existing product.

  - The products can be added, edited, and deleted.
  - To add a new product, click on the "Add Product" button.
  <p>
    <img width="400" src="/screenshots/gifs/add-product.gif">
   </p>
  - To edit a product, click on the Pencil Icon button on a product's row.
  <p>
   <img width="400" src="/screenshots/gifs/edit-product.gif">
   </p>
  - To delete a product, click on the Trash Icon button on a product's row.
  <p>
    <img width="400" src="/screenshots/gifs/delete-product.gif">
    </p>

- Orders: The orders page displays the list of orders. It allows users to view the details of an order, edit an existing order status, and delete an order.

  - The orders can be edited and deleted.
  - To view the details of an order, click on the "View" button on an order's row.
  <p>
     <img width="400" src="/screenshots/gifs/view-order.gif">
     </p>
  - To edit an order, click on the Pencil Icon button on an order's row.
  <p>
    <img width="400" src="/screenshots/gifs/edit-order.gif">
    </p>
  - To delete an order, click on the Trash Icon button on an order's row.
  <p>
    <img width="400" src="/screenshots/gifs/delete-order.gif">
    </p>

- Calendar: The calendar page displays the calendar of deliveries. It allows users to view the details of a delivery.

## Screenshots

<body>
<div>
<img alt="screenshots" src="/screenshots/light-mode/1.dashboard.png">
</div>
<div>
<img alt="screenshots" src="/screenshots/light-mode/2.products.png">
</div>
<div>
<img alt="screenshots" src="/screenshots/light-mode/6.orders.png">
</div>
<div>
<img alt="screenshots" src="/screenshots/light-mode/10.calendar.png">
</div>
<div>
<img alt="screenshots" src="/screenshots/dark-mode/1.dashboard.png">
</div>
<div>
<img alt="screenshots" src="/screenshots/dark-mode/2.products.png">
</div>
<div>
<img alt="screenshots" src="/screenshots/dark-mode/6.orders.png">
</div>
<div>
<img alt="screenshots" src="/screenshots/dark-mode/10.calendar.png">
</div>
</body>
