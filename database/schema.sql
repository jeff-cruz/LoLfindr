set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "public"."users" (
	"userId" serial NOT NULL,
	"username" TEXT NOT NULL,
	"hashedPassword" TEXT NOT NULL,
	"createdAt" timestamp with time zone NOT NULL,
	"imageUrl" TEXT NOT NULL,
	"name" TEXT NOT NULL,
	"bio" TEXT NOT NULL,
	"profile" json NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."roles" (
	"roleUrl" TEXT NOT NULL,
	"role" TEXT NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."champions" (
	"championId" TEXT NOT NULL,
	"details" json NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."ranks" (
	"rankUrl" TEXT NOT NULL,
	"rank" TEXT NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."userRoles" (
	"userId" int NOT NULL,
	"role" TEXT NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."userChampions" (
	"userId" int NOT NULL,
	"championId" TEXT NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."userRank" (
	"userId" int NOT NULL,
	"rank" TEXT NOT NULL
) WITH (
  OIDS=FALSE
);







ALTER TABLE "userRoles" ADD CONSTRAINT "userRoles_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");
ALTER TABLE "userRoles" ADD CONSTRAINT "userRoles_fk1" FOREIGN KEY ("role") REFERENCES "roles"("role");

ALTER TABLE "userChampions" ADD CONSTRAINT "userChampions_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");
ALTER TABLE "userChampions" ADD CONSTRAINT "userChampions_fk1" FOREIGN KEY ("championId") REFERENCES "champions"("championId");

ALTER TABLE "userRank" ADD CONSTRAINT "userRank_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");
ALTER TABLE "userRank" ADD CONSTRAINT "userRank_fk1" FOREIGN KEY ("rank") REFERENCES "ranks"("rank");
