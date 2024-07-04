import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../database/connection';

interface CartAttributes {
  cart_id?: number;
  user_id: number;
  created_at?: Date;
  updated_at?: Date;
}

interface CartCreationAttributes extends Optional<CartAttributes, 'cart_id' | 'created_at' | 'updated_at'> {}

class Cart extends Model<CartAttributes, CartCreationAttributes> implements CartAttributes {
  public cart_id!: number;
  public user_id!: number;
  public created_at!: Date;
  public updated_at!: Date;
}

Cart.init(
  {
    cart_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: 'carts',
    timestamps: false,
  }
);

export default Cart;
