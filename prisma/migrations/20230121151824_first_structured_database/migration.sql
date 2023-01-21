-- CreateTable
CREATE TABLE "Ficha" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_id" TEXT NOT NULL,
    "exercicio_id" TEXT NOT NULL,
    "series" INTEGER NOT NULL,
    "repeticoes" INTEGER NOT NULL,
    "descanso" INTEGER NOT NULL,
    CONSTRAINT "Ficha_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Ficha_exercicio_id_fkey" FOREIGN KEY ("exercicio_id") REFERENCES "Exercicio" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Exercicio" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "youtube_url" TEXT
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "oauth_id" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'user'
);
