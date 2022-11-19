-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-11-2022 a las 22:23:44
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `beelegantmen_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
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
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`sku`, `name`, `detail`, `price`, `image`, `category_id`, `brand_id`) VALUES
<<<<<<< HEAD
(1, 'Producto 1', 'Ut ultrices vel augue vestibulum et ultrices posuere cubilia curae.', 4154, 'ambo1.jpg', 1, 1),
(3, 'Producto 3', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 9928, 'ambo2.jpg', 1, 1),
(4, 'Producto 4', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 3074, 'corbata4.jpg', 3, 6),
(5, 'Producto 5', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 7004, 'camisa1.jpg', 2, 1),
(6, 'Producto 6', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 5351, 'ambo3.jpg', 1, 1),
(7, 'Producto 7', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 4157, 'saco1.jpg', 5, 6),
(8, 'Producto 8', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 7291, 'corbata1.jpg', 3, 2),
(9, 'Producto 9', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 6462, 'camisa2.jpg', 2, 2),
(10, 'Producto 10', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 6011, 'corbata2.jpg', 3, 6),
(11, 'Producto 11', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 4377, 'ambo4.jpg', 1, 1),
(12, 'Producto 12', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', 5970, 'saco2.jpg', 5, 1),
(13, 'Producto 13', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 9082, 'corbata3.jpg', 3, 6),
(14, 'Producto 14', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 8673, 'pantalon1.jpg', 4, 4),
(15, 'Producto 15', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 7955, 'ambo5.jpg', 1, 3),
(16, 'Producto 16', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', 5700, 'corbata5.jpg', 3, 2),
(17, 'Producto 17', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 3925, 'pantalon2.jpg', 4, 5),
(18, 'Producto 18', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 7931, 'saco3.jpg', 5, 6),
(19, 'Producto 19', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 9290, 'ambo6.jpg', 1, 6),
(20, 'Producto 20', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 6659, 'saco4.jpg', 5, 2),
(21, 'Producto 21', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 8411, 'camisa3.jpg', 2, 2),
(22, 'Producto 22', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 7108, 'pantalon3.jpg', 4, 6),
(23, 'Producto 23 ', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 3350, 'zapato1.jpg', 6, 1),
(24, 'Producto 24', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 2210, 'saco5.jpg', 5, 3),
(25, 'Producto 25', 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 5876, 'saco6.jpg', 5, 6),
(26, 'Producto 26', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 8954, 'zapato2.jpg', 6, 4),
(27, 'Producto 27', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 7445, 'ambo7.jpg', 1, 4),
(28, 'Producto 28', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 5623, 'pantalon4.jpg', 4, 2),
(29, 'Producto 29', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 5155, 'corbata6.jpg', 3, 2),
(30, 'Producto 30', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 2131, 'corbata7.jpg', 3, 2),
(31, 'Producto 31', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 2378, 'saco7.jpg', 5, 5),
(32, 'Producto 32', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 2578, 'saco8.jpg', 5, 3),
(33, 'Producto 33', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 5969, 'camisa4.jpg', 2, 5),
(34, 'Producto 34', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 8923, 'pantalon5.jpg', 4, 3),
(35, 'Producto 35', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 9681, 'zapato3.jpg', 6, 2),
(36, 'Producto 36', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 9075, 'saco9.jpg', 5, 5),
(37, 'Producto 37', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 8868, 'corbata8.jpg', 3, 6),
(38, 'Producto 38', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 7364, 'corbata_1.png', 3, 2),
(39, 'Producto 39', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 3902, 'pantalon6.jpg', 4, 6),
(40, 'Producto 40', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 3049, 'corbata_2.png', 3, 2),
(41, 'Producto 41', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 3791, 'camisa5.jpg', 2, 3),
(42, 'Producto 42', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 2505, 'pantalon7.jpg', 4, 3),
(43, 'Producto 43', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 8530, 'saco10.jpg', 5, 3),
(44, 'Producto 44', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 4812, 'pantalon8.jpg', 4, 5),
(45, 'Producto 45', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 7866, 'corbata_3.png', 3, 4),
(46, 'Producto 46', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', 3850, 'camisa6.jpg', 2, 5),
(47, 'Producto 47', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 7884, 'saco11.jpg', 5, 3),
(48, 'Producto 48', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 9071, 'pantalon9.jpg', 4, 2),
(49, 'Producto 49', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 9388, 'zapato4.jpg', 6, 2),
(50, 'Producto 50', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 4576, 'ambo8.jpg', 1, 3),
(51, 'Producto 51', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', 6556, 'zapato5.jpg', 6, 4),
(52, 'Camisa 1', 'Camisa blanca mangas largas ', 1800, 'camisa7.jpg', 2, 6);
=======
(1, 'Traje Zanetti', 'Ut ultrices vel augue vestibulum et ultrices posuere cubilia curae.', 4154, 'ambo1.jpg', 1, 1),
(3, 'Traje Rudi', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 9928, 'ambo2.jpg', 1, 1),
(4, 'Corbata Azul', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 3074, 'corbata4.jpg', 3, 6),
(5, 'Camisa Anglet', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 7004, 'camisa1.jpg', 2, 1),
(6, 'Traje Gorks', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 5351, 'ambo3.jpg', 1, 1),
(7, 'Saco Rudi', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 4157, 'saco1.jpg', 5, 6),
(8, 'Corbata Marron', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 7291, 'corbata1.jpg', 3, 2),
(9, 'Camisa Bibineca', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 6462, 'camisa2.jpg', 2, 2),
(10, 'Corbata Negra', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 6011, 'corbata2.jpg', 3, 6),
(11, 'Traje Classic FX', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 4377, 'ambo4.jpg', 1, 1),
(12, 'Saco Romperi', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', 5970, 'saco2.jpg', 5, 1),
(13, 'Corbata Roja', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 9082, 'corbata3.jpg', 3, 6),
(14, 'Pantalon Pata', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 8673, 'pantalon1.jpg', 4, 4),
(15, 'Traje Trench Coat', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 7955, 'ambo5.jpg', 1, 3),
(16, 'Corbata Rosada', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', 5700, 'corbata5.jpg', 3, 2),
(17, 'Pantalon Algodon', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 3925, 'pantalon2.jpg', 4, 5),
(18, 'Saco Gaulle', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 7931, 'saco3.jpg', 5, 6),
(19, 'Traje Blue Navy', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 9290, 'ambo6.jpg', 1, 6),
(20, 'Saco Vichii', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 6659, 'saco4.jpg', 5, 2),
(21, 'Camisa Baster', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 8411, 'camisa3.jpg', 2, 2),
(22, 'Pantalon Comfort', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 7108, 'pantalon3.jpg', 4, 6),
(23, 'Zapato Marron Classic', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 3350, 'zapato1.jpg', 6, 1),
(24, 'Saco Armani', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 2210, 'saco5.jpg', 5, 3),
(25, 'Saco Exchange', 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 5876, 'saco6.jpg', 5, 6),
(26, 'Zapato Negro Classic', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 8954, 'zapato2.jpg', 6, 4),
(27, 'Traje Grey Ash', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 7445, 'ambo7.jpg', 1, 4),
(28, 'Pantalon Classic', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 5623, 'pantalon4.jpg', 4, 2),
(29, 'Corbata Azul Marino', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 5155, 'corbata6.jpg', 3, 2),
(30, 'Corbata Polska', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 2131, 'corbata7.jpg', 3, 2),
(31, 'Saco Tarkov', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 2378, 'saco7.jpg', 5, 5),
(32, 'Saco Customs', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 2578, 'saco8.jpg', 5, 3),
(33, 'Camisa Rovira', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 5969, 'camisa4.jpg', 2, 5),
(34, 'Pantalon Rudi', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 8923, 'pantalon5.jpg', 4, 3),
(35, 'Zapato Old Money', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 9681, 'zapato3.jpg', 6, 2),
(36, 'Saco Woods', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 9075, 'saco9.jpg', 5, 5),
(37, 'Corbata Rayada', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 8868, 'corbata8.jpg', 3, 6),
(39, 'Pantalon Old Cl', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 3902, 'pantalon6.jpg', 4, 6),
(41, 'Camisa Sebbe', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 3791, 'camisa5.jpg', 2, 3),
(42, 'Pantalon Antic', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 2505, 'pantalon7.jpg', 4, 3),
(43, 'Saco Old CI', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 8530, 'saco10.jpg', 5, 3),
(44, 'Pantalon Menswear', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 4812, 'pantalon8.jpg', 4, 5),
(46, 'Camisa Rot', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', 3850, 'camisa6.jpg', 2, 5),
(47, 'Saco Bibeneca', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 7884, 'saco11.jpg', 5, 3),
(48, 'Pantalon XLC', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 9071, 'pantalon9.jpg', 4, 2),
(49, 'Botas Lisas', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 9388, 'zapato4.jpg', 6, 2),
(50, 'Traje Azul Suecia', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 4576, 'ambo8.jpg', 1, 3),
(51, 'Zapato Carpincho', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', 6556, 'zapato5.jpg', 6, 4);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`sku`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `brand_id` (`brand_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `sku` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

>>>>>>> b4391c26d5342b74623adff4d85a3f8b2bdd277c

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
  `avatar` varchar(200) NOT NULL,
  `admin` tinyint(1) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `avatar`, `admin`) VALUES
(1, 'Ad', 'Min', 'admin@beelegantmen.com', '$2a$10$WZ1ghFBsVqo2H1dWxl3UNewjyso/jij9codyIdiifi6L.p5hxo40i', 'avatar-1667862812056.png', 1),
(2, 'Diego', 'Maradona', 'diegomaradona@usuario.com', '$2a$10$LekOymw.tXGnOo1SEA.3vufihE3p6VvvH6bl9nHZ.KMUJ9xQv.2aO', 'avatar-1667862874381.png', 0);


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
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`);
COMMIT;