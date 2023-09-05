const concesionaria = require("../../src/services/main-services");

describe("mainServices", () => {
  it("should return the auto with the given patente", () => {
    //Arrange
    const mockAutos = [
      {
        marca: "Ford",
        modelo: "Fiesta",
        precio: 15000,
        km: 200,
        color: "Azul",
        cuotas: 12,
        anio: 2019,
        patente: "APL123",
        vendido: false,
      },
    ];
    concesionaria.autos = mockAutos;
    //Act
    const result = concesionaria.buscarAuto(mockAutos[0].patente);
    //Assert
    expect(result).toEqual(mockAutos[0]);
  });
  it("should return null if the given patente does not exist", () => {
    //Arrange
    const mockAutos = [
      {
        marca: "Ford",
        modelo: "Fiesta",
        precio: 15000,
        km: 200,
        color: "Azul",
        cuotas: 12,
        anio: 2019,
        patente: "APL123",
        vendido: false,
      },
    ];
    concesionaria.autos = mockAutos;
    //Act
    const result = concesionaria.buscarAuto("ZZZ123");
    //Assert
    expect(result).toEqual(null);
  });
  it("should return the auto with the given patente even if its not caps", () => {
    //Arrange
    const mockAutos = [
      {
        marca: "Ford",
        modelo: "Fiesta",
        precio: 15000,
        km: 200,
        color: "Azul",
        cuotas: 12,
        anio: 2019,
        patente: "APL123",
        vendido: false,
      },
    ];
    concesionaria.autos = mockAutos;
    //Act
    const result = concesionaria.buscarAuto("apl123");
    //Assert
    expect(result).toEqual(mockAutos[0]);
  });
});
