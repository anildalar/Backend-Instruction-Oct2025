-- CreateTable
CREATE TABLE `teachers` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `fname` VARCHAR(255) NULL,
    `lname` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `students` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `fname` VARCHAR(255) NULL,
    `lname` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
