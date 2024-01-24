-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 23, 2024 at 06:36 AM
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
-- Database: `node-prisma`
--

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `id` varchar(191) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` varchar(191) DEFAULT NULL,
  `published` tinyint(1) NOT NULL DEFAULT 0,
  `authorId` varchar(191) NOT NULL,
  `viewerId` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `blog`
--

INSERT INTO `blog` (`id`, `title`, `content`, `published`, `authorId`, `viewerId`) VALUES
('4354b451-3c1c-4ba6-a6ca-8615ccb6d4ff', 'New Blog', 'This is a new Blog', 1, '7967d43b-da6c-4add-ab2b-a0a48bbd3468', 'ba03a6fd-ffed-457b-8e7a-2d9674174737'),
('50170887-d63d-4a25-ba94-69a11ccfcb92', 'many Blog 3', 'This is part of many blogs 3', 1, '7967d43b-da6c-4add-ab2b-a0a48bbd3468', 'ba03a6fd-ffed-457b-8e7a-2d9674174737'),
('66705681-765f-4fe2-bc5b-bd8853c8a265', 'John John blogs', 'This is a john john blog', 1, '1be09778-384e-471f-8a82-e2d85cf131ec', 'ba03a6fd-ffed-457b-8e7a-2d9674174737'),
('6e7ebbc6-7e67-4ee8-8bc5-024c960431ed', 'John John blogs', 'This is a john john blog', 1, '1be09778-384e-471f-8a82-e2d85cf131ec', 'ba03a6fd-ffed-457b-8e7a-2d9674174737'),
('7fed2588-ab78-47bb-9490-5b7ae57cf5a5', 'many Blog 1', 'This is part of many blogs 1', 1, '7967d43b-da6c-4add-ab2b-a0a48bbd3468', 'ba03a6fd-ffed-457b-8e7a-2d9674174737'),
('a7336fa6-fcbb-45f8-b48b-d197dfdd53c2', 'Another Blog', 'This is a more updated blog', 1, '7967d43b-da6c-4add-ab2b-a0a48bbd3468', 'ba03a6fd-ffed-457b-8e7a-2d9674174737'),
('b4d6efd9-2db2-457e-934a-a4e32ac1785b', 'many Blog 2', 'This is part of many blogs 2', 1, '7967d43b-da6c-4add-ab2b-a0a48bbd3468', 'ba03a6fd-ffed-457b-8e7a-2d9674174737');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` varchar(191) NOT NULL,
  `firstName` varchar(191) DEFAULT NULL,
  `lastName` varchar(191) DEFAULT NULL,
  `age` int(11) NOT NULL,
  `email` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `firstName`, `lastName`, `age`, `email`, `createdAt`, `updatedAt`) VALUES
('1be09778-384e-471f-8a82-e2d85cf131ec', 'john', 'john', 22, 'johnjohn@gmail.com', '2024-01-22 11:42:49.569', '2024-01-22 11:42:49.569'),
('7967d43b-da6c-4add-ab2b-a0a48bbd3468', 'Ann', 'maina', 24, 'annmaina@gmail.com', '2024-01-22 09:57:31.905', '2024-01-22 11:11:58.826'),
('ba03a6fd-ffed-457b-8e7a-2d9674174737', 'james', 'njuguna', 22, 'james@gmail.com', '2024-01-22 09:40:12.277', '2024-01-22 09:40:12.277');

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('05e28593-3f40-412e-8a55-861ea61e97bd', '5b975e6f9971abaa1343b72ffed4d79b233e926092ff1cfeda7f8582e80e3900', '2024-01-22 09:33:36.395', '20240122093333_init', NULL, NULL, '2024-01-22 09:33:33.129', 1),
('414a1468-5129-475b-984c-07809f3ad5d5', '1f263c8b2fef0b79cde7d0ea3a8439206e0696aed778d4dfbd7b3c48e3bc7bbe', '2024-01-22 06:26:40.111', '20240122062639_init', NULL, NULL, '2024-01-22 06:26:39.609', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Blog_authorId_fkey` (`authorId`),
  ADD KEY `Blog_viewerId_fkey` (`viewerId`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `User_email_key` (`email`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `blog`
--
ALTER TABLE `blog`
  ADD CONSTRAINT `Blog_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `user` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Blog_viewerId_fkey` FOREIGN KEY (`viewerId`) REFERENCES `user` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
