-- versão 1
CREATE TABLE "posts" (
	"id" SERIAL PRIMARY KEY,
	"username" TEXT NOT NULL,
	"title" TEXT NOT NULL,
	"body" TEXT NOT NULL
)

-- versão 2
ALTER TABLE posts ADD "createdAt" DATE;
ALTER TABLE posts RENAME COLUMN "body" TO "content";