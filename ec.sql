# Host: localhost  (Version: 5.5.45)
# Date: 2019-04-29 16:34:39
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "importedfood"
#

DROP TABLE IF EXISTS `importedfood`;
CREATE TABLE `importedfood` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `src` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `about` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

#
# Data for table "importedfood"
#

INSERT INTO `importedfood` VALUES (1,'../images/imgh/like1.jpg','￥65.00','麦富迪 牛肉双拼系列 贵宾专用牛肉双拼成犬粮 2kg'),(2,'../images/imgh/like2.jpg','￥95.00','畅享Cheer Share 牛肉紫薯成犬粮 1.5kg'),(3,'../images/imgh/like3.jpg','￥295.00','喜乐比SharlovY 黄金燕麦 全犬奶糕10kg'),(4,'../images/imgh/like4.jpg','￥139.00','比瑞吉 健康型天然粮 泰迪贵宾全价成犬粮 2kg'),(5,'../images/imgh/like5.jpg','￥139.00','比瑞吉 健康型天然粮 比熊全价成犬粮 2kg'),(6,'../images/imgh/like6.jpg','￥169.00','冠能 小型犬挑食及美毛配方成犬全价犬粮 2.5kg'),(7,'../images/imgh/like7.jpg','￥489.00','比瑞吉 健康型天然粮 小型犬幼犬粮 10kg'),(8,'../images/imgh/like8.png','￥179.00','冠能 小型犬幼犬全价犬粮 2.5kg'),(9,'../images/imgh/like9.jpg','￥52.00','喜乐比SharlovY 5色活力蔬果 鸡肉配方成犬粮 1.5kg'),(10,'../images/imgh/like10.jpg','￥120.00','优基 鸭肉蛋黄能量果 小型犬幼犬粮 1.5kg'),(11,'../images/imgh/like11.jpg','￥116.00','皇家royal canin PR27小型犬成犬专用狗粮2kg '),(12,'../images/imgh/like12.jpg','￥80.00','皇家royal canin MIS30小型犬奶糕/怀孕母犬/哺乳母犬1kg '),(13,'../images/imgh/like13.jpg','￥37.00','皇家royal canin 泰迪贵宾犬成犬粮 500g '),(14,'../images/imgh/like14.jpg','￥469.00','比瑞吉 健康型天然粮 金毛全价成犬粮 12kg'),(15,'../images/imgh/like15.jpg','￥375.00','冠能小型犬成犬全价犬粮 7kg'),(16,'../images/imgh/like16.jpg','￥72.00','澳大利亚丝倍亮Supercoat 老年犬全价犬粮 1.5kg'),(17,'../images/imgh/like17.jpg','￥85.00','优基 益生菌小型成犬粮 2kg'),(18,'../images/imgh/like18.jpg','￥69.00','澳大利亚丝倍亮Supercoat 小型犬成犬全价犬粮 1.5kg'),(19,'../images/imgh/like19.jpg','￥69.00','澳大利亚丝倍亮Supercoat 成犬全价犬粮 1.5kg'),(20,'../images/imgh/like20.jpg','￥40.00','畅享Cheer Share 乳酪马铃薯贵宾幼犬粮 500g'),(21,'../images/imgh/like21.jpg','￥59.90','麦富迪 小型犬牛肉双拼成犬粮 2kg'),(22,'../images/imgh/like22.jpg','￥95.00','伯纳天纯 低敏配方小型犬 幼犬粮 1.5kg ');
