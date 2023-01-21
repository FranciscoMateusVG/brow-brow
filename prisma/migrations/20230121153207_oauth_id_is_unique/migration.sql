/*
  Warnings:

  - A unique constraint covering the columns `[oauth_id]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "User_oauth_id_key" ON "User"("oauth_id");
