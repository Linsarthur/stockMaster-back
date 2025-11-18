-- CreateTable
CREATE TABLE "users_table" (
    "user_id" SERIAL NOT NULL,
    "user_name" VARCHAR(100) NOT NULL,
    "user_email" VARCHAR(255) NOT NULL DEFAULT '100',
    "user_phone" VARCHAR(255) DEFAULT '20',
    "user_cpf" VARCHAR(255) NOT NULL DEFAULT '14',
    "user_password" VARCHAR(255) NOT NULL DEFAULT '255',

    CONSTRAINT "users_table_pkey" PRIMARY KEY ("user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_table_user_email_key" ON "users_table"("user_email");

-- CreateIndex
CREATE UNIQUE INDEX "users_table_user_cpf_key" ON "users_table"("user_cpf");
