-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: car_shop
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT = @@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS = @@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION = @@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE = @@TIME_ZONE */;
/*!40103 SET TIME_ZONE = '+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS = @@UNIQUE_CHECKS, UNIQUE_CHECKS = 0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS = @@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS = 0 */;
/*!40101 SET @OLD_SQL_MODE = @@SQL_MODE, SQL_MODE = 'NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES = @@SQL_NOTES, SQL_NOTES = 0 */;

--
-- Table structure for table `clients`
--

DROP TABLE IF EXISTS `clients`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clients`
(
    `client_id` bigint NOT NULL AUTO_INCREMENT,
    `user_id`   bigint DEFAULT NULL,
    PRIMARY KEY (`client_id`),
    UNIQUE KEY `UK_smrp6gi0tckq1w5rnd7boyowu` (`user_id`),
    CONSTRAINT `FKtiuqdledq2lybrds2k3rfqrv4` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 2
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clients`
--

LOCK TABLES `clients` WRITE;
/*!40000 ALTER TABLE `clients`
    DISABLE KEYS */;
INSERT INTO `clients`
VALUES (1, 10),
       (2, 11),
       (3, 12),
       (4, 13),
       (5, 14),
       (6, 15),
       (7, 16);
/*!40000 ALTER TABLE `clients`
    ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dealers`
--

DROP TABLE IF EXISTS `dealers`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dealers`
(
    `dealer_id`  bigint NOT NULL AUTO_INCREMENT,
    `manager_id` bigint DEFAULT NULL,
    `user_id`    bigint DEFAULT NULL,
    PRIMARY KEY (`dealer_id`),
    UNIQUE KEY `UK_10jndvam70sjubvckk4l6cvxr` (`user_id`),
    KEY `FKocxses6vlpt0hrrv8a1tp4anh` (`manager_id`),
    CONSTRAINT `FKocxses6vlpt0hrrv8a1tp4anh` FOREIGN KEY (`manager_id`) REFERENCES `managers` (`manager_id`),
    CONSTRAINT `FKqoq67umfy4ce8rtk8872opdpp` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 2
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dealers`
--

LOCK TABLES `dealers` WRITE;
/*!40000 ALTER TABLE `dealers`
    DISABLE KEYS */;
INSERT INTO `dealers`
VALUES (1, 1, 6),
       (2, 1, 7),
       (3, 2, 8),
       (4, 2, 9);
/*!40000 ALTER TABLE `dealers`
    ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `managers`
--

DROP TABLE IF EXISTS `managers`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `managers`
(
    `manager_id`  bigint NOT NULL AUTO_INCREMENT,
    `showroom_id` bigint DEFAULT NULL,
    `user_id`     bigint DEFAULT NULL,
    PRIMARY KEY (`manager_id`),
    UNIQUE KEY `UK_1ckf1cflviafpcqluwjrpmrp2` (`showroom_id`),
    UNIQUE KEY `UK_6sl3ig444d4qy4c2kq6ju96pf` (`user_id`),
    CONSTRAINT `FK15075knvq6w78g82uhxp0cot7` FOREIGN KEY (`showroom_id`) REFERENCES `showrooms` (`showroom_id`),
    CONSTRAINT `FKsp1db43yf1nqhswrpbwmlnhb9` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 2
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `managers`
--

LOCK TABLES `managers` WRITE;
/*!40000 ALTER TABLE `managers`
    DISABLE KEYS */;
INSERT INTO `managers`
VALUES (1, 1, 1),
       (2, 2, 2);
/*!40000 ALTER TABLE `managers`
    ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders`
(
    `order_id`        bigint NOT NULL AUTO_INCREMENT,
    `delivery_date`   date   DEFAULT NULL,
    `price`           double NOT NULL,
    `submission_date` date   NOT NULL,
    `client_id`       bigint DEFAULT NULL,
    `dealer_id`       bigint DEFAULT NULL,
    `showroom_id`     bigint DEFAULT NULL,
    `vehicle_id`      bigint DEFAULT NULL,
    PRIMARY KEY (`order_id`),
    UNIQUE KEY `UK_dcur7gfd2j79cffe5lh8exv7k` (`vehicle_id`),
    KEY `FKm2dep9derpoaehshbkkatam3v` (`client_id`),
    KEY `FKc174cj48olwptv2nlqy2iuiy4` (`dealer_id`),
    KEY `FKmnt30htq2m1fo9q06giu3q3gv` (`showroom_id`),
    CONSTRAINT `FKc174cj48olwptv2nlqy2iuiy4` FOREIGN KEY (`dealer_id`) REFERENCES `dealers` (`dealer_id`),
    CONSTRAINT `FKm2dep9derpoaehshbkkatam3v` FOREIGN KEY (`client_id`) REFERENCES `clients` (`client_id`),
    CONSTRAINT `FKmnt30htq2m1fo9q06giu3q3gv` FOREIGN KEY (`showroom_id`) REFERENCES `showrooms` (`showroom_id`),
    CONSTRAINT `FKov6eiiyhqkasfj9jlt2s6wj5p` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicles` (`vehicle_id`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 3
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders`
    DISABLE KEYS */;
INSERT INTO `orders`
VALUES (1, '2023-07-21', 7500, '2023-01-19', 1, 1, 1, 1),
       (2, '2023-08-21', 7200, '2023-01-21', 2, 2, 1, 14),
       (3, '2023-09-21', 6800, '2023-01-19', 4, 3, 2, 9),
       (4, '2023-10-21', 7300, '2023-01-31', 3, 4, 2, 4),
       (5, '2023-11-21', 7900, '2023-01-01', 7, 2, 1, 5),
       (6, '2023-12-21', 6400, '2023-01-13', 5, 3, 2, 13),
       (7, '2023-01-21', 6600, '2023-01-15', 8, 1, 1, 17),
       (8, '2023-02-21', 7100, '2023-01-07', 6, 4, 2, 18),
       (9, '2023-03-21', 6900, '2023-01-21', 2, 2, 1, 7),
       (10, '2023-04-21', 6700, '2023-01-19', 9, 1, 1, 12);
/*!40000 ALTER TABLE `orders`
    ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `repairers`
--

DROP TABLE IF EXISTS `repairers`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `repairers`
(
    `repairer_id` bigint NOT NULL AUTO_INCREMENT,
    `manager_id`  bigint DEFAULT NULL,
    `user_id`     bigint DEFAULT NULL,
    PRIMARY KEY (`repairer_id`),
    UNIQUE KEY `UK_jir7kgfmhixhol7e9nsdrfnvs` (`user_id`),
    KEY `FK26cm5ppabkxw37cb0ryhgjckg` (`manager_id`),
    CONSTRAINT `FK26cm5ppabkxw37cb0ryhgjckg` FOREIGN KEY (`manager_id`) REFERENCES `managers` (`manager_id`),
    CONSTRAINT `FK6hhbhf0kh2tys42uvkjhlfnx3` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 2
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `repairers`
--

LOCK TABLES `repairers` WRITE;
/*!40000 ALTER TABLE `repairers`
    DISABLE KEYS */;
INSERT INTO `repairers`
VALUES (1, 1, 3),
       (2, 1, 4),
       (3, 2, 5);
/*!40000 ALTER TABLE `repairers`
    ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services`
--

DROP TABLE IF EXISTS `services`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `services`
(
    `service_id`     bigint NOT NULL AUTO_INCREMENT,
    `admission_date` date   NOT NULL,
    `description`    varchar(255) DEFAULT NULL,
    `execution_date` date         DEFAULT NULL,
    `price`          double NOT NULL,
    `repairer_id`    bigint       DEFAULT NULL,
    `vehicle_id`     bigint       DEFAULT NULL,
    PRIMARY KEY (`service_id`),
    KEY `FKbk7kf7ncfovb4yrnofvjdb6bh` (`repairer_id`),
    KEY `FKlph60ok9q3oibqawro4eawrj` (`vehicle_id`),
    CONSTRAINT `FKbk7kf7ncfovb4yrnofvjdb6bh` FOREIGN KEY (`repairer_id`) REFERENCES `repairers` (`repairer_id`),
    CONSTRAINT `FKlph60ok9q3oibqawro4eawrj` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicles` (`vehicle_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services`
--

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services`
    DISABLE KEYS */;
INSERT INTO `services`
VALUES (1, '2023-01-09', 'Wymiana opon', '2023-01-11', 500, 1, 5),
       (2, '2023-02-08', 'Wymiana opon', '2023-02-11', 600, 2, 11),
       (3, '2023-03-07', 'Wymiana drzwi', '2023-03-11', 200, 3, 7),
       (4, '2023-04-06', 'Wymiana oleju', '2023-04-11', 100, 2, 13),
       (5, '2023-05-05', 'Wymiana opon', '2023-05-11', 700, 1, 2),
       (6, '2023-06-04', 'Wymiana silnika', '2023-06-11', 800, 3, 4),
       (7, '2023-07-03', 'Wymiana szyby', '2023-07-11', 300, 3, 18),
       (8, '2023-08-02', 'Wymiana śrób w kołach', '2023-08-11', 900, 1, 16),
       (9, '2023-09-01', 'Wymiana opon', '2023-09-11', 400, 2, 14);
/*!40000 ALTER TABLE `services`
    ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `showrooms`
--

DROP TABLE IF EXISTS `showrooms`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `showrooms`
(
    `showroom_id` bigint       NOT NULL AUTO_INCREMENT,
    `address`     varchar(255) NOT NULL,
    PRIMARY KEY (`showroom_id`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 2
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `showrooms`
--

LOCK TABLES `showrooms` WRITE;
/*!40000 ALTER TABLE `showrooms`
    DISABLE KEYS */;
INSERT INTO `showrooms`
VALUES (1, 'Akademicka 16 Gliwice'),
       (2, 'Zadupie 300 kilometrów stąd');
/*!40000 ALTER TABLE `showrooms`
    ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users`
(
    `user_id`  bigint       NOT NULL AUTO_INCREMENT,
    `email`    varchar(255) NOT NULL,
    `login`    varchar(255) NOT NULL,
    `name`     varchar(255) NOT NULL,
    `password` varchar(255) NOT NULL,
    `role`     enum ('ADMIN','CLIENT','MANAGER','REPAIRER','DEALER') DEFAULT NULL,
    `surname`  varchar(255) NOT NULL,
    PRIMARY KEY (`user_id`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 5
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users`
    DISABLE KEYS */;
INSERT INTO `users`
VALUES (1, 'manager1@gmail.com', 'manager1', 'Janusz', '1234', 'MANAGER', 'Managier'),
       (2, 'manager2@gmail.com', 'manager2', 'Grzegorz', '1234', 'MANAGER', 'Managier'),
       (3, 'repairer1@gmail.com', 'repairer1', 'Złota', '1234', 'REPAIRER', 'Ronczka'),
       (4, 'repairer2@gmail.com', 'repairer2', 'Srebrna', '1234', 'REPAIRER', 'Ronczka'),
       (5, 'repairer3@gmail.com', 'repairer3', 'Plastikowa', '1234', 'REPAIRER', 'Ronczka'),
       (6, 'dealer1@gmail.com', 'dealer1', 'Handlarz', '1234', 'DEALER', 'Autami'),
       (7, 'dealer2@gmail.com', 'dealer2', 'Handlarz', '1234', 'DEALER', 'Samochodami'),
       (8, 'dealer3@gmail.com', 'dealer3', 'Handlarz', '1234', 'DEALER', 'Pojazdami'),
       (9, 'dealer4@gmail.com', 'dealer4', 'Handlarz', '1234', 'DEALER', 'Wehiklami'),
       (10, 'client1@gmail.com', 'client1', 'Kupie', '1234', 'CLIENT', 'Honde'),
       (11, 'client2@gmail.com', 'client2', 'NieKupie', '1234', 'CLIENT', 'Hondy'),
       (12, 'client3@gmail.com', 'client3', 'Wojciech', '1234', 'CLIENT', 'Wójcik'),
       (13, 'client4@gmail.com', 'client4', 'Pan', '1234', 'CLIENT', 'Prezydent'),
       (14, 'client5@gmail.com', 'client5', 'James', '1234', 'CLIENT', 'LeBron'),
       (15, 'client6@gmail.com', 'client6', 'imie', '1234', 'CLIENT', 'ZMałej'),
       (16, 'client7@gmail.com', 'client7', 'Vehiclepilled', '1234', 'CLIENT', 'Carbuyer'),
       (17, 'admin1@gmail.com', 'admin1', 'Zdzisław', '1234', 'ADMIN', 'Admin');
/*!40000 ALTER TABLE `users`
    ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehicles`
--

DROP TABLE IF EXISTS `vehicles`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vehicles`
(
    `vehicle_id`           bigint       NOT NULL AUTO_INCREMENT,
    `brand`                varchar(255) NOT NULL,
    `model`                varchar(255) NOT NULL,
    `modifications`        varchar(255) DEFAULT NULL,
    `next_inspection_date` date         DEFAULT NULL,
    `price`                double       NOT NULL,
    `was_sold`             bit(1)       DEFAULT NULL,
    `showroom_id`          bigint       DEFAULT NULL,
    `picture_file_name`    varchar(255) DEFAULT NULL,
    PRIMARY KEY (`vehicle_id`),
    KEY `FKlegrvmc28emrbwdsg0ow8b4m8` (`showroom_id`),
    CONSTRAINT `FKlegrvmc28emrbwdsg0ow8b4m8` FOREIGN KEY (`showroom_id`) REFERENCES `showrooms` (`showroom_id`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 2
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicles`
--

LOCK TABLES `vehicles` WRITE;
/*!40000 ALTER TABLE `vehicles`
    DISABLE KEYS */;
INSERT INTO `vehicles`
VALUES (1, 'Skoda', 'Fabia', '', '2025-05-21', 7000, b'1', 1, 'ToyotaYaris.png'),
       (2, 'Skoda', 'Fabia', 'Silnik odrzutowy', '2025-04-11', 13000, b'0', 1, 'ToyotaYaris.png'),
       (3, 'Skoda', 'Fabia', 'Opony zimowe', '2025-08-23', 7200, b'0', 2, 'ToyotaYaris.png'),
       (4, 'Skoda', 'Fabia', 'Szyby pancerne', '2025-01-17', 9500, b'1', 2, 'ToyotaYaris.png'),
       (5, 'Skoda', 'Fabia', 'Napęd na trzy koła', '2025-04-23', 6500, b'1', 1, 'ToyotaYaris.png'),
       (6, 'Skoda', 'Fabia', '', '2025-07-26', 6200, b'0', 2, 'ToyotaYaris.png'),
       (7, 'Skoda', 'Fabia', '', '2025-11-23', 7200, b'1', 1, 'ToyotaYaris.png'),
       (8, 'Skoda', 'Fabia', '', '2025-12-10', 7700, b'0', 1, 'ToyotaYaris.png'),
       (9, 'Skoda', 'Fabia', 'Światła takie tysiąc razy mocniejsze', '2028-02-29', 11000, b'1', 2, 'ToyotaYaris.png'),
       (10, 'Skoda', 'Fabia', '', '2025-03-04', 6100, b'0', 2, 'ToyotaYaris.png'),
       (11, 'Skoda', 'Fabia', 'Głośny klakson', '2025-01-17', 7001, b'0', 2, 'ToyotaYaris.png'),
       (12, 'Skoda', 'Fabia', 'Opony letnie', '2025-10-07', 7200, b'1', 1, 'ToyotaYaris.png'),
       (13, 'Skoda', 'Fabia', '', '2025-02-12', 6700, b'1', 2, 'ToyotaYaris.png'),
       (14, 'Skoda', 'Fabia', 'brak opon', '2025-09-24', 3000, b'1', 1, 'ToyotaYaris.png'),
       (15, 'Skoda', 'Fabia', '', '2025-01-31', 7400, b'0', 2, 'ToyotaYaris.png'),
       (16, 'Skoda', 'Fabia', '', '2025-07-29', 7200, b'0', 2, 'ToyotaYaris.png'),
       (17, 'Skoda', 'Fabia', 'Skórzane fotele', '2025-04-14', 7500, b'1', 1, 'ToyotaYaris.png'),
       (18, 'Skoda', 'Fabia', '', '2025-11-13', 6500, b'1', 2, 'ToyotaYaris.png');
/*!40000 ALTER TABLE `vehicles`
    ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE = @OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE = @OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS = @OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS = @OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT = @OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS = @OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION = @OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES = @OLD_SQL_NOTES */;

-- Dump completed on 2024-05-21 20:15:24