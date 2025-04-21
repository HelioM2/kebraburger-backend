-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 21-Abr-2025 às 10:49
-- Versão do servidor: 8.0.31
-- versão do PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES latin1 */;

--
-- Banco de dados: `kebra_burger`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
CREATE TABLE IF NOT EXISTS `pedidos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `produtos` text COLLATE utf8mb4_general_ci,
  `total` decimal(10,2) DEFAULT NULL,
  `endereco` text COLLATE utf8mb4_general_ci,
  `telefone` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `status` int NOT NULL,
  `criado_em` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `pedidos`
--

INSERT INTO `pedidos` (`id`, `produtos`, `total`, `endereco`, `telefone`, `status`, `criado_em`) VALUES
(34, 'esparguete com frango Quantidade: (1) Preço: CVE340 |Arroz especial Quantidade: (1) Preço: CVE330 |Atum Quantidade: (1) Preço: CVE400 |', '1070.00', 'Rua da República da Guiné Bissau 1,1j, 2720-497 Reboleira', '913885948', 1, '2025-04-18 20:45:16'),
(33, 'esparguete com frango Quantidade: (1) Preço: CVE340 |Arroz especial Quantidade: (1) Preço: CVE330 |Atum Quantidade: (1) Preço: CVE400 |', '1070.00', 'Rua da República da Guiné Bissau 1,1j, 2720-497 Reboleira', '913885948', 1, '2025-04-18 21:16:24'),
(32, 'Camarão empanado Quantidade: (1) Preço: CVE300 |Camarão Salteado Quantidade: (1) Preço: CVE350 |Polvo Salteado Quantidade: (1) Preço: CVE400 |Big Burger Quantidade: (1) Preço: CVE450 |', '1500.00', 'Rua da República da Guiné Bissau 1,1j, 2720-497 Reboleira', '913885948', 1, '2025-04-18 20:45:37'),
(31, 'Polvo Salteado Quantidade: (1) Preço: CVE400 |Carnes da casa Quantidade: (1) Preço: CVE600 |Camarão Salteado Quantidade: (1) Preço: CVE350 |Catchupa Quantidade: (1) Preço: CVE34 |', '1384.00', 'Rua da República da Guiné Bissau 1,1j, 2720-497 Reboleira', '913885948', 0, '2025-04-14 18:25:07'),
(27, 'Camarão empanado Quantidade: (2) Preço: CVE300 |Assinha de Frango Quantidade: (1) Preço: CVE350 |Polvo Salteado Quantidade: (1) Preço: CVE400 |', '1350.00', 'Rua da República da Guiné Bissau 1,1j, 2720-497 Reboleira', '913885948', 0, '2025-04-17 17:22:37'),
(30, 'Polvo Salteado Quantidade: (1) Preço: CVE400 |Carnes da casa Quantidade: (1) Preço: CVE600 |Camarão Salteado Quantidade: (1) Preço: CVE350 |Catchupa Quantidade: (1) Preço: CVE34 |', '1384.00', 'Rua da República da Guiné Bissau 1,1j, 2720-497 Reboleira', '913885948', 0, '2025-04-18 18:05:32'),
(35, 'Extra Burger Quantidade: (1) Preço: CVE550 |Assinha de Frango Quantidade: (1) Preço: CVE350 |', '900.00', 'Amadora, praceta Damão 1', '913885948', 0, '2025-04-21 09:34:26');

-- --------------------------------------------------------

--
-- Estrutura da tabela `produtos`
--

DROP TABLE IF EXISTS `produtos`;
CREATE TABLE IF NOT EXISTS `produtos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `descricao` text COLLATE utf8mb4_general_ci,
  `preco` decimal(10,2) DEFAULT NULL,
  `quantidade` int NOT NULL,
  `imagem` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `tipo_artigo` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=67 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `produtos`
--

INSERT INTO `produtos` (`id`, `nome`, `descricao`, `preco`, `quantidade`, `imagem`, `tipo_artigo`, `create_at`) VALUES
(65, 'Hamburger', 'Hamburger big', '12.00', 21, NULL, 'brunch', '2025-04-18 16:01:30'),
(66, 'Hamburger', 'Hamburger big', '12.00', 21, NULL, 'brunch', '2025-04-18 16:01:37'),
(49, 'Hamburger', 'Pizza 4 estacao', '21.00', 122, 'uploads\\1744922073419.jpg', 'brunch', '2025-04-17 20:34:33'),
(50, 'Bife', 'Bife com ovo estrelado', '12.00', 23, 'uploads\\1744922123158.jpg', 'brunch', '2025-04-17 20:35:23'),
(51, 'Catchupa', 'fdsfds vgfdsgdfsg skj bjgfbuiosdhgfudsbgf jdsgfsd gjkhbiusdhbfg98usdhgbfn sisdgflsdgf', '34.00', 32, 'uploads\\1744922185031.jpg', 'brunch', '2025-04-17 20:36:25'),
(52, 'Assinha de Frango', 'Assinha de Frango com picante', '350.00', 21, 'uploads\\1744923954105.webp', 'petiscos', '2025-04-17 21:05:54'),
(53, 'Camarão empanado', 'Camarão empanado crocante', '300.00', 12, 'uploads\\1744924026250.png', 'petiscos', '2025-04-17 21:07:06'),
(54, 'Camarão Salteado', 'Camarao Salteado com picante', '350.00', 12, 'uploads\\1744924126452.jpg', 'petiscos', '2025-04-17 21:08:46'),
(55, 'Big Burger', 'Big Burger com 4 hanburgers, 4 ovos', '450.00', 21, 'uploads\\1744924221936.jpg', 'especialidades', '2025-04-17 21:10:21'),
(56, 'Polvo Salteado', 'Polvo Salteado com picante', '400.00', 34, 'uploads\\1744924295143.jpg', 'especialidades', '2025-04-17 21:11:35'),
(57, 'Extra Burger', 'Extra Burger, 8 hamburgers, 6 ovos', '550.00', 23, 'uploads\\1744924397106.jpg', 'especialidades', '2025-04-17 21:13:17'),
(58, 'Esparguete a balonhasa', 'Esparguete a balonhasa com picante', '350.00', 21, 'uploads\\1744924556755.jpg', 'massas', '2025-04-17 21:15:56'),
(59, 'Atum', 'Atum', '400.00', 23, 'uploads\\1744924591618.jpg', 'pratos', '2025-04-17 21:16:31'),
(60, 'Arroz especial', 'Arroz especial com lehos', '330.00', 12, 'uploads\\1744924632947.jpg', 'pratos', '2025-04-17 21:17:12'),
(61, 'Carnes da casa', 'Carnes da casa especial', '600.00', 12, 'uploads\\1744924669911.jpg', 'pratos', '2025-04-17 21:17:49'),
(62, 'Massa de marisco', 'Massa de marisco', '300.00', 23, 'uploads\\1744924717338.webp', 'massas', '2025-04-17 21:18:37'),
(63, 'esparguete com frango', 'esparguete com frango refogado', '340.00', 12, 'uploads\\1744924756277.jpg', 'massas', '2025-04-17 21:19:16');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
