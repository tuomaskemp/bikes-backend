-- CreateTable
CREATE TABLE "Station" (
    "id" SERIAL NOT NULL,
    "fid" INTEGER NOT NULL,
    "stationId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "nameSwe" TEXT NOT NULL,
    "nameEn" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "addressSwe" TEXT NOT NULL,
    "city" TEXT,
    "citySwe" TEXT,
    "operator" TEXT,
    "capacity" INTEGER NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Station_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Journey" (
    "id" SERIAL NOT NULL,
    "departureTime" TIMESTAMP(3) NOT NULL,
    "returnTime" TIMESTAMP(3) NOT NULL,
    "departureStationId" INTEGER NOT NULL,
    "returnStationId" INTEGER NOT NULL,
    "coveredDistanceInMeters" INTEGER NOT NULL,
    "durationInSeconds" INTEGER NOT NULL,

    CONSTRAINT "Journey_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Station_stationId_key" ON "Station"("stationId");

-- AddForeignKey
ALTER TABLE "Journey" ADD CONSTRAINT "Journey_departureStationId_fkey" FOREIGN KEY ("departureStationId") REFERENCES "Station"("stationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Journey" ADD CONSTRAINT "Journey_returnStationId_fkey" FOREIGN KEY ("returnStationId") REFERENCES "Station"("stationId") ON DELETE RESTRICT ON UPDATE CASCADE;
