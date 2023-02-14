-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-02-2023 a las 23:37:51
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `xarxamujeres`
--

--
-- Volcado de datos para la tabla `activities`
--

INSERT INTO `activities` (`id`, `owner_id`, `name`, `status`, `photo`, `category`, `comment`, `startdate`, `enddate`) VALUES
(1, 'joancoronado12@gmail.com', 'Actividad 1', 'Empezada', '/images/activities/a1.png', 'Events', 'Texto de ejemplo para la Actividad 1', '2023-02-14 23:20:45', '2023-02-14 23:20:45');

--
-- Volcado de datos para la tabla `activities_associated`
--

INSERT INTO `activities_associated` (`activities_id`, `associated_id`) VALUES
(1, 1),
(1, 2);

--
-- Volcado de datos para la tabla `associated`
--

INSERT INTO `associated` (`id`, `date`, `name`, `photo`, `pc`, `loc`, `prov`, `bithdate`, `disab_deg`, `disab_type`, `phone`, `mail`) VALUES
(1, '2023-02-14 23:19:43', 'Alejandro', '/images/associated/acc.png', 46030, 'Valencia', 'Valencia', '2023-02-14 23:19:43', 0, 'ninguna', NULL, NULL),
(2, '2023-02-14 23:21:47', 'Victor', '/images/associated/vmz.png', 46910, 'Torrent', 'Valencia', '2023-02-14 23:21:47', 0, 'ninguna', NULL, NULL);

--
-- Volcado de datos para la tabla `employee`
--

INSERT INTO `employee` (`email`, `name`, `password`, `profile`, `photo`) VALUES
('joancoronado12@gmail.com', 'Joan Coronado', 'pass', 'tecnico', '/images/employees/jcc.png');

--
-- Volcado de datos para la tabla `files`
--

INSERT INTO `files` (`date`, `employee_id`, `referred_id`, `name`, `file`) VALUES
('2023-02-14 23:23:17', 'joancoronado12@gmail.com', 1, 'Fichero 1', '/files/file1.docx'),
('2023-02-14 23:23:45', 'joancoronado12@gmail.com', 1, 'Fichero 2', '/files/file2.docx');

--
-- Volcado de datos para la tabla `remarks`
--

INSERT INTO `remarks` (`id`, `author_id`, `title`, `description`, `discharge_date`) VALUES
(1, 'joancoronado12@gmail.com', 'Joan tiene sueño', 'Tengo sueño', '2023-02-14 23:24:38');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
