/*
  Warnings:

  - Made the column `user_phone` on table `users_table` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "users_table_user_cpf_key";

-- AlterTable
ALTER TABLE "users_table" ALTER COLUMN "user_phone" SET NOT NULL,
ALTER COLUMN "user_phone" DROP DEFAULT,
ALTER COLUMN "user_cpf" DROP DEFAULT;
