# About
This is a project that I did during my two-months internship at [ByTechnology](https://www.facebook.com/ByTechnologyIndonesia/) at Sleman, Yogyakarta.  
This is a web-based project made using [Serenity platform](https://serenity.is/), and I designed it into a management system for shops.

## What can it do?
Here are some things that the web can do as a shops-management-system: 
- Authenticate users.
- Managing the record of workers and assigning a role for each one. The roles can be made inside the system and different privileges can be given to each role.
- Managing the record of products.
- Handling purchasement
- And it has a dashboard that gives insights such as the total purchase of today, running out of product(s), etc.

## If you want to run this project on your computer...
- Serenity is a platform for Visual Studio only (at least now), so make sure to use Visual Studio (2019 or above) to open this project.
- Also, don't forget to import [sshop_db.sql](sshop_db.sql) to your DBMS. That is the database file for the project. 
- You might also need to edit the project's setting at [appsetting.json](SShopManagementSystem/SShopManagementSystem.Web/appsettings.json). At the `ConnectionString` part, you can change the value of `Uid` and `Pwd` into the username and password of your own localhost DBMS.
- If you can run the project succesfully, you will be prompted to insert username and password in order to explore the web. There you can enter _admin_ and _serenity_ as the username and password respectively.
