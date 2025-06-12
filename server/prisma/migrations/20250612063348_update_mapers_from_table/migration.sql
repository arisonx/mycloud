/*
  Warnings:

  - You are about to drop the `StorageProvider` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Upload` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "storage_provider_types" AS ENUM ('S3', 'CLOUDFLARE');

-- CreateEnum
CREATE TYPE "upload_types" AS ENUM ('IMAGE', 'VIDEO', 'AUDIO', 'DOCUMENT', 'FOLDER', 'OTHER');

-- DropForeignKey
ALTER TABLE "StorageProvider" DROP CONSTRAINT "StorageProvider_userId_fkey";

-- DropForeignKey
ALTER TABLE "Upload" DROP CONSTRAINT "Upload_storageProviderId_fkey";

-- DropTable
DROP TABLE "StorageProvider";

-- DropTable
DROP TABLE "Upload";

-- DropTable
DROP TABLE "User";

-- DropEnum
DROP TYPE "StorageProviderType";

-- DropEnum
DROP TYPE "UploadType";

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "storage_providers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "storage_provider_types" NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "storage_providers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "uploads" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "upload_types" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "storageProviderId" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "bucket" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "endpoint" TEXT NOT NULL,

    CONSTRAINT "uploads_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "storage_providers" ADD CONSTRAINT "storage_providers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "uploads" ADD CONSTRAINT "uploads_storageProviderId_fkey" FOREIGN KEY ("storageProviderId") REFERENCES "storage_providers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
