import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../database/connection';

interface CartItemAttributes {
  cart_item_id?: number;
  cart_id: number;
  product_id: number;
  quantity: number;
  created_at?: Date;
  updated_at?: Date;
}

interface CartItemCreationAttributes extends Optional<CartItemAttributes, 'cart_item_id' | 'created_at' | 'updated_at'> {}

class CartItem extends Model<CartItemAttributes, CartItemCreationAttributes> implements CartItemAttributes {
  public cart_item_id!: number;
  public cart_id!: number;
  public product_id!: number;
  public quantity!: number;
  public created_at!: Date;
  public updated_at!: Date;
}

CartItem.init(
  {
    cart_item_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cart_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
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
    tableName: 'cart_items',
    timestamps: false,
  }
);

export default CartItem;
