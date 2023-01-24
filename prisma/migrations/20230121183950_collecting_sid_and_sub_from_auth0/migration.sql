/*
  Warnings:

  - You are about to drop the column `oauth_id` on the `User` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "oauth_sid" TEXT,
    "oauth_sub" TEXT,
    "role" TEXT NOT NULL DEFAULT 'user'
);
INSERT INTO "new_User" ("id", "role") SELECT "id", "role" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_oauth_sid_key" ON "User"("oauth_sid");
CREATE UNIQUE INDEX "User_oauth_sub_key" ON "User"("oauth_sub");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
