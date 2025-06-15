/*
  Warnings:

  - The values [CLOUDFLARE] on the enum `storage_provider_types` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "storage_provider_types_new" AS ENUM ('S3', 'CLOUDFLARER2');
ALTER TABLE "storage_providers" ALTER COLUMN "type" TYPE "storage_provider_types_new" USING ("type"::text::"storage_provider_types_new");
ALTER TYPE "storage_provider_types" RENAME TO "storage_provider_types_old";
ALTER TYPE "storage_provider_types_new" RENAME TO "storage_provider_types";
DROP TYPE "storage_provider_types_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "storage_providers" DROP CONSTRAINT "storage_providers_userId_fkey";

-- CreateTable
CREATE TABLE "storage_provider_credentials" (
    "id" TEXT NOT NULL,
    "storageProviderId" TEXT NOT NULL,
    "credentials" JSONB NOT NULL,

    CONSTRAINT "storage_provider_credentials_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "storage_providers" ADD CONSTRAINT "storage_providers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "storage_provider_credentials" ADD CONSTRAINT "storage_provider_credentials_storageProviderId_fkey" FOREIGN KEY ("storageProviderId") REFERENCES "storage_providers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
