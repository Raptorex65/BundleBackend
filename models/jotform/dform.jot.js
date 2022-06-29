module.exports = (sequelize, DataTypes) => {
  const Form = sequelize.define("dform", {
Submission_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
Username: {
      type: DataTypes.STRING,
    },
Pretty: {
      type: DataTypes.STRING(1234) ,
    },
Pictures_address: {
    type: DataTypes.STRING,
  },
Pictures_data: {
    type: DataTypes.STRING,
  },
Address_line1: {
    type: DataTypes.STRING,
  },
Address_line2: {
    type: DataTypes.STRING,
  },
Address_city: {
    type: DataTypes.STRING,
  },
Postal_code: {
    type: DataTypes.STRING,
  },
Address_canton: {
    type: DataTypes.STRING,
  },
Phone: {
    type: DataTypes.INTEGER,
  },
Category: {
    type: DataTypes.STRING,
  },
Address_city: {
    type: DataTypes.STRING,
  },
Type: {
    type: DataTypes.STRING,
  },
Description: {
    type: DataTypes.STRING,
  },
Webhook_url: {
    type: DataTypes.STRING,
  }
});
  return Form;
};


