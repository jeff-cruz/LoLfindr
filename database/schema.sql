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
	CONSTRAINT "users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."roles" (
	"role" TEXT NOT NULL,
	"roleUrl" TEXT NOT NULL,
	CONSTRAINT "roles_pk" PRIMARY KEY ("role")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."champions" (
	"championId" TEXT NOT NULL,
	"details" json NOT NULL,
	CONSTRAINT "champions_pk" PRIMARY KEY ("championId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."ranks" (
	"rank" TEXT NOT NULL,
	"rankUrl" TEXT NOT NULL,
	CONSTRAINT "ranks_pk" PRIMARY KEY ("rank")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."userRoles" (
	"userId" int NOT NULL,
	"roleOne" TEXT NOT NULL,
	"roleTwo" TEXT NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."userChampions" (
	"userId" int NOT NULL,
	"championIdOne" TEXT NOT NULL,
	"championIdTwo" TEXT NOT NULL,
	"championIdThree" TEXT NOT NULL
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
ALTER TABLE "userRoles" ADD CONSTRAINT "userRoles_fk1" FOREIGN KEY ("roleOne") REFERENCES "roles"("role");
ALTER TABLE "userRoles" ADD CONSTRAINT "userRoles_fk2" FOREIGN KEY ("roleTwo") REFERENCES "roles"("role");

ALTER TABLE "userChampions" ADD CONSTRAINT "userChampions_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");
ALTER TABLE "userChampions" ADD CONSTRAINT "userChampions_fk1" FOREIGN KEY ("championIdOne") REFERENCES "champions"("championId");
ALTER TABLE "userChampions" ADD CONSTRAINT "userChampions_fk2" FOREIGN KEY ("championIdTwo") REFERENCES "champions"("championId");
ALTER TABLE "userChampions" ADD CONSTRAINT "userChampions_fk3" FOREIGN KEY ("championIdThree") REFERENCES "champions"("championId");

ALTER TABLE "userRank" ADD CONSTRAINT "userRank_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");
ALTER TABLE "userRank" ADD CONSTRAINT "userRank_fk1" FOREIGN KEY ("rank") REFERENCES "ranks"("rank");
