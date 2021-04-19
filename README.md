# About
This is a project that I did during my two-months internship at [ByTechnology](https://www.facebook.com/ByTechnologyIndonesia/) at Sleman, Yogyakarta.  
This is a web-based project made using [Serenity platform](https://serenity.is/), and I designed it into a management system for shops.

## What can it do?
Here's some things that the web can do as a shops-management-system:  
- Managing the record of workers and assigning a role for each one. The roles can be made inside the system and different privileges can be given to each role.
- Authenticate users.
- Managing the record of products.
- Handling purchasement
- And it has a dashboard that gives insights such as the total purchase of today, running out of product(s), etc.

## If you want to run this project in your computer..
- Serenity is a platform for Visual Studio only (at least now), so make sure to use Visual Studio (2019 or above).
- Also, don't forget to import [sshop_db.sql](sshop_db.sql) to your DBMS. This is the database file for the project. 
- You might also need to edit the project's setting at [appsetting.json](SShopManagementSystem/SShopManagementSystem.Web/appsettings.json). At the **ConnectionString** part, you can change the value of _Uid_ and _Pwd_ into the username and password of your localhost DBMS.
