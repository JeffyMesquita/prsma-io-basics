/*
  Warnings:

  - You are about to drop the column `fk_id_teacher` on the `courses` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[fk_teachers_id]` on the table `courses` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `fk_teachers_id` to the `courses` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "courses" DROP CONSTRAINT "courses_fk_id_teacher_fkey";

-- DropIndex
DROP INDEX "courses_fk_id_teacher_key";

-- AlterTable
ALTER TABLE "courses" DROP COLUMN "fk_id_teacher",
ADD COLUMN     "fk_teachers_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "courses_fk_teachers_id_key" ON "courses"("fk_teachers_id");

-- AddForeignKey
ALTER TABLE "courses" ADD CONSTRAINT "courses_fk_teachers_id_fkey" FOREIGN KEY ("fk_teachers_id") REFERENCES "teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
