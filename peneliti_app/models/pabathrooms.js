'use strict';

module.exports = (sequelize, DataTypes) => {
  const Kamar_Mandi_pa = sequelize.define('pabathrooms', {
    siswaIn : DataTypes.INTEGER,
    capacityMax: DataTypes.INTEGER,
    createdBy: DataTypes.INTEGER
  })
  
  Kamar_Mandi_pa.associate = function(models) {


  }
  return Kamar_Mandi_pa;
};