# Migration `20201024203428-making-published-at-optional`

This migration has been generated by Thomas Waldbillig <waldbillig.thomas@gmail.com> at 10/24/2020, 10:34:28 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Post" ALTER COLUMN "publishedAt" DROP NOT NULL
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201024133447-changes..20201024203428-making-published-at-optional
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -24,9 +24,9 @@
   id          String     @id @default(cuid())
   title       String
   content     String
   slug        String
-  publishedAt DateTime
+  publishedAt DateTime?
   author      User       @relation(fields: [authorId], references: [id])
   authorId    String
   categories  Category[]
   comments    Comment[]
```


