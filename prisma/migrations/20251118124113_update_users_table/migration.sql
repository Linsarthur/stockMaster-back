/*
  Warnings:

  - A unique constraint covering the columns `[user_phone]` on the table `users_table` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_cpf]` on the table `users_table` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "users_table" ALTER COLUMN "user_email" DROP DEFAULT,
ALTER COLUMN "user_phone" DROP NOT NULL,
ALTER COLUMN "user_cpf" DROP NOT NULL,
ALTER COLUMN "user_password" DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX "users_table_user_phone_key" ON "users_table"("user_phone");

-- CreateIndex
CREATE UNIQUE INDEX "users_table_user_cpf_key" ON "users_table"("user_cpf");
