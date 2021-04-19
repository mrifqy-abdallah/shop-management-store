-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 19, 2021 at 09:44 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sshop_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `customer_id` int(11) NOT NULL,
  `name_customer` varchar(40) NOT NULL,
  `address_customer` text DEFAULT NULL,
  `phone_customer` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`customer_id`, `name_customer`, `address_customer`, `phone_customer`) VALUES
(1, 'Customer', NULL, NULL),
(2, 'Königlich Essen', NULL, '08234892143245'),
(3, 'Hanari Carnes', NULL, NULL),
(4, 'Que Delícia', 'Jl Terusan Arjuna Slt Ruko Kebon Jeruk Baru Bl A/1, Kebon Jeruk, Jakarta', '032823423244'),
(5, 'Wolski  Zajazd', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `exceptions`
--

CREATE TABLE `exceptions` (
  `Id` bigint(20) NOT NULL,
  `GUID` varchar(40) NOT NULL,
  `ApplicationName` varchar(50) NOT NULL,
  `MachineName` varchar(50) NOT NULL,
  `CreationDate` datetime NOT NULL,
  `Type` varchar(100) NOT NULL,
  `IsProtected` tinyint(1) NOT NULL DEFAULT 1,
  `Host` varchar(100) DEFAULT NULL,
  `Url` varchar(500) DEFAULT NULL,
  `HTTPMethod` varchar(10) DEFAULT NULL,
  `IPAddress` varchar(40) DEFAULT NULL,
  `Source` varchar(100) DEFAULT NULL,
  `Message` varchar(1000) DEFAULT NULL,
  `Detail` longtext DEFAULT NULL,
  `StatusCode` int(11) DEFAULT NULL,
  `SQL` longtext DEFAULT NULL,
  `DeletionDate` datetime DEFAULT NULL,
  `FullJson` longtext DEFAULT NULL,
  `ErrorHash` int(11) DEFAULT NULL,
  `DuplicateCount` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `languages`
--

CREATE TABLE `languages` (
  `Id` int(11) NOT NULL,
  `LanguageId` varchar(10) NOT NULL,
  `LanguageName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `languages`
--

INSERT INTO `languages` (`Id`, `LanguageId`, `LanguageName`) VALUES
(1, 'en', 'English'),
(2, 'ru', 'Russian'),
(3, 'es', 'Spanish'),
(4, 'tr', 'Turkish'),
(5, 'de', 'German'),
(6, 'zh-CN', 'Chinese (Simplified)'),
(7, 'it', 'Italian'),
(8, 'pt', 'Portuguese'),
(9, 'pt-BR', 'Portuguese (Brazil)'),
(10, 'fa', 'Farsi'),
(11, 'vi-VN', 'Vietnamese (Vietnam)');

-- --------------------------------------------------------

--
-- Table structure for table `managers`
--

CREATE TABLE `managers` (
  `manager_id` int(11) NOT NULL,
  `fullname_manager` varchar(40) NOT NULL,
  `gender_manager` int(11) NOT NULL,
  `degree_manager` text NOT NULL,
  `phone_manager` varchar(20) NOT NULL,
  `email_manager` varchar(40) NOT NULL,
  `store_manager` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `managers`
--

INSERT INTO `managers` (`manager_id`, `fullname_manager`, `gender_manager`, `degree_manager`, `phone_manager`, `email_manager`, `store_manager`) VALUES
(1, 'Maria Anders', 2, 'Sarjana Ekonomi', '08213783984', 'mariaanders@dummy.com', 3),
(2, 'Ana Trujillo', 2, 'Sarjana Ekonomi Syariah', '0432039422324', 'anatru@dummy.com', 2),
(3, 'Antonio Moreno', 1, 'Sarjana Ekonomi Tidak Syariah', '021431289421', 'antoniomoreno@dummy.com', 2),
(4, 'Thomas Hardy', 1, 'Sarjana Tidak Ekonomi', '0843592834', 'thomashard@dummy.com', 4);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `datetime_order` datetime NOT NULL,
  `customer_id` int(11) NOT NULL,
  `worker_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `datetime_order`, `customer_id`, `worker_id`) VALUES
(1, '2020-11-30 19:55:00', 3, 2),
(2, '2020-11-30 19:57:00', 4, 2),
(3, '2020-11-30 19:58:00', 2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `order_list`
--

CREATE TABLE `order_list` (
  `order_list_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `unit_price_order` decimal(11,2) NOT NULL,
  `quantity_order` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `order_list`
--

INSERT INTO `order_list` (`order_list_id`, `order_id`, `product_id`, `unit_price_order`, `quantity_order`) VALUES
(1, 1, 1, '2300.00', 6),
(2, 1, 3, '33000.00', 5),
(3, 1, 12, '53999.00', 2),
(4, 1, 8, '11500.00', 1),
(5, 2, 3, '33000.00', 3),
(6, 2, 10, '5200.00', 2),
(7, 2, 14, '15999.00', 1),
(8, 2, 4, '6000.00', 4),
(9, 3, 2, '1500.00', 4),
(10, 3, 14, '15999.00', 4),
(11, 3, 9, '29000.00', 6),
(12, 3, 1, '2300.00', 2),
(13, 3, 15, '24999.00', 2),
(14, 3, 12, '53999.00', 6);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `name_product` varchar(40) NOT NULL,
  `type_id` int(11) NOT NULL,
  `vendor_id` int(11) NOT NULL,
  `weight_product` float NOT NULL,
  `size_product` text NOT NULL,
  `stock_quantity_product` int(11) DEFAULT NULL,
  `buy_price_product` decimal(11,2) NOT NULL,
  `sale_price_product` decimal(11,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `name_product`, `type_id`, `vendor_id`, `weight_product`, `size_product`, `stock_quantity_product`, `buy_price_product`, `sale_price_product`) VALUES
(1, 'Chai', 1, 3, 2.34, '11 x 8 x 10', 39, '1800.00', '2300.00'),
(2, 'Chef Anton\'s Cajun Seasoning', 2, 4, 99.2, '15 x 7', 13, '1000.00', '1500.00'),
(3, 'Grandma\'s Boysenberry Spread', 2, 5, 1000, '15 x 20', 120, '25000.00', '33000.00'),
(4, 'Mishi Kobe Niku', 6, 6, 500, '20 x 20 x 10', 60, '4000.00', '6000.00'),
(5, 'Konbu', 8, 8, 2000, '40 x 30 x 20', 94, '60000.00', '72000.00'),
(6, 'Queso Cabrales', 4, 7, 100, '10 x 15 x 10', 0, '2100.00', '3300.00'),
(7, 'Alice Mutton', 6, 2, 1200, '200 x 10', 0, '39000.00', '47000.00'),
(8, 'Teatime Chocolate Biscuits', 3, 1, 120, '30 x 30 x 8', 87, '9200.00', '11500.00'),
(9, 'Gustaf\'s Knäckebröd', 5, 9, 250, '45 x 20 x 20', 105, '21000.00', '29000.00'),
(10, 'Guaraná Fantástica', 1, 10, 355, '7 x 7 x 13', 19, '4500.00', '5200.00'),
(11, 'NuNuCa Nuß-Nougat-Creme', 3, 11, 450, '20 x 20 x 10', 20, '14000.00', '19999.00'),
(12, 'Rössle Sauerkraut', 7, 12, 100, '15 x 24', 168, '4500.00', '53999.00'),
(13, 'Nord-Ost Matjeshering', 8, 13, 200, '50 x 10', 22, '123000.00', '144899.00'),
(14, 'Gorgonzola Telino', 4, 14, 100, '4 x 5 x 6', 87, '12500.00', '15999.00'),
(15, 'Rhönbräu Klosterbier', 1, 2, 355, '4 x 5 x 6', 24, '1500.00', '24999.00');

-- --------------------------------------------------------

--
-- Table structure for table `product_types`
--

CREATE TABLE `product_types` (
  `type_id` int(11) NOT NULL,
  `name_type` varchar(40) NOT NULL,
  `description_type` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product_types`
--

INSERT INTO `product_types` (`type_id`, `name_type`, `description_type`) VALUES
(1, 'Beverages', 'Soft drinks, coffees, teas, beers, and ales'),
(2, 'Condiments', 'Sweet and savory sauces, relishes, spreads, and seasonings.'),
(3, 'Confections', 'Desserts, candies, and sweet breads'),
(4, 'Dairy Products', 'Cheeses'),
(5, 'Grains/Cereals', 'Breads, crackers, pasta, and cereal'),
(6, 'Meat/Poultry', 'Prepared meats'),
(7, 'Produce', 'Dried fruit and bean curd'),
(8, 'Seafood', 'Seaweed and fish');

-- --------------------------------------------------------

--
-- Table structure for table `product_vendors`
--

CREATE TABLE `product_vendors` (
  `vendor_id` int(11) NOT NULL,
  `name_vendor` varchar(40) NOT NULL,
  `logo_vendor` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product_vendors`
--

INSERT INTO `product_vendors` (`vendor_id`, `name_vendor`, `logo_vendor`) VALUES
(1, 'Specialty Biscuits, Ltd.', NULL),
(2, 'Pavlova, Ltd.', NULL),
(3, 'Exotic Liquids', NULL),
(4, 'New Orleans Cajun Delights', NULL),
(5, 'Grandma Kelly\'s Homestead', NULL),
(6, 'Tokyo Traders', NULL),
(7, 'Cooperativa de Quesos \'Las Cabras\'', NULL),
(8, 'Mayumi\'s', NULL),
(9, 'PB Knäckebröd AB', NULL),
(10, 'Refrescos Americanas LTDA', NULL),
(11, 'Heli Süßwaren GmbH & Co. KG', NULL),
(12, 'Plutzer Lebensmittelgroßmärkte AG', NULL),
(13, 'Nord-Ost-Fisch Handelsgesellschaft mbH', NULL),
(14, 'Formaggi Fortini s.r.l.', NULL),
(15, 'Norske Meierier', NULL),
(16, 'Bigfoot Breweries', NULL),
(17, 'Svensk Sjöföda AB', NULL),
(18, 'Aux joyeux ecclésiastiques', 'VendorsLogos/00000/00000018_ksmf25wt5g2e2.png'),
(19, 'New England Seafood Cannery', NULL),
(20, 'Leka Trading', NULL),
(21, 'Lyngbysild', NULL),
(22, 'Zaanse Snoepfabriek', NULL),
(23, 'Karkki Oy', NULL),
(24, 'G\'day, Mate', NULL),
(25, 'Ma Maison', NULL),
(26, 'Pasta Buttini s.r.l.', NULL),
(27, 'Escargots Nouveaux', NULL),
(28, 'Gai pâturage', NULL),
(29, 'Forêts d\'érables', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `rolepermissions`
--

CREATE TABLE `rolepermissions` (
  `RolePermissionId` bigint(20) NOT NULL,
  `RoleId` int(11) NOT NULL,
  `PermissionKey` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `rolepermissions`
--

INSERT INTO `rolepermissions` (`RolePermissionId`, `RoleId`, `PermissionKey`) VALUES
(11, 2, 'Master:BranchManager'),
(10, 3, 'Master:Worker');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `RoleId` int(11) NOT NULL,
  `RoleName` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`RoleId`, `RoleName`) VALUES
(2, 'Manager'),
(3, 'Worker'),
(4, 'Super Manager');

-- --------------------------------------------------------

--
-- Table structure for table `stores`
--

CREATE TABLE `stores` (
  `store_id` int(11) NOT NULL,
  `name_store` varchar(40) NOT NULL,
  `address_line_store` text NOT NULL,
  `sub_district_store` varchar(40) NOT NULL,
  `district_store` varchar(40) NOT NULL,
  `province_store` varchar(40) NOT NULL,
  `postal_code_store` varchar(11) NOT NULL,
  `phone_store` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `stores`
--

INSERT INTO `stores` (`store_id`, `name_store`, `address_line_store`, `sub_district_store`, `district_store`, `province_store`, `postal_code_store`, `phone_store`) VALUES
(1, 'SShop Jendral Sudirman', 'Jl Jend Sudirman', 'Kartasura', 'Sukoharjo', 'Jawa Tengah', '79876', '0271876324823'),
(2, 'SShop Citarum', 'Jl Citarum Tgh E-I/E-2', 'Kembangsari', 'Semarang', 'Jawa Tengah', '98798', '027317839219822'),
(3, 'SShop Cipinang', 'Jl Cipinang Cempedak 14', 'Menteng', 'Jakarta Pusat', 'DKI Jakarta', '32423', '02843328491244'),
(4, 'SShop Sultan Hasanudin', 'Jl Sultan Hasanuddin 15', 'Pangkajene', 'Palembang', 'Sumatra Selatan', '83229', '0283242324542');

-- --------------------------------------------------------

--
-- Table structure for table `userpermissions`
--

CREATE TABLE `userpermissions` (
  `UserPermissionId` bigint(20) NOT NULL,
  `UserId` int(11) NOT NULL,
  `PermissionKey` varchar(100) NOT NULL,
  `Granted` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `userpreferences`
--

CREATE TABLE `userpreferences` (
  `UserPreferenceId` int(11) NOT NULL,
  `UserId` bigint(20) NOT NULL,
  `PreferenceType` varchar(100) NOT NULL,
  `Name` varchar(200) NOT NULL,
  `Value` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `userroles`
--

CREATE TABLE `userroles` (
  `UserRoleId` bigint(20) NOT NULL,
  `UserId` int(11) NOT NULL,
  `RoleId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `userroles`
--

INSERT INTO `userroles` (`UserRoleId`, `UserId`, `RoleId`) VALUES
(1, 2, 2),
(2, 3, 3);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `UserId` int(11) NOT NULL,
  `Username` varchar(100) NOT NULL,
  `DisplayName` varchar(100) NOT NULL,
  `Email` varchar(100) DEFAULT NULL,
  `Source` varchar(4) NOT NULL,
  `PasswordHash` varchar(86) NOT NULL,
  `PasswordSalt` varchar(10) NOT NULL,
  `LastDirectoryUpdate` datetime DEFAULT NULL,
  `UserImage` varchar(100) DEFAULT NULL,
  `InsertDate` datetime NOT NULL,
  `InsertUserId` int(11) NOT NULL,
  `UpdateDate` datetime DEFAULT NULL,
  `UpdateUserId` int(11) DEFAULT NULL,
  `IsActive` smallint(6) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`UserId`, `Username`, `DisplayName`, `Email`, `Source`, `PasswordHash`, `PasswordSalt`, `LastDirectoryUpdate`, `UserImage`, `InsertDate`, `InsertUserId`, `UpdateDate`, `UpdateUserId`, `IsActive`) VALUES
(1, 'admin', 'admin', 'admin@dummy.com', 'site', 'rfqpSPYs0ekFlPyvIRTXsdhE/qrTHFF+kKsAUla7pFkXL4BgLGlTe89GDX5DBysenMDj8AqbIZPybqvusyCjwQ', 'hJf_F', NULL, NULL, '2014-01-01 00:00:00', 1, NULL, NULL, 1),
(2, 'andersmaria', 'Maria Anders', NULL, 'site', 'ybpLn7b22JXCYxfahSFIAKqlyOlsmx49cReMshtqdbE1uLaJiny4HTo47tjf1sLEZsjkQCFx41oaSLU1HNBgZw', 'csggo', NULL, NULL, '2020-12-01 10:26:18', 1, '2020-12-01 10:26:30', 1, 1),
(3, 'philipcramer', 'Philip Cramer', NULL, 'site', '/NtDu4OjCTIw4ndmKG0y4xsjXirDoy9czkDj2aDQJF/OByKucyEFSWg0xa0T7ICV2GkUrfq8y1b5xoPWh4CU8g', 'ulp3j', NULL, NULL, '2020-12-01 22:24:33', 1, '2020-12-01 22:25:22', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `versioninfo`
--

CREATE TABLE `versioninfo` (
  `Version` bigint(20) NOT NULL,
  `AppliedOn` datetime DEFAULT NULL,
  `Description` varchar(1024) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `versioninfo`
--

INSERT INTO `versioninfo` (`Version`, `AppliedOn`, `Description`) VALUES
(20141103140000, '2020-10-17 15:34:54', 'DefaultDB_20141103_140000_Initial'),
(20141111113000, '2020-10-17 15:34:55', 'DefaultDB_20141111_113000_Permissions'),
(20160515072600, '2020-10-17 15:34:55', 'DefaultDB_20160515_072600_UserPreferences'),
(20161029130000, '2020-10-17 15:34:56', 'DefaultDB_20161029_130000_ExceptionLog');

-- --------------------------------------------------------

--
-- Table structure for table `workers`
--

CREATE TABLE `workers` (
  `worker_id` int(11) NOT NULL,
  `fullname_worker` varchar(40) NOT NULL,
  `nickname_worker` varchar(20) NOT NULL,
  `gender_worker` int(11) NOT NULL,
  `degree_worker` text NOT NULL,
  `phone_worker` varchar(20) NOT NULL,
  `email_worker` varchar(40) NOT NULL,
  `store_worker` int(11) NOT NULL,
  `job_title_worker` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `workers`
--

INSERT INTO `workers` (`worker_id`, `fullname_worker`, `nickname_worker`, `gender_worker`, `degree_worker`, `phone_worker`, `email_worker`, `store_worker`, `job_title_worker`) VALUES
(1, 'Philip Cramer', 'Phil', 1, 'Teknik Administrasi Pertokoan', '089324823913', 'philipreal@dummy', 3, 'Cashier'),
(2, 'Annette Roulet', 'Anne', 2, 'Teknik Administrasi Pertokoan', '083242428219', 'annetteroule@dummy.com', 3, 'Cashier');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`customer_id`);

--
-- Indexes for table `exceptions`
--
ALTER TABLE `exceptions`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `IX_Exceptions_GUID_App_Del_Cre` (`GUID`,`ApplicationName`,`DeletionDate`,`CreationDate`),
  ADD KEY `IX_Exceptions_Hash_App_Cre_Del` (`ErrorHash`,`ApplicationName`,`CreationDate`,`DeletionDate`),
  ADD KEY `IX_Exceptions_App_Del_Cre` (`ApplicationName`,`DeletionDate`,`CreationDate`);

--
-- Indexes for table `languages`
--
ALTER TABLE `languages`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `managers`
--
ALTER TABLE `managers`
  ADD PRIMARY KEY (`manager_id`),
  ADD KEY `fk_manager_store` (`store_manager`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `fk_customer_id` (`customer_id`),
  ADD KEY `fk_worker_id` (`worker_id`);

--
-- Indexes for table `order_list`
--
ALTER TABLE `order_list`
  ADD PRIMARY KEY (`order_list_id`),
  ADD KEY `fk_order_id` (`order_id`),
  ADD KEY `fk_product_id` (`product_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `type_id` (`type_id`,`vendor_id`),
  ADD KEY `fk_product_vendor_id` (`vendor_id`);

--
-- Indexes for table `product_types`
--
ALTER TABLE `product_types`
  ADD PRIMARY KEY (`type_id`);

--
-- Indexes for table `product_vendors`
--
ALTER TABLE `product_vendors`
  ADD PRIMARY KEY (`vendor_id`);

--
-- Indexes for table `rolepermissions`
--
ALTER TABLE `rolepermissions`
  ADD PRIMARY KEY (`RolePermissionId`),
  ADD UNIQUE KEY `UQ_RolePerm_RoleId_PermKey` (`RoleId`,`PermissionKey`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`RoleId`);

--
-- Indexes for table `stores`
--
ALTER TABLE `stores`
  ADD PRIMARY KEY (`store_id`);

--
-- Indexes for table `userpermissions`
--
ALTER TABLE `userpermissions`
  ADD PRIMARY KEY (`UserPermissionId`),
  ADD UNIQUE KEY `UQ_UserPerm_UserId_PermKey` (`UserId`,`PermissionKey`);

--
-- Indexes for table `userpreferences`
--
ALTER TABLE `userpreferences`
  ADD PRIMARY KEY (`UserPreferenceId`),
  ADD UNIQUE KEY `IX_UserPref_UID_PrefType_Name` (`UserId`,`PreferenceType`,`Name`);

--
-- Indexes for table `userroles`
--
ALTER TABLE `userroles`
  ADD PRIMARY KEY (`UserRoleId`),
  ADD UNIQUE KEY `UQ_UserRoles_UserId_RoleId` (`UserId`,`RoleId`),
  ADD KEY `IX_UserRoles_RoleId_UserId` (`RoleId`,`UserId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`UserId`);

--
-- Indexes for table `versioninfo`
--
ALTER TABLE `versioninfo`
  ADD UNIQUE KEY `UC_Version` (`Version`);

--
-- Indexes for table `workers`
--
ALTER TABLE `workers`
  ADD PRIMARY KEY (`worker_id`),
  ADD KEY `fk_worker_office` (`store_worker`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `customer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `exceptions`
--
ALTER TABLE `exceptions`
  MODIFY `Id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `languages`
--
ALTER TABLE `languages`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `managers`
--
ALTER TABLE `managers`
  MODIFY `manager_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `order_list`
--
ALTER TABLE `order_list`
  MODIFY `order_list_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `product_types`
--
ALTER TABLE `product_types`
  MODIFY `type_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `product_vendors`
--
ALTER TABLE `product_vendors`
  MODIFY `vendor_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `rolepermissions`
--
ALTER TABLE `rolepermissions`
  MODIFY `RolePermissionId` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `RoleId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `stores`
--
ALTER TABLE `stores`
  MODIFY `store_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `userpermissions`
--
ALTER TABLE `userpermissions`
  MODIFY `UserPermissionId` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `userpreferences`
--
ALTER TABLE `userpreferences`
  MODIFY `UserPreferenceId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `userroles`
--
ALTER TABLE `userroles`
  MODIFY `UserRoleId` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `UserId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `workers`
--
ALTER TABLE `workers`
  MODIFY `worker_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `managers`
--
ALTER TABLE `managers`
  ADD CONSTRAINT `fk_manager_store` FOREIGN KEY (`store_manager`) REFERENCES `stores` (`store_id`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `fk_customer_id` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`),
  ADD CONSTRAINT `fk_worker_id` FOREIGN KEY (`worker_id`) REFERENCES `workers` (`worker_id`);

--
-- Constraints for table `order_list`
--
ALTER TABLE `order_list`
  ADD CONSTRAINT `fk_order_id` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`),
  ADD CONSTRAINT `fk_product_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `fk_product_type_id` FOREIGN KEY (`type_id`) REFERENCES `product_types` (`type_id`),
  ADD CONSTRAINT `fk_product_vendor_id` FOREIGN KEY (`vendor_id`) REFERENCES `product_vendors` (`vendor_id`);

--
-- Constraints for table `rolepermissions`
--
ALTER TABLE `rolepermissions`
  ADD CONSTRAINT `FK_RolePermissions_RoleId` FOREIGN KEY (`RoleId`) REFERENCES `roles` (`RoleId`);

--
-- Constraints for table `userpermissions`
--
ALTER TABLE `userpermissions`
  ADD CONSTRAINT `FK_UserPermissions_UserId` FOREIGN KEY (`UserId`) REFERENCES `users` (`UserId`);

--
-- Constraints for table `userroles`
--
ALTER TABLE `userroles`
  ADD CONSTRAINT `FK_UserRoles_RoleId` FOREIGN KEY (`RoleId`) REFERENCES `roles` (`RoleId`),
  ADD CONSTRAINT `FK_UserRoles_UserId` FOREIGN KEY (`UserId`) REFERENCES `users` (`UserId`);

--
-- Constraints for table `workers`
--
ALTER TABLE `workers`
  ADD CONSTRAINT `fk_worker_store` FOREIGN KEY (`store_worker`) REFERENCES `stores` (`store_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
