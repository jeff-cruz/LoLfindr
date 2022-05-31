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
	"rankId" TEXT NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."roles" (
	"roleId" TEXT NOT NULL,
	"roleUrl" TEXT NOT NULL,
	CONSTRAINT "roles_pk" PRIMARY KEY ("roleId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."champions" (
	"championId" TEXT NOT NULL,
	"championUrl" TEXT NOT NULL,
	CONSTRAINT "champions_pk" PRIMARY KEY ("championId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."ranks" (
	"rankId" TEXT NOT NULL,
	"rankUrl" TEXT NOT NULL,
	CONSTRAINT "ranks_pk" PRIMARY KEY ("rankId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."userRoles" (
	"userId" int NOT NULL,
	"roleId" TEXT NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."userChampions" (
	"userId" int NOT NULL,
	"championId" TEXT NOT NULL
) WITH (
  OIDS=FALSE
);



ALTER TABLE "users" ADD CONSTRAINT "users_fk0" FOREIGN KEY ("rankId") REFERENCES "ranks"("rankId");




ALTER TABLE "userRoles" ADD CONSTRAINT "userRoles_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");
ALTER TABLE "userRoles" ADD CONSTRAINT "userRoles_fk1" FOREIGN KEY ("roleId") REFERENCES "roles"("roleId");

ALTER TABLE "userChampions" ADD CONSTRAINT "userChampions_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");
ALTER TABLE "userChampions" ADD CONSTRAINT "userChampions_fk1" FOREIGN KEY ("championId") REFERENCES "champions"("championId");
