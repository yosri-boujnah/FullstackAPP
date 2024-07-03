-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema talentlink
-- -----------------------------------------------------
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`client`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`client` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `adress` VARCHAR(100) NOT NULL,
  `phoneNumber` INT NOT NULL,
  `imageUrl` VARCHAR(250) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`freelances`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`freelances` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `adress` VARCHAR(45) NOT NULL,
  `phoneNumber` INT NOT NULL,
  `imageUrl` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`talents`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`talents` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(150) NOT NULL,
  `descreption` VARCHAR(1000) NOT NULL,
  `imageUrl` VARCHAR(250) NOT NULL,
  `price` VARCHAR(45) NOT NULL,
  `category` VARCHAR(45) NOT NULL,
  `rating` VARCHAR(45) NOT NULL,
  `freelances_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_talents_freelances_idx` (`freelances_id` ASC) VISIBLE,
  CONSTRAINT `fk_talents_freelances`
    FOREIGN KEY (`freelances_id`)
    REFERENCES `mydb`.`freelances` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`talents_has_client`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`talents_has_client` (
  `talents_id` INT NOT NULL,
  `client_id` INT NOT NULL,
  PRIMARY KEY (`talents_id`, `client_id`),
  INDEX `fk_talents_has_client_client1_idx` (`client_id` ASC) VISIBLE,
  INDEX `fk_talents_has_client_talents1_idx` (`talents_id` ASC) VISIBLE,
  CONSTRAINT `fk_talents_has_client_talents1`
    FOREIGN KEY (`talents_id`)
    REFERENCES `mydb`.`talents` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_talents_has_client_client1`
    FOREIGN KEY (`client_id`)
    REFERENCES `mydb`.`client` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
