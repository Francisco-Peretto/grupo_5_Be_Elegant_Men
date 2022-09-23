-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 23, 2022 at 02:42 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `beelegantmen_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`id`, `name`) VALUES
(1, 'Brooks Brothers'),
(2, 'Colantuono'),
(3, 'Devre'),
(4, 'Ermenegildo Zegna'),
(5, 'Hermes'),
(6, 'Luigi Di Carlo');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'ambos'),
(2, 'camisas'),
(3, 'corbatas'),
(4, 'pantalones'),
(5, 'sacos'),
(6, 'zapatos');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `sku` int(10) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL,
  `detail` text NOT NULL,
  `price` int(10) UNSIGNED NOT NULL,
  `image` varchar(200) NOT NULL,
  `category_id` int(10) UNSIGNED NOT NULL,
  `brand_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`sku`, `name`, `detail`, `price`, `image`, `category_id`, `brand_id`) VALUES
(1, 'Producto 1', 'Ut ultrices vel augue vestibulum et ultrices posuere cubilia curae.', 4154, 'ambo_2.jpg', 1, 1),
(2, 'Producto 2', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', 8134, 'pantalon_vestir_1.png', 4, 6),
(3, 'Producto 3', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 9928, 'ambo_3.png', 1, 1),
(4, 'Producto 4', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 3074, 'corbata_1.png', 3, 6),
(5, 'Producto 5', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 7004, 'camisa_5.png', 2, 1),
(6, 'Producto 6', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 5351, 'ambo_2.jpg', 1, 1),
(7, 'Producto 7', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 4157, 'saco_2.jpg', 5, 6),
(8, 'Producto 8', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 7291, 'corbata_2.png', 3, 2),
(9, 'Producto 9', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 6462, 'camisa_6.png', 2, 2),
(10, 'Producto 10', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 6011, 'corbata_3.png', 3, 6),
(11, 'Producto 11', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 4377, 'ambo_2.jpg', 1, 1),
(12, 'Producto 12', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', 5970, 'saco_3.jpg', 5, 1),
(13, 'Producto 13', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 9082, 'corbata_4.jpg', 3, 6),
(14, 'Producto 14', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 8673, 'pantalon_vestir_2.png', 4, 4),
(15, 'Producto 15', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 7955, 'ambo_3.png', 1, 3),
(16, 'Producto 16', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', 5700, 'corbata_5.jpg', 3, 2),
(17, 'Producto 17', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 3925, 'pantalon_vestir_3.png', 4, 5),
(18, 'Producto 18', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 7931, 'saco_4.png', 5, 6),
(19, 'Producto 19', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 9290, 'ambo_2.jpg', 1, 6),
(20, 'Producto 20', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 6659, 'saco_5.png', 5, 2),
(21, 'Producto 21', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 8411, 'camisa_7.png', 2, 2),
(22, 'Producto 22', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 7108, 'pantalon_vestir_1.png', 4, 6),
(23, 'Producto 23 ', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 3350, 'zapatos_2.PNG', 6, 1),
(24, 'Producto 24', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 2210, 'saco_2.jpg', 5, 3),
(25, 'Producto 25', 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 5876, 'saco_3.jpg', 5, 6),
(26, 'Producto 26', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 8954, 'zapatos_3.png', 6, 4),
(27, 'Producto 27', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 7445, 'ambo_3.png', 1, 4),
(28, 'Producto 28', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 5623, 'pantalon_vestir_2.png', 4, 2),
(29, 'Producto 29', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 5155, 'corbata_6.png', 3, 2),
(30, 'Producto 30', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 2131, 'corbata_7.png', 3, 2),
(31, 'Producto 31', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 2378, 'saco_4.png', 5, 5),
(32, 'Producto 32', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 2578, 'saco_5.png', 5, 3),
(33, 'Producto 33', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 5969, 'camisa_5.png', 2, 5),
(34, 'Producto 34', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 8923, 'pantalon_vestir_3.png', 4, 3),
(35, 'Producto 35', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 9681, 'zapatos_2.PNG', 6, 2),
(36, 'Producto 36', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 9075, 'saco_2.jpg', 5, 5),
(37, 'Producto 37', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 8868, 'corbata_8.png', 3, 6),
(38, 'Producto 38', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 7364, 'corbata_1.png', 3, 2),
(39, 'Producto 39', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 3902, 'pantalon_vestir_1.png', 4, 6),
(40, 'Producto 40', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 3049, 'corbata_2.png', 3, 2),
(41, 'Producto 41', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 3791, 'camisa_6.png', 2, 3),
(42, 'Producto 42', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 2505, 'pantalon_vestir_2.png', 4, 3),
(43, 'Producto 43', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 8530, 'saco_3.jpg', 5, 3),
(44, 'Producto 44', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 4812, 'pantalon_vestir_3.png', 4, 5),
(45, 'Producto 45', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 7866, 'corbata_3.png', 3, 4),
(46, 'Producto 46', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', 3850, 'camisa_7.png', 2, 5),
(47, 'Producto 47', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 7884, 'saco_4.png', 5, 3),
(48, 'Producto 48', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 9071, 'pantalon_vestir_1.png', 4, 2),
(49, 'Producto 49', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 9388, 'zapatos_3.png', 6, 2),
(50, 'Producto 50', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 4576, 'ambo_2.jpg', 1, 3),
(51, 'Producto 51', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', 6556, 'zapatos_2.PNG', 6, 4);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `image` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `image`) VALUES
(1, 'Mateo', 'González', 'correo_fantasma@gmail.com', '$2a$10$FQag5sflLp/Zz6kWvCvNC.J61MvPDjvX2pKhgJUPrCN7JQiiQlmku', 'default.png'),
(2, 'Karlos', 'Market', 'km@gmail.com', '$2a$10$drdmHWZDmTpsjEst2BhcMOnxX/qoZdA1k0e6qAWiFPURYaljChngO', 'image-1662048555871.jpg'),
(3, 'Diego Armando', 'Maradona', 'diego@maradona.com', '$2a$10$PSzFD5XEGnGEJIk0IwORceTgUugsDeHZ.V6e2K7tUVblE9k80egia', 'image-1663000464342.png'),
(4, 'ad', 'min', 'admin@beelegantmen.com', '$2a$10$ttemeksug08c/Iva5WM3r.Vgn4je0USNcRRybExS99M7L4hk8al3.', 'image-1663892577863.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`sku`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `brand_id` (`brand_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `sku` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
