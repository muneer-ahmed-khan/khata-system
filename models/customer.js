"use strict";

module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define("Customer", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    startingBalance: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    balance: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    amountTypeId: DataTypes.INTEGER,
  });

  // associations can be defined here
  Customer.associate = function (models) {
    // every customer has one amountType
    Customer.belongsTo(models.AmountType, {
      as: "amountType",
      foreignKey: "amountTypeId",
    });
    // Customer --> StockBook
    Customer.hasMany(models.StockBook, {
      as: "stockBook",
      foreignKey: "customerId",
    });
    // Customer --> CashBook
    Customer.hasMany(models.CashBook, {
      as: "cashBook",
      foreignKey: "customerId",
    });
  };

  return Customer;
};
