-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: car_shop
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `clients`
--

DROP TABLE IF EXISTS `clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clients` (
  `client_id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`client_id`),
  UNIQUE KEY `UK_smrp6gi0tckq1w5rnd7boyowu` (`user_id`),
  CONSTRAINT `FKtiuqdledq2lybrds2k3rfqrv4` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clients`
--

LOCK TABLES `clients` WRITE;
/*!40000 ALTER TABLE `clients` DISABLE KEYS */;
INSERT INTO `clients` VALUES (1,2);
/*!40000 ALTER TABLE `clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dealers`
--

DROP TABLE IF EXISTS `dealers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dealers` (
  `dealer_id` bigint NOT NULL AUTO_INCREMENT,
  `manager_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`dealer_id`),
  UNIQUE KEY `UK_10jndvam70sjubvckk4l6cvxr` (`user_id`),
  KEY `FKocxses6vlpt0hrrv8a1tp4anh` (`manager_id`),
  CONSTRAINT `FKocxses6vlpt0hrrv8a1tp4anh` FOREIGN KEY (`manager_id`) REFERENCES `managers` (`manager_id`),
  CONSTRAINT `FKqoq67umfy4ce8rtk8872opdpp` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dealers`
--

LOCK TABLES `dealers` WRITE;
/*!40000 ALTER TABLE `dealers` DISABLE KEYS */;
INSERT INTO `dealers` VALUES (1,NULL,3);
/*!40000 ALTER TABLE `dealers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `managers`
--

DROP TABLE IF EXISTS `managers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `managers` (
  `manager_id` bigint NOT NULL AUTO_INCREMENT,
  `showroom_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`manager_id`),
  UNIQUE KEY `UK_1ckf1cflviafpcqluwjrpmrp2` (`showroom_id`),
  UNIQUE KEY `UK_6sl3ig444d4qy4c2kq6ju96pf` (`user_id`),
  CONSTRAINT `FK15075knvq6w78g82uhxp0cot7` FOREIGN KEY (`showroom_id`) REFERENCES `showrooms` (`showroom_id`),
  CONSTRAINT `FKsp1db43yf1nqhswrpbwmlnhb9` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `managers`
--

LOCK TABLES `managers` WRITE;
/*!40000 ALTER TABLE `managers` DISABLE KEYS */;
INSERT INTO `managers` VALUES (1,NULL,1);
/*!40000 ALTER TABLE `managers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `order_id` bigint NOT NULL AUTO_INCREMENT,
  `delivery_date` date DEFAULT NULL,
  `price` double NOT NULL,
  `submission_date` date NOT NULL,
  `client_id` bigint DEFAULT NULL,
  `dealer_id` bigint DEFAULT NULL,
  `showroom_id` bigint DEFAULT NULL,
  `vehicle_id` bigint DEFAULT NULL,
  PRIMARY KEY (`order_id`),
  UNIQUE KEY `UK_dcur7gfd2j79cffe5lh8exv7k` (`vehicle_id`),
  KEY `FKm2dep9derpoaehshbkkatam3v` (`client_id`),
  KEY `FKc174cj48olwptv2nlqy2iuiy4` (`dealer_id`),
  KEY `FKmnt30htq2m1fo9q06giu3q3gv` (`showroom_id`),
  CONSTRAINT `FKc174cj48olwptv2nlqy2iuiy4` FOREIGN KEY (`dealer_id`) REFERENCES `dealers` (`dealer_id`),
  CONSTRAINT `FKm2dep9derpoaehshbkkatam3v` FOREIGN KEY (`client_id`) REFERENCES `clients` (`client_id`),
  CONSTRAINT `FKmnt30htq2m1fo9q06giu3q3gv` FOREIGN KEY (`showroom_id`) REFERENCES `showrooms` (`showroom_id`),
  CONSTRAINT `FKov6eiiyhqkasfj9jlt2s6wj5p` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicles` (`vehicle_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

# LOCK TABLES `orders` WRITE;
# /*!40000 ALTER TABLE `orders` DISABLE KEYS */;
# INSERT INTO `orders` VALUES (1,'2024-05-19',2009,'2024-05-19',1,1,1,1),(2,'2024-05-19',3009,'2024-05-19',1,1,1,2);
# /*!40000 ALTER TABLE `orders` ENABLE KEYS */;
# UNLOCK TABLES;
#
# --
-- Table structure for table `repairers`
--

DROP TABLE IF EXISTS `repairers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `repairers` (
  `repairer_id` bigint NOT NULL AUTO_INCREMENT,
  `manager_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`repairer_id`),
  UNIQUE KEY `UK_jir7kgfmhixhol7e9nsdrfnvs` (`user_id`),
  KEY `FK26cm5ppabkxw37cb0ryhgjckg` (`manager_id`),
  CONSTRAINT `FK26cm5ppabkxw37cb0ryhgjckg` FOREIGN KEY (`manager_id`) REFERENCES `managers` (`manager_id`),
  CONSTRAINT `FK6hhbhf0kh2tys42uvkjhlfnx3` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `repairers`
--

LOCK TABLES `repairers` WRITE;
/*!40000 ALTER TABLE `repairers` DISABLE KEYS */;
INSERT INTO `repairers` VALUES (1,NULL,4),(2,NULL,5),(3,NULL,6);
/*!40000 ALTER TABLE `repairers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services`
--

DROP TABLE IF EXISTS `services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `services` (
  `service_id` bigint NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `execution_date` date DEFAULT NULL,
  `price` double NOT NULL,
  `repairer_id` bigint DEFAULT NULL,
  `vehicle_id` bigint DEFAULT NULL,
  `admission_date` date NOT NULL,
  PRIMARY KEY (`service_id`),
  KEY `FKbk7kf7ncfovb4yrnofvjdb6bh` (`repairer_id`),
  KEY `FKlph60ok9q3oibqawro4eawrj` (`vehicle_id`),
  CONSTRAINT `FKbk7kf7ncfovb4yrnofvjdb6bh` FOREIGN KEY (`repairer_id`) REFERENCES `repairers` (`repairer_id`),
  CONSTRAINT `FKlph60ok9q3oibqawro4eawrj` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicles` (`vehicle_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services`
--

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
INSERT INTO `services` VALUES (2,'test','2024-05-25',2000,1,1,'2024-05-15'),(3,'costam',NULL,1212,1,1,'2024-05-19');
/*!40000 ALTER TABLE `services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `showrooms`
--

DROP TABLE IF EXISTS `showrooms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `showrooms` (
  `showroom_id` bigint NOT NULL AUTO_INCREMENT,
  `address` varchar(255) NOT NULL,
  PRIMARY KEY (`showroom_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `showrooms`
--

LOCK TABLES `showrooms` WRITE;
/*!40000 ALTER TABLE `showrooms` DISABLE KEYS */;
INSERT INTO `showrooms` VALUES (1,'Akademicka 16 Gliwice');
/*!40000 ALTER TABLE `showrooms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `login` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('ADMIN','CLIENT','MANAGER','REPAIRER','DEALER') DEFAULT NULL,
  `surname` varchar(255) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'manager@gmail.com','manager','manager','manager','MANAGER','manager'),(2,'client@gmail.com','client','client','client','CLIENT','client'),(3,'dealer@gmail.com','dealer','dealer','dealer','DEALER','dealer'),(4,'repairer@gmail.com','repairer','repairer','repairer','REPAIRER','repairer'),(5,'mechanik2@gmail.com','mechanik2','mechanik','mechanik2','REPAIRER','2'),(6,'mechanik3@gmail.com','mechanik3','mechanik','mechanik3','REPAIRER','3');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehicles`
--

DROP TABLE IF EXISTS `vehicles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vehicles` (
  `vehicle_id` bigint NOT NULL AUTO_INCREMENT,
  `brand` varchar(255) NOT NULL,
  `model` varchar(255) NOT NULL,
  `modifications` varchar(255) DEFAULT NULL,
  `next_inspection_date` date NOT NULL,
  `price` double NOT NULL,
  `showroom_id` bigint DEFAULT NULL,
  PRIMARY KEY (`vehicle_id`),
  KEY `FKlegrvmc28emrbwdsg0ow8b4m8` (`showroom_id`),
  CONSTRAINT `FKlegrvmc28emrbwdsg0ow8b4m8` FOREIGN KEY (`showroom_id`) REFERENCES `showrooms` (`showroom_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicles`
--

LOCK TABLES `vehicles` WRITE;
/*!40000 ALTER TABLE `vehicles` DISABLE KEYS */;
INSERT INTO `vehicles` VALUES (1,'Toyota','Yaris',NULL,'2025-10-13',20000,1),(2,'Ford','Focus','none','1999-10-21',2200,1);
/*!40000 ALTER TABLE `vehicles` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-19 19:47:13
