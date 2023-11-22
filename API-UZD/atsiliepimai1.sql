-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 22, 2023 at 03:36 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `atsiliepimai1`
--

-- --------------------------------------------------------

--
-- Table structure for table `atsiliepimai`
--

CREATE TABLE `atsiliepimai` (
  `id` int(11) NOT NULL,
  `vardas` varchar(45) NOT NULL,
  `pastas` varchar(45) NOT NULL,
  `vertinimas` int(1) NOT NULL,
  `tekstas` varchar(255) NOT NULL,
  `laikas` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `atsiliepimai`
--

INSERT INTO `atsiliepimai` (`id`, `vardas`, `pastas`, `vertinimas`, `tekstas`, `laikas`) VALUES
(1, 'Jonas', 'jonas@example.com', 5, 'Labai patenkintas paslaugomis.', '2023-04-11'),
(2, 'Laura', 'laura@example.com', 2, 'Vidutiniškas vertinimas.', '2023-04-15'),
(3, 'Tomas', 'tomas@example.com', 4, 'Geras aptarnavimas.', '2023-03-27'),
(4, 'Elena', 'elena@example.com', 3, 'Patenkinamas paslaugas.', '2023-05-01'),
(5, 'Gabrielė', 'gabriele@example.com', 1, 'Labai nepatenkinamas paslaugas.', '2023-05-10'),
(6, 'Petras', 'petras@example.com', 5, 'Puikiai pasitarnavo!', '2023-04-08'),
(7, 'Rita', 'rita@example.com', 3, 'Vidutiniškas vertinimas.', '2023-03-19'),
(8, 'Antanas', 'antanas@example.com', 4, 'Geras aptarnavimas.', '2023-03-30'),
(9, 'Inga', 'inga@example.com', 2, 'Patenkinamas paslaugas.', '2023-04-25'),
(10, 'Justinas', 'justinas@example.com', 5, 'Nuostabus aptarnavimas.', '2023-05-05');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `atsiliepimai`
--
ALTER TABLE `atsiliepimai`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
