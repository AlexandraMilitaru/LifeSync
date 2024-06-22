/*
  Warnings:

  - Added the required column `spent` to the `events` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "events" ADD COLUMN     "spent" DOUBLE PRECISION NOT NULL;
