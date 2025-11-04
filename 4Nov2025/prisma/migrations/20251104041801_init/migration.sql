/*
  Warnings:

  - Added the required column `course_fee` to the `Courses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `courses` ADD COLUMN `course_fee` VARCHAR(191) NOT NULL;
