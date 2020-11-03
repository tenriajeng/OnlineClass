-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 04, 2020 at 10:49 AM
-- Server version: 10.1.26-MariaDB
-- PHP Version: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `a_pos`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `username` varchar(30) NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`username`, `password`) VALUES
('admin', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

CREATE TABLE `menu` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `price` int(11) NOT NULL,
  `img` text NOT NULL,
  `category` varchar(10) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `menu`
--

INSERT INTO `menu` (`id`, `name`, `price`, `img`, `category`, `created_at`, `updated_at`) VALUES
(1, 'Ayam Bakar', 20000, 'https://selerasa.com/wp-content/uploads/2015/12/images_daging_ayam-bakar-pedas-manis.jpg', 'Food', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'Ikan Bakar', 22000, 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Gurame_bakar_kecap_1.JPG', 'Food', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'Nasi Goreng', 12000, 'https://www.masakapahariini.com/wp-content/uploads/2018/04/cara-membuat-nasi-goreng-seafood-620x440.jpg', 'Food', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'Coto Makassar', 15000, 'https://selerasa.com/wp-content/uploads/2016/11/images_Kue_cubit_Resep-coto-makassar.jpg', 'Food', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'Ayam Geprek', 13000, 'https://www.masakapahariini.com/wp-content/uploads/2018/04/resep_ayam_bakar_kecap_manis_MAHI-780x440.jpg', 'Food', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'Sate Ayam', 14000, 'https://cdn02.indozone.id/re/content/2019/07/01/3esnJq/t_5d19c617f2ce1.jpg?w=700&q=85', 'Food', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 'Permen', 1000, 'https://cdn1-production-images-kly.akamaized.net/aGsJSE-5PlZOIBar0T3L1ecKXRA=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2054451/original/070398300_1522833158-iStock-153502589.jpg', 'Food', '0000-00-00 00:00:00', '2019-12-31 21:25:48'),
(20, 'Cappucino Hangat', 15000, 'http://res.cloudinary.com/arulcloud/image/upload/v1577719113/POS-IMG/oxxi6k5wofwkxv9nwluu.jpg', 'Beverage', '2019-12-30 22:18:30', '2020-01-01 11:41:32'),
(23, 'Es Green Tea', 15000, 'http://res.cloudinary.com/arulcloud/image/upload/v1577725162/POS-IMG/i5wnm2huve8e72seuqxo.jpg', 'Beverage', '2019-12-30 23:59:20', '2020-01-01 11:41:08'),
(31, 'Es Thai Tea', 14000, 'http://res.cloudinary.com/arulcloud/image/upload/v1577728931/POS-IMG/yazxyfos0rvv5rejv4dn.jpg', 'Beverage', '2019-12-31 01:02:09', '2020-01-01 11:40:55'),
(32, 'Es Batu', 500, 'https://asset.kompas.com/crops/EFKwPkVmKtdqbcP4fsjjWXicSEk=/0x0:0x0/750x500/data/photo/2014/06/20/1613424shutterstock-149768285p.jpg', 'Beverage', '2019-12-31 13:40:35', '2020-01-01 01:47:29'),
(35, 'Es Teler', 13000, 'http://res.cloudinary.com/arulcloud/image/upload/v1577820253/POS-IMG/ixduuobzppe6vhyxvwrs.jpg', 'Beverage', '2020-01-01 01:35:32', '2020-01-02 15:28:57'),
-- --------------------------------------------------------

--
-- Table structure for table `transaction`
--

CREATE TABLE `transaction` (
  `id` int(11) NOT NULL,
  `transaction_code` varchar(20) NOT NULL,
  `cashier` varchar(30) NOT NULL,
  `total` int(11) NOT NULL,
  `ppn` int(11) NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `transaction`
--

INSERT INTO `transaction` (`id`, `transaction_code`, `cashier`, `total`, `ppn`, `created_at`) VALUES
(3, '1200114638850', 'Aku', 41800, 3800, '2019-01-01 07:06:49'),
(4, '12001183650141', 'Afsori', 104500, 9500, '2019-01-01 11:36:57'),
(5, '12001192353317', 'Kenzo', 42350, 3850, '2019-01-01 12:24:09'),
(6, '120012162252', 'Saya', 79200, 7200, '2019-01-01 14:06:22'),
(7, '120012174795', 'Saya', 42900, 3900, '2020-01-01 14:07:47'),
(8, '1200122537207', 'Afsori', 36300, 3300, '2020-01-01 15:05:37'),
(9, '12001221417790', 'Aku', 10450, 950, '2020-01-01 15:14:17'),
(10, '12001221625931', 'Saya', 75350, 6850, '2020-01-01 15:16:25'),
(11, '12001221819174', 'Aku', 15950, 1450, '2020-01-01 15:18:19'),

-- --------------------------------------------------------

--
-- Table structure for table `transaction_menu`
--

CREATE TABLE `transaction_menu` (
  `id` int(11) NOT NULL,
  `transaction_code` varchar(20) NOT NULL,
  `id_menu` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `transaction_menu`
--

INSERT INTO `transaction_menu` (`id`, `transaction_code`, `id_menu`, `quantity`, `price`, `created_at`) VALUES
(2, '1200114638850', 35, 1, 9000, '2019-01-01 07:06:49'),
(3, '1200114638850', 32, 2, 500, '2019-01-01 07:06:49'),
(4, '1200114638850', 31, 2, 14000, '2019-01-01 07:06:49'),
(5, '12001183650141', 35, 2, 9000, '2019-01-01 11:36:57'),
(6, '12001183650141', 7, 1, 1000, '2019-01-01 11:36:57'),
(7, '12001183650141', 2, 2, 22000, '2019-01-01 11:36:57'),
(8, '12001183650141', 1, 1, 20000, '2019-01-01 11:36:57'),
(9, '12001183650141', 3, 1, 12000, '2019-01-01 11:36:57'),
(10, '12001192353317', 32, 1, 500, '2019-01-01 12:24:09'),
(11, '12001192353317', 31, 1, 14000, '2019-01-01 12:24:09'),
(12, '12001192353317', 35, 1, 9000, '2019-01-01 12:24:09'),
(13, '12001192353317', 23, 1, 15000, '2019-01-01 12:24:09'),
(14, '120012162252', 6, 2, 14000, '2019-01-01 14:06:22'),
(15, '120012162252', 35, 2, 9000, '2019-01-01 14:06:22'),
(16, '120012162252', 3, 1, 12000, '2019-01-01 14:06:22'),
(17, '120012162252', 7, 1, 1000, '2019-01-01 14:06:22'),
(18, '120012162252', 5, 1, 13000, '2019-01-01 14:06:22'),
(19, '120012174795', 35, 1, 9000, '2020-01-01 14:07:47'),
(20, '120012174795', 23, 1, 15000, '2020-01-01 14:07:47'),
(21, '120012174795', 20, 1, 15000, '2020-01-01 14:07:47'),
(22, '1200122537207', 35, 2, 9000, '2020-01-01 15:05:37'),
(23, '1200122537207', 20, 1, 15000, '2020-01-01 15:05:37'),
(24, '12001221417790', 35, 1, 9000, '2020-01-01 15:14:17'),
(25, '12001221417790', 32, 1, 500, '2020-01-01 15:14:17'),
(26, '12001221625931', 31, 1, 14000, '2020-01-01 15:16:25'),
(27, '12001221625931', 32, 1, 500, '2020-01-01 15:16:25'),
(28, '12001221625931', 2, 1, 22000, '2020-01-01 15:16:25'),
(29, '12001221625931', 1, 1, 20000, '2020-01-01 15:16:25'),
(30, '12001221625931', 3, 1, 12000, '2020-01-01 15:16:25'),
(31, '12001221819174', 31, 1, 14000, '2020-01-01 15:18:19'),
(32, '12001221819174', 32, 1, 500, '2020-01-01 15:18:19'),


--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transaction_menu`
--
ALTER TABLE `transaction_menu`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `menu`
--
ALTER TABLE `menu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `transaction`
--
ALTER TABLE `transaction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT for table `transaction_menu`
--
ALTER TABLE `transaction_menu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=114;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
