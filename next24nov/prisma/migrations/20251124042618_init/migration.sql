-- CreateTable
CREATE TABLE `business` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `bname` VARCHAR(255) NULL,
    `bc_id` INTEGER UNSIGNED NULL,
    `cities_id` INTEGER UNSIGNED NULL,
    `users_id` INTEGER UNSIGNED NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `business_categories` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `bc_name` VARCHAR(255) NULL,

    UNIQUE INDEX `bc_name`(`bc_name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cities` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,
    `states_id` INTEGER UNSIGNED NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `countries` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,

    UNIQUE INDEX `name`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `employees` (
    `id` INTEGER NOT NULL,
    `name` VARCHAR(50) NULL,
    `salary` DECIMAL(10, 2) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reviews` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `reviewContent` LONGTEXT NULL,
    `reviewStars` TINYINT UNSIGNED NULL,
    `business_id` INTEGER UNSIGNED NULL,
    `users_id` INTEGER UNSIGNED NULL,
    `review_images_id` INTEGER UNSIGNED NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `roles` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `states` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,
    `countries_id` INTEGER UNSIGNED NULL,

    UNIQUE INDEX `name`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `fname` VARCHAR(255) NULL,
    `lname` VARCHAR(255) NULL,
    `email` VARCHAR(255) NULL,
    `password` VARCHAR(255) NULL,

    UNIQUE INDEX `email`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
